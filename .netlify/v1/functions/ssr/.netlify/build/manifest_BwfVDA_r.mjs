import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'devalue';
import { j as decodeKey } from './chunks/astro/server_Cg3e6tzO.mjs';
import 'clsx';
import 'html-escaper';

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/","adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blogroll/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blogroll","isIndex":true,"type":"page","pattern":"^\\/blogroll\\/?$","segments":[[{"content":"blogroll","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogroll/index.astro","pathname":"/blogroll","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":true,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/index.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[]).concat([\"dataLayer.push\"])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");if(r)e.newDocument.body.append(r)})})(document);"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bc4y2LfH.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[]).concat([\"dataLayer.push\"])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");if(r)e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/_slug_.pgQCRahL.css"}],"routeData":{"route":"/blog/search","isIndex":false,"type":"page","pattern":"^\\/blog\\/search\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/search.astro","pathname":"/blog/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://wilsonmunoz.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/blog/search.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/blogroll/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/contact/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/projects/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/tags/[tags].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/search@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tags]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/search@_@astro":"pages/blog/search.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/blogroll/index@_@astro":"pages/blogroll.astro.mjs","\u0000@astro-page:src/pages/contact/index@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/tags/[tags]@_@astro":"pages/tags/_tags_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BwfVDA_r.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2023-11-06-guia-completa-para-maquetar-un-diseno.mdx?astroContentCollectionEntry=true":"chunks/2023-11-06-guia-completa-para-maquetar-un-diseno_CerziwaV.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2023-11-14-como-crear-3-atractivas-secciones-hero.mdx?astroContentCollectionEntry=true":"chunks/2023-11-14-como-crear-3-atractivas-secciones-hero_B61Vae4X.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2023-12-02-combinadores-css-como-seleccionar-varias-etiquetas-en-html.mdx?astroContentCollectionEntry=true":"chunks/2023-12-02-combinadores-css-como-seleccionar-varias-etiquetas-en-html_BBrlVmG4.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2023-12-14-guia-efectiva-de-diseno-web-como-centrar-en-css.mdx?astroContentCollectionEntry=true":"chunks/2023-12-14-guia-efectiva-de-diseno-web-como-centrar-en-css_VIbhlEyu.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2024-01-03-design-thinking-para-web.mdx?astroContentCollectionEntry=true":"chunks/2024-01-03-design-thinking-para-web_errjvlpZ.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2024-02-23-mis-apuntes-del-curso-de-ux.mdx?astroContentCollectionEntry=true":"chunks/2024-02-23-mis-apuntes-del-curso-de-ux_Dl1RoHDu.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2023-11-06-guia-completa-para-maquetar-un-diseno.mdx?astroPropagatedAssets":"chunks/2023-11-06-guia-completa-para-maquetar-un-diseno_BW_ZaQkc.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2023-11-14-como-crear-3-atractivas-secciones-hero.mdx?astroPropagatedAssets":"chunks/2023-11-14-como-crear-3-atractivas-secciones-hero_D8WZaChI.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2023-12-02-combinadores-css-como-seleccionar-varias-etiquetas-en-html.mdx?astroPropagatedAssets":"chunks/2023-12-02-combinadores-css-como-seleccionar-varias-etiquetas-en-html_D5MeWOmg.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2023-12-14-guia-efectiva-de-diseno-web-como-centrar-en-css.mdx?astroPropagatedAssets":"chunks/2023-12-14-guia-efectiva-de-diseno-web-como-centrar-en-css_DTOhMid3.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2024-01-03-design-thinking-para-web.mdx?astroPropagatedAssets":"chunks/2024-01-03-design-thinking-para-web__x_cbTE-.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2024-02-23-mis-apuntes-del-curso-de-ux.mdx?astroPropagatedAssets":"chunks/2024-02-23-mis-apuntes-del-curso-de-ux_DGCLhSVX.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2023-11-06-guia-completa-para-maquetar-un-diseno.mdx":"chunks/2023-11-06-guia-completa-para-maquetar-un-diseno_3V8h2OZ-.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2023-11-14-como-crear-3-atractivas-secciones-hero.mdx":"chunks/2023-11-14-como-crear-3-atractivas-secciones-hero_v-j0XYTr.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2023-12-02-combinadores-css-como-seleccionar-varias-etiquetas-en-html.mdx":"chunks/2023-12-02-combinadores-css-como-seleccionar-varias-etiquetas-en-html_BDr-FjtD.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2023-12-14-guia-efectiva-de-diseno-web-como-centrar-en-css.mdx":"chunks/2023-12-14-guia-efectiva-de-diseno-web-como-centrar-en-css_UKyJIrhj.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2024-01-03-design-thinking-para-web.mdx":"chunks/2024-01-03-design-thinking-para-web_CaTjxdyp.mjs","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2024-02-23-mis-apuntes-del-curso-de-ux.mdx":"chunks/2024-02-23-mis-apuntes-del-curso-de-ux_D98rr5R3.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.BSjhxmPe.js","C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/components/Figcaption":"_astro/Figcaption.BSacAFgB.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_astro/hoisted.Bc4y2LfH.js","/astro/hoisted.js?q=2":"_astro/hoisted.BB6uRyKX.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/structure.Be-8eWS0.jpg","/_astro/01.BD1SYKj-.jpg","/_astro/esquema-design-thinking.DLzxuI9F.png","/_astro/maqueta-de-alta-fidelidad.CSYu1WjQ.png","/_astro/code-illustration.BM6McTCe.svg","/_astro/code-illustration-dark.Cnx9e97Q.svg","/_astro/careerist.CiSyFMEh.jpg","/_astro/dentis.COdSzBVx.jpg","/_astro/justice.BALAEG5Y.jpg","/_astro/gallery.B8PWHmuW.jpg","/_astro/people.DE4IFxsp.jpg","/_astro/peli.CfhWKRGa.jpg","/_astro/easybank.j3JeMuon.jpg","/_astro/boldo.Cs0zX-Kx.png","/_astro/ia-landing.BbKrDOvE.png","/_astro/pixel-punk.DQCxRjTn.png","/_astro/travel-landing.DsvNZWfI.png","/_astro/gradiente.AtjoYzcv.png","/_astro/sunny.Cr24IkJ7.svg","/_astro/logo-wilson.ZNDt4tLY.svg","/_astro/Video_2023-11-08_maquetacion-web.hwBe54w1.mp4","/_astro/guide.th3QNCOY.png","/_astro/Desktop.DkdPr9f1.jpg","/_astro/estructura-html.CpEiYceT.png","/_astro/vsc.DOsIM7JS.png","/_astro/planteamiento-del-problema.CGhkrHjV.png","/_astro/historia-de-usuario.CqcBUIFX.jpg","/_astro/personas-ux.DHHAu_Zu.jpg","/_astro/mapa-de-recorrido-de-usuario.DpTD61EN.png","/_astro/prototipo-baja-fidelidad.kIiukWdQ.png","/_astro/esquema-de-pagina-crazy-eights.DbhNyQMN.jpg","/_astro/mapa-de-sitio.C0fKaYsp.jpg","/_astro/combinador-de-hermanos-adyacentes.J1mlKQnB.png","/_astro/combinador-de-hermanos-generales.Ca7DmBnz.png","/_astro/combinador-descendiente-espacio.CB3O5AFV.png","/_astro/combinador-de-hijos-directos.Ctywimym.png","/_astro/02.B0a2mBOg.jpg","/_astro/03.CmT7jFyX.jpg","/_astro/grid-area.CHhcGOMk.png","/_astro/gif-grid-areas.DOIqpKt3.webp","/_astro/img-hero-area.B_TQ7cso.png","/_astro/hero-after.BRezxdMU.png","/_astro/_slug_.pgQCRahL.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/default-social.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/mstile-144x144.png","/mstile-150x150.png","/mstile-310x150.png","/mstile-310x310.png","/mstile-70x70.png","/safari-pinned-tab.svg","/site.webmanifest","/_astro/client.BIGLHmRd.js","/_astro/Figcaption.BSacAFgB.js","/_astro/hoisted.BB6uRyKX.js","/_astro/hoisted.Bc4y2LfH.js","/_astro/hoisted.BSjhxmPe.js","/_astro/index.DhYZZe0J.js","/404.html","/about/index.html","/blogroll/index.html","/contact/index.html","/projects/index.html","/rss.xml","/tags/index.html","/index.html","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"mFz4+yziCceR9YjFRfpPvEKQgFyMWRPJoZ8cb8Q1oSk=","experimentalEnvGetSecretEnabled":false});

export { manifest };
