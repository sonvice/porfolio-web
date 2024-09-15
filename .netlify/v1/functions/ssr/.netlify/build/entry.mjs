import { renderers } from './renderers.mjs';
import { manifest } from './manifest_OJCnDtg9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic__yT9UR2W.mjs');
const _page1 = () => import('./chunks/404_gMdLQt1-.mjs');
const _page2 = () => import('./chunks/index_DWhz4MiU.mjs');
const _page3 = () => import('./chunks/search_CHMnIEpT.mjs');
const _page4 = () => import('./chunks/_.._BtabW4Tt.mjs');
const _page5 = () => import('./chunks/index_DzOO-tCi.mjs');
const _page6 = () => import('./chunks/index_wg382E63.mjs');
const _page7 = () => import('./chunks/index_CadAYDJK.mjs');
const _page8 = () => import('./chunks/rss_DU1yUUB2.mjs');
const _page9 = () => import('./chunks/_tags__BQVeA9gd.mjs');
const _page10 = () => import('./chunks/index_DMIPReaB.mjs');
const _page11 = () => import('./chunks/_slug___8mFbpmJ.mjs');
const _page12 = () => import('./chunks/index_6bYfKsCc.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/index.astro", _page2],
    ["src/pages/blog/search.astro", _page3],
    ["src/pages/blog/[...page].astro", _page4],
    ["src/pages/blogroll/index.astro", _page5],
    ["src/pages/contact/index.astro", _page6],
    ["src/pages/projects/index.astro", _page7],
    ["src/pages/rss.xml.js", _page8],
    ["src/pages/tags/[tags].astro", _page9],
    ["src/pages/tags/index.astro", _page10],
    ["src/pages/[slug].astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "54d0b9c0-a786-4ff5-af95-a4adb92aa894"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
