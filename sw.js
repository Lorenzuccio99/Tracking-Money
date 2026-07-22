const CACHE_NAME = 'app-tracking-spese-v57-persistent-offline';
const INDEX_URL = './index.html';
const VERSIONED_INDEX_URL = './index.html?v=57';

const APP_SHELL = [
  './',
  INDEX_URL,
  VERSIONED_INDEX_URL,
  './manifest.json',
  './sw.js',
  './README.txt',
  './icona-app-1024.png',
  './apple-touch-icon.png',
  './apple-touch-icon-precomposed.png',
  './icons/icon-1024.png',
  './icons/icon-512.png',
  './icons/icon-192.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './icons/favicon-16.png'
];

async function fetchAndCache(cache, url) {
  const request = new Request(url, { cache: 'reload' });
  const response = await fetch(request);
  if (!response || !response.ok) {
    throw new Error(`Risorsa non disponibile: ${url}`);
  }
  await cache.put(url, response.clone());
  return response;
}

async function precacheAppShell() {
  const cache = await caches.open(CACHE_NAME);

  // L'HTML principale è obbligatorio.
  await fetchAndCache(cache, INDEX_URL);

  // Le altre risorse vengono salvate singolarmente:
  // un'icona mancante non può più annullare tutta la modalità offline.
  await Promise.allSettled(
    APP_SHELL
      .filter(url => url !== INDEX_URL)
      .map(url => fetchAndCache(cache, url))
  );

  // Copie aggiuntive stabili per root e URL con query di versione.
  const indexResponse = await cache.match(INDEX_URL);
  if (indexResponse) {
    await cache.put('./', indexResponse.clone());
    await cache.put(VERSIONED_INDEX_URL, indexResponse.clone());
  }
}

self.addEventListener('install', event => {
  event.waitUntil(
    precacheAppShell().then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(key => key.startsWith('app-tracking-spese-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

async function updateNavigationCache(request) {
  try {
    const response = await fetch(request);
    if (!response || !response.ok) return null;

    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
    await cache.put(INDEX_URL, response.clone());
    await cache.put('./', response.clone());
    return response;
  } catch (error) {
    return null;
  }
}

async function cacheFirstNavigation(request, event) {
  const cache = await caches.open(CACHE_NAME);

  const cached =
    await cache.match(request, { ignoreSearch: true }) ||
    await cache.match(INDEX_URL, { ignoreSearch: true }) ||
    await cache.match('./', { ignoreSearch: true });

  if (cached) {
    // L'app si apre subito dalla cache; l'aggiornamento avviene in background.
    event.waitUntil(updateNavigationCache(request));
    return cached;
  }

  const networkResponse = await updateNavigationCache(request);
  if (networkResponse) return networkResponse;

  return new Response(
    '<!doctype html><html lang="it"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"><title>APP Tracking Spese</title><body style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;padding:24px;background:#f7f8ff;color:#101828"><h1>APP Tracking Spese</h1><p>La modalità offline non è stata ancora installata in questo contesto. Collegati una volta a internet e apri l’app dall’icona Home fino al messaggio “App pronta anche senza connessione”.</p></body></html>',
    {
      status: 503,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    }
  );
}

async function cacheFirstAsset(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      await cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(cacheFirstNavigation(request, event));
    return;
  }

  event.respondWith(cacheFirstAsset(request));
});
