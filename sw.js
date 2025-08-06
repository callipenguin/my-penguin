// Service Worker for PWA
const CACHE_NAME = "penguin-assistant-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  // 추가 정적 파일들은 필요에 따라 추가
];

// Service Worker 설치
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 캐시된 리소스 반환
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // 캐시에 있으면 캐시된 버전을 반환
      if (response) {
        return response;
      }
      // 없으면 네트워크에서 가져오기
      return fetch(event.request);
    })
  );
});

// 구버전 캐시 정리
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
