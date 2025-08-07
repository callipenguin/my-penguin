// 펭귄 비서 Service Worker
const CACHE_NAME = "penguin-assistant-v2"; // 버전 업데이트
const urlsToCache = ["/my-penguin/", "/my-penguin/index.html", "/my-penguin/manifest.json"];

// 설치 이벤트
self.addEventListener("install", (event) => {
  console.log("🐧 Service Worker: 새 버전 설치 중...");

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
      .then(() => {
        // 즉시 활성화
        return self.skipWaiting();
      })
  );
});

// 활성화 이벤트
self.addEventListener("activate", (event) => {
  console.log("🐧 Service Worker: 활성화 중...");

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("🐧 Service Worker: 오래된 캐시 삭제", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // 모든 클라이언트에서 새 Service Worker 즉시 적용
        return self.clients.claim();
      })
  );
});

// 네트워크 요청 처리
self.addEventListener("fetch", (event) => {
  // 네트워크 우선 전략 (항상 최신 파일 가져오기)
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 성공적으로 가져온 경우 캐시에 저장
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // 네트워크 실패 시 캐시에서 가져오기
        return caches.match(event.request);
      })
  );
});
