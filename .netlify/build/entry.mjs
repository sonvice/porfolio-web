import { renderers } from './renderers.mjs';
import { manifest } from './manifest_hA8_uYYL.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic__yT9UR2W.mjs');
const _page1 = () => import('./chunks/404_CzChX1ZF.mjs');
const _page2 = () => import('./chunks/index_BKHAVjrP.mjs');
const _page3 = () => import('./chunks/search_D0REQ6Q8.mjs');
const _page4 = () => import('./chunks/_.._DP7H5JQB.mjs');
const _page5 = () => import('./chunks/index_BxBXEw93.mjs');
const _page6 = () => import('./chunks/index_DPQl5HxQ.mjs');
const _page7 = () => import('./chunks/index_D7kWMlrM.mjs');
const _page8 = () => import('./chunks/rss_BiIa4505.mjs');
const _page9 = () => import('./chunks/_tags__BXkexh8U.mjs');
const _page10 = () => import('./chunks/index_BztI1VCL.mjs');
const _page11 = () => import('./chunks/_slug__DkxZiqdd.mjs');
const _page12 = () => import('./chunks/index_9joYXA_u.mjs');
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
    "middlewareSecret": "19eb4ef6-183f-4c83-8265-533ef495a298"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
