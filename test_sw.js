navigator.serviceWorker.register('/sw.js').then(function(registration) {
  // 등록이 성공했다면 (즉 설치가 완료되었다면)
  alert("service worker sucess");
}).catch(function(err) {
  // 등록이 실패했다면
  alert("service worker fail");
});


self.addEventListener('install', function(event) {
  // 설치를 여기서 진행한다
  alert("install");
})
