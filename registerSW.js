if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/test-gpg-pwa/sw.js', { scope: '/test-gpg-pwa/' })})}