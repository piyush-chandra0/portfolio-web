
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-web/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-web"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 613, hash: '4c18eed04bbfd5d1e9c444002ca019a56e8936192a0c6446daccdeba664f7fb6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 938, hash: '66b70b5f0e0b7087207b73ad1d21977fb336d6fe9f2296d289634dffc110c850', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1503, hash: '7f0751f6aec11214d4348bdb07b8045b5ea427f687856097fb104c4bc7902440', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LAXFBFPS.css': {size: 255, hash: 'E43QptJNrok', text: () => import('./assets-chunks/styles-LAXFBFPS_css.mjs').then(m => m.default)}
  },
};
