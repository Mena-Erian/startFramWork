
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/startFarmeWork-Angular-/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/startFarmeWork-Angular-/home",
    "route": "/startFarmeWork-Angular-"
  },
  {
    "renderMode": 2,
    "route": "/startFarmeWork-Angular-/home"
  },
  {
    "renderMode": 2,
    "route": "/startFarmeWork-Angular-/about"
  },
  {
    "renderMode": 2,
    "route": "/startFarmeWork-Angular-/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/startFarmeWork-Angular-/contact"
  }
],
  assets: {
    'index.csr.html': {size: 6043, hash: '142ffc496ead84666009aabb26ac73f4278d5f153926044e344fa5adc02d81dc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1086, hash: '5d60896814bdbea8b2785e0398f5b6e8d5e6c95614c8b7485285e6996b8047d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19575, hash: '7efdbbb58806234b68b75c8ca1fcdbdd16061c6b3e011f81ab6824e465ca0cc7', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19421, hash: 'd1369b6cfc5d321da5dae9fb37b651a8111a52238135d9eb56ce9c490af18161', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 27050, hash: '283ea8f68c4f3b17e7f5a78be1a77cad1e1138d6b2c4d828c8e915ed6abfabbc', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 23809, hash: '4568c0815fb5c239bd7536067e6830ba693ab998d13373f7582bcef6e086af98', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-7VVHNB6X.css': {size: 306039, hash: 'pJoviO9wNX0', text: () => import('./assets-chunks/styles-7VVHNB6X_css.mjs').then(m => m.default)}
  },
};
