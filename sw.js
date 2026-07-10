const CACHE_NAME = 'app-tracking-spese-v55-offline-first';
const APP_SHELL = [
  './',
  './index.html',
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

const INDEX_URL = './index.html';

async function precache() {
  const cache = await caches.open(CACHE_NAME);
  const requests = APP_SHELL.map(url => new Request(url, { cache: 'reload' }));
  await cache.addAll(requests);
}

self.addEventListener('install', event => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith('app-tracking-spese-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

async function networkFirstNavigation(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
      await cache.put(INDEX_URL, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return (
      await cache.match(request, { ignoreSearch: true }) ||
      await cache.match(INDEX_URL) ||
      new Response(
        '<!doctype html><html lang="it"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline</title><body style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;padding:24px;background:#f7f8ff;color:#101828"><h1>APP Tracking Spese</h1><p>L’app è offline e la cache non è ancora disponibile. Aprila almeno una volta con internet per abilitarla offline.</p></body></html>',
        { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
      )
    );
  }
}

async function cacheFirstAsset(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) return cached;

  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return cached || Response.error();
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });

  const networkPromise = fetch(request)
    .then(response => {
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);

  return cached || await networkPromise || await cache.match(INDEX_URL);
}

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  if (
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.ico') ||
    url.pathname.endsWith('manifest.json')
  ) {
    event.respondWith(cacheFirstAsset(request));
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});
