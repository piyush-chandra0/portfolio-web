
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://piyush-chandra0.github.io/portfolio-web/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-web"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 646, hash: '40e3e3c7dfc0780d568059704f748488cc47a65b44af347934533509d48ac9ec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 971, hash: '95caa34a98bf427f86b15346da4b701f3f1a55f69b219579f19dbe07a825ef3d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1536, hash: '49bcc21af6a7e7bf4f9bcc191d9b657705f769301d8797057f3094cbb9d8bb7b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LAXFBFPS.css': {size: 255, hash: 'E43QptJNrok', text: () => import('./assets-chunks/styles-LAXFBFPS_css.mjs').then(m => m.default)}
  },
};
