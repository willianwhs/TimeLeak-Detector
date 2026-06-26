// Service Worker essencial para habilitar os recursos do PWA
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Permite carregamento dinâmico direto da hospedagem gratuita
});
