
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 6019, hash: '019124b07823b314c7343c44c7eac617cdf05bba8ce11bef660804a064902636', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1062, hash: '61255fe503826b74ea2162fb0337840b8df2a565c7b50a65331babe4d8101f90', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7VVHNB6X.css': {size: 306039, hash: 'pJoviO9wNX0', text: () => import('./assets-chunks/styles-7VVHNB6X_css.mjs').then(m => m.default)}
  },
};
