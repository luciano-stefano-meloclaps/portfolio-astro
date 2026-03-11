import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CNzfYHL8.mjs';
import { manifest } from './manifest_WkPdfngH.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/api/send-email.astro.mjs');
const _page2 = () => import('./pages/certifications/_slug_.astro.mjs');
const _page3 = () => import('./pages/projects/_slug_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.16.11_@types+node@2_dd142481f2f6c13adeaa2e008a31dea3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/send-email.ts", _page1],
    ["src/pages/certifications/[slug].astro", _page2],
    ["src/pages/projects/[slug].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "466b8f3d-45fa-486a-a848-84a9c2aa1574",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
