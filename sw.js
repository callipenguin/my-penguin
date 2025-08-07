// 펭귄 비서 Service Worker
const CACHE_NAME = "penguin-assistant-v1";
const urlsToCache = ["/my-penguin/", "/my-penguin/index.html", "/my-penguin/manifest.json"];

// 설치 이벤트
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("🐧 Service Worker: 캐시 열기 성공");
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log("🐧 Service Worker: 캐시 오류", error);
      })
  );
});

// 활성화 이벤트
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("🐧 Service Worker: 오래된 캐시 삭제", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 네트워크 요청 가로채기
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // 캐시에 있으면 캐시에서 반환
      if (response) {
        return response;
      }

      // 캐시에 없으면 네트워크에서 가져오기
      return fetch(event.request).catch(() => {
        // 네트워크 오류 시 기본 페이지 반환
        if (event.request.destination === "document") {
          return caches.match("/my-penguin/index.html");
        }
      });
    })
  );
});
