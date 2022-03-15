const AlarmClock = "Clock-v1"
const assets = [
  
  "index.html",
  "style.css",
  "script.js",
  "clock.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(AlarmClock).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })