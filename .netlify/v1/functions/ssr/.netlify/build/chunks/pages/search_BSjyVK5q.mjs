import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, u as unescapeHTML, i as renderComponent, j as Fragment, k as renderSlot, l as renderHead, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent } from '../astro_Cdevtyke.mjs';
import 'kleur/colors';
import 'clsx';
import { optimize } from 'svgo';
/* empty css                           */
import { prependForwardSlash } from '@astrojs/internal-helpers/path';

const logo = new Proxy({"src":"/_astro/logo-wilson.ZNDt4tLY.svg","width":42,"height":45,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/icons/logo-wilson.svg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/sunny.Cr24IkJ7.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/icons/sunny.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$d = createAstro("https://wilsonmunoz.com/");
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Head;
  return renderTemplate`${maybeRenderHead()}<header class="head | container-lg py-space-l d-flex"> <a href="/"> <img${addAttribute(logo.src, "src")}${addAttribute(logo.width, "width")}${addAttribute(logo.height, "height")} alt="Logo Wilson"> </a> <small class="ml-space-m"><a href="/rss.xml">RSS Feed</a></small> </header> `;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/components/Head.astro", void 0);

const $$Astro$c = createAstro("https://wilsonmunoz.com/");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/node_modules/astro/components/ViewTransitions.astro", void 0);

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = import.meta.globEager(
        "/src/icons/**/*.{js,ts,cjs,mjc,cts,mts}"
      );
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = import.meta.globEager("/src/icons/**/*.svg", { as: "raw" });
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$b = createAstro("https://wilsonmunoz.com/");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$a = createAstro("https://wilsonmunoz.com/");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet> ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)} </svg>`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$9 = createAstro("https://wilsonmunoz.com/");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$8 = createAstro("https://wilsonmunoz.com/");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}> ${title ? renderTemplate`<title>${title}</title>` : ""} <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use> </svg>`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$7 = createAstro("https://wilsonmunoz.com/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  let date = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="footer | container-lg mt-space-3xl mb-space-l"> <div class="footer__info | d-flex mt-space-l"> <div class="footer__name d-flex"> <small>${`Wilson \xA9 2023 - ${date.getFullYear()}`}</small> <small>
Este sitio está construido con <a href="https://astro.build/">Astro</a></small> </div> <div class="footer__icon | d-flex"> <a href="https://github.com/sonvice" target="_blank" aria-label="GitHub"> ${renderComponent($$result, "Icon", $$Icon, { "name": "prime:github" })} </a> <a href="https://www.linkedin.com/in/wilsonmunozc" target="_blank" aria-label="Linkedin"> ${renderComponent($$result, "Icon", $$Icon, { "name": "prime:linkedin" })} </a> <a href="https://twitter.com/wilvmc" target="_blank" aria-label="Twitter"> ${renderComponent($$result, "Icon", $$Icon, { "name": "prime:twitter" })} </a> <a href="/contact" aria-label="Contact"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ic:round-mail" })} </a> </div> </div> </footer>`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/layouts/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://wilsonmunoz.com/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, class: className } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL("/default-social.png", Astro2.url);
  return renderTemplate(_a || (_a = __template([`<html lang="en"> <head><!-- Google tag (gtag.js) --><script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-KXEE0J7K2L"><\/script><script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-KXEE0J7K2L');
		<\/script><meta charset="UTF-8"><meta property="og:title" content="Wilson Mu\xF1oz Castro | +4 a\xF1os de experiencia en dise\xF1o y desarrollo web \u{1F5A5}\uFE0F"><meta name="pinterest" content="nopin"><meta property="og:type" content="website"><meta property="og:url" content="https://wilsonmunoz.com"><meta property="og:description"`, '><meta property="og:image"', '><meta name="description"', '><meta property="article:author" content="Wilson Mu\xF1oz Castro"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="wilsonmunoz.com"><meta property="twitter:url" content="https://wilsonmunoz.com"><meta name="twitter:title" content="Wilson Mu\xF1oz Castro | +4 a\xF1os de experiencia en dise\xF1o y desarrollo web \u{1F5A5}\uFE0F"><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="generator"', '><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"><meta name="msapplication-TileColor" content="#da532c"><meta name="color-scheme" content="dark"><meta name="color-scheme" content="light"><meta name="color-scheme" content="normal"><meta name="theme-color" content="#ffffff"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="canonical"', "><title>", "</title>", "", "</head> <body", "> ", ' <main class="mt-space-3xl"> ', " </main> ", " </body></html>"])), addAttribute(description, "content"), addAttribute(socialImageURL, "content"), addAttribute(description, "content"), addAttribute(description, "content"), addAttribute(socialImageURL, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), `Wilson Mu\xF1oz Castro | ${title}`, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), addAttribute(className, "class"), renderComponent($$result, "Head", $$Head, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/layouts/Layout.astro", void 0);

const $$Astro$5 = createAstro("https://wilsonmunoz.com/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, personal } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero"> <div class="hero__svg"> <svg xmlns="http://www.w3.org/2000/svg" width="864" height="278" viewBox="0 0 864 278"> <path fill-rule="evenodd" d="M4 0a4 4 0 0 0-4 4v274h864V4a4 4 0 0 0-4-4H4Zm859 277V36H1v241h862ZM29 26a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm34-8a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm18 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" clip-rule="evenodd"></path> </svg> </div> <div class="hero__title"> ${personal ? renderTemplate`<div class="mt-space-l"> <h1>${title} ${renderComponent($$result, "check-mark", "check-mark", {})}</h1> <p class="mt-space-s">${personal}</p> </div>` : renderTemplate`<h1 class="size-full relative uppercase mt-space-l">${title}</h1>`} </div> </section> `;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/layouts/Hero.astro", void 0);

new Proxy({"src":"/_astro/code-illustration.BM6McTCe.svg","width":550,"height":188,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/code-illustration.svg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/code-illustration-dark.Cnx9e97Q.svg","width":550,"height":188,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/code-illustration-dark.svg";
							}
							
							return target[name];
						}
					});

const imgCareerrist = new Proxy({"src":"/_astro/careerist.CiSyFMEh.jpg","width":960,"height":540,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/careerist.jpg";
							}
							
							return target[name];
						}
					});

const imgDentis = new Proxy({"src":"/_astro/dentis.COdSzBVx.jpg","width":960,"height":540,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/dentis.jpg";
							}
							
							return target[name];
						}
					});

const imgGalllery = new Proxy({"src":"/_astro/gallery.B8PWHmuW.jpg","width":960,"height":540,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/gallery.jpg";
							}
							
							return target[name];
						}
					});

const imgJustice = new Proxy({"src":"/_astro/justice.BALAEG5Y.jpg","width":960,"height":540,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/justice.jpg";
							}
							
							return target[name];
						}
					});

const imgPeli = new Proxy({"src":"/_astro/peli.CfhWKRGa.jpg","width":960,"height":540,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/peli.jpg";
							}
							
							return target[name];
						}
					});

const imgPeople = new Proxy({"src":"/_astro/people.DE4IFxsp.jpg","width":960,"height":540,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/people.jpg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/easybank.j3JeMuon.jpg","width":960,"height":540,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/easybank.jpg";
							}
							
							return target[name];
						}
					});

const imgBoldo = new Proxy({"src":"/_astro/boldo.Cs0zX-Kx.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/boldo.png";
							}
							
							return target[name];
						}
					});

const imgIaLanding = new Proxy({"src":"/_astro/ia-landing.BbKrDOvE.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/ia-landing.png";
							}
							
							return target[name];
						}
					});

const imgTravel = new Proxy({"src":"/_astro/travel-landing.DsvNZWfI.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/travel-landing.png";
							}
							
							return target[name];
						}
					});

const imgPixelPunk = new Proxy({"src":"/_astro/pixel-punk.DQCxRjTn.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/assets/images/pixel-punk.png";
							}
							
							return target[name];
						}
					});

const navLink = [
  {
    href: "/",
    label: "Home",
    icon:'carbon:home'
  },
  {
    href: "/about",
    label: "About",
    icon: 'ic:outline-info'
  },
  { href: "/projects", 
    label: "Projects",
    icon: 'ic:sharp-web-asset'},
  {
    href: "/blog",
    label: "Blog",
    icon: 'ic:outline-article'
  },
  {
    href: "/blogroll",
    label: "Blogroll",
    icon: 'ion:link-outline'
  },
];

const projects = [
  {
    img: imgJustice,
    title: 'Justice | Landing Page',
    description:
      "De los primeros proyectos es una landing para abogados diseñada desde cero, herramientas utilizadas en este proyecto Adobe XD, Photoshop, Illustrator, para el código HTML CSS JavaScript también utilice librerias JavaScript para los slider y otra para efectos de scroll",
    href: "https://sonvice.github.io/justice/",
    alt:'Screenshot de una landing page moderna para abogados',
    label: "justice",
    gitHub:'https://github.com/sonvice/justice'
  },
  {
    img: imgDentis,
    title: 'Dentis | Landing Page',
    description:
      "Landing diseñada desde cero utilizando herramientas como Adobe XD, Photoshop,Illustrator. Para el desarrollo utilice HTML CSS3 y Vanilla JavaScript y la grid de Bootstrap",
    href: "https://dentis1.netlify.app/",
    alt:'Screenshot de una landing page moderna de una clínica dental',
    label: "dentis",
    gitHub:'https://github.com/sonvice/dentis'
  },
  {
    img: imgPeople,
    title: 'People | Landing Page',
    description:
      "También es un proyecto de una landing page diseñada desde cero, con Photoshop para el retoque de imágenes, e Illustrator para los vectores como logo e iconos. Librerias Js para el slider y css moderno utilizando variables css",
    href: "https://clinica1.netlify.app/",
    alt:'Screenshot de una landing page moderna con temática de un clínica',
    label: "people",
    gitHub:'https://github.com/sonvice/clinic'
  },


  {
    img: imgCareerrist,
    title: 'Careerist | Landing Page',
    description:
      "Este proyecto es un clon de la página web 'careerist.com' desarrollado en React. Careerist es una plataforma líder en la búsqueda de empleo y desarrollo profesional, y este clon se ha creado con el propósito de aprender y demostrar mis habilidades en desarrollo web utilizando React y Tailwind CSS.",
    href: "https://clon-careerist.netlify.app/",
    alt:'Screenshot de una landing page careerist.com, construida utilizando React',
    label: "careerist",
    gitHub:'https://github.com/sonvice/clon-careerist.com'
  },
  {
    img: imgBoldo,
    title: 'Boldo | Figma to Code',
    description:
    "Este proyecto es un sitio web que ha sido desarrollado utilizando Astro Framework, React, Sass y JavaScript. El objetivo principal de este proyecto es traducir un diseño de Figma en un sitio web accesible y optimizado.",
    href: "https://boldo-figma.netlify.app/",
    alt:'Screenshot de una landing page, desarrollada utilizando Astro Framework, React, Sass y JavaScript.',
    label: "boldo",
    gitHub:'https://github.com/sonvice/figma-to-code'
  },
  {
    img: imgIaLanding,
    title: 'Ia | Landing Page',
    description:
      "Este proyecto es una página web inspirada en jsm-brainwave.com, construida con tecnologías alternativas. A diferencia del tutorial de YouTube que utiliza React y Tailwind CSS, esta versión utiliza Astro, Sass y CSS para el desarrollo del frontend. Además, se ha integrado la librería JavaScript Locomotive Scroll para agregar efectos de animación al desplazarse por la página.",
    href: "https://ia-landing.netlify.app/",
    alt:'Screenshot de una landing page, construida utilizando Astro, css, Sass',
    label: "ia landing",
    gitHub:'https://github.com/sonvice/ia-landing'
  },
  {
    img: imgTravel,
    title: 'Travel | Landing Page',
    description:
      "Este proyecto es una landing page temática de viajes, diseñada desde cero en Figma y luego desarrollada con Astro framework. La página web es completamente responsive y utiliza Sass para modularizar el CSS, lo que facilita el mantenimiento y la escalabilidad del código.",
    href: "https://landingtravel.netlify.app/",
    alt:'Screenshot de una landing page, construida utilizando Astro, css, Sass,js',
    label: "travel landing",
    gitHub:'https://github.com/sonvice/travel'
  },
  {
    img: imgPixelPunk,
    title: 'Pixel Punk | Landing Page',
    description:
      "Este proyecto es una landing page futurista inspirada en la estética Cyberpunk, diseñada en Figma y desarrollada utilizando el Astro Framework. La página es completamente responsive, aprovechando el poder de Sass para gestionar los estilos de manera eficiente. El diseño incorpora un enfoque moderno, utilizando CSS Grid, animaciones y degradados llamativos, y elementos visuales en SVG.",
    href: "https://pixelpunk-ia.netlify.app/",
    alt:'Screenshot de una landing page, construida utilizando Astro, css, Sass,js',
    label: "travel landing",
    gitHub:'https://github.com/sonvice/pixel-punk-landing'
  },
];

const projectsApp =[
  {
    img: imgGalllery,
    title: 'App | Download Images',
    description:
      "Galería de imágenes consumiendo una api, utilice JavaScript Vanilla y funciones como localStorage para poder guardar las imagenes favoritas que se elijan, css moderno, como grid y variables",
    href: "https://save-gallery.netlify.app/",
    alt:'Screenshot de una galería de imágenes consumiendo una API, construida utilizando JavaScript',
    label: "gallery",
    gitHub:'https://github.com/sonvice/save-galeria/tree/main'
  },
  {
    img: imgPeli,
    title: 'App | Current Movies',
    description:
      "Es una pequeña app para ver los thiller de las últimas películas, en este proyecto se consume una api TMDB con JavaScript, listando tanto las últimas películas como series de Tv.",
    href: "https://thrillers-populares.netlify.app/",
    alt:'Screenshot de un pequeña App para ver los thiller de las últimas películas y series',
    label: "peli",
    gitHub:'https://github.com/sonvice/thrillers-populares'
  },
];

const blogroll = [
  {author:'Ahmad Shadeed',link:'https://ishadeed.com/'},
  {author:'Andy Bell',link:'https://andy-bell.co.uk/'},
  {author:'Bramus Van Damme',link:'https://www.bram.us/'},
  {author:'Cassie Evans',link:'https://www.cassie.codes/'},
  {author:'Chen Hui-Jing',link:'https://chenhuijing.com/'},
  {author:'Chris Coyier',link:'https://chriscoyier.net/'},
  {author:'Hidde de Vries',link:'https://hidde.blog/'},
  {author:'Josh W Comeau',link:'https://joshwcomeau.com/'},
  {author:'Lea Verou',link:'https://lea.verou.me/'},
  {author:'Manuel Matuzović',link:'https://www.matuzo.at/'},
  {author:'Michelle Barker',link:'https://css-irl.info/'},
  {author:'piccalil.li',link:'https://piccalil.li/'},
  {author:'Stefan Judis',link:'https://www.stefanjudis.com/'},
  {author:'Stephanie Eckles',link:'https://thinkdobecreate.com/'},
  {author:'Una Kravets',link:'https://una.im/'},
  {author:'Aleksandr',link:'https://www.aleksandrhovhannisyan.com/'},
  {author:'Dan Mall',link:'https://danmall.com/'},
  {author:'Jim Nielsen',link:'https://blog.jim-nielsen.com/'},
];

const $$Astro$4 = createAstro("https://wilsonmunoz.com/");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Nav;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav class="nav | mt-space-xl"> <ul role="list" class="nav__list | d-flex"> ${navLink.map((link) => {
    const isActive = link.href === "/blog" ? currentPath.startsWith("/blog") && !currentPath.startsWith("/blogroll") : currentPath === link.href;
    return renderTemplate`<li> <a${addAttribute(`nav__link | border-animated d-flex px-space-3xs py-space-xs ${isActive ? "active" : ""}`, "class")}${addAttribute(`${link.href}`, "href")}${addAttribute(isActive ? "page" : void 0, "aria-current")}> ${renderComponent($$result, "Icon", $$Icon, { "name": link.icon })} ${link.label} </a> </li>`;
  })} </ul> </nav> `;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/components/Nav.astro", void 0);

const $$Astro$3 = createAstro("https://wilsonmunoz.com/");
const $$Tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="tag | size--1"> <a class="p-space-3xs radius bg-color-slate-600 text-color-slate-50"${addAttribute(`/tags/${tag}`, "href")}>${tag}</a> </li>`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/components/Tag.astro", void 0);

const $$Astro$2 = createAstro("https://wilsonmunoz.com/");
const $$CardPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardPost;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <small class="d-block size--1 my-space-xs"> <time${addAttribute(post.data.date.toISOString(), "datetime")}> ${post.data.date.toLocaleDateString(void 0, options)} </time> </small> <h3 class="size-2"> <a${addAttribute(`/${post.slug}`, "href")}>${post.data.title}</a> </h3> <ul role="list" class="tag-block | d-flex mt-space-s"> ${post.data.tags.map((tag) => {
    return renderTemplate`${renderComponent($$result, "Tag", $$Tag, { "tag": tag })}`;
  })} </ul> <p class="mt-space-s"> ${post.data.description} </p> </li>`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/components/CardPost.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://wilsonmunoz.com/", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/2023-11-06-guia-completa-para-maquetar-un-diseno.mdx": () => import('../2023-11-06-guia-completa-para-maquetar-un-diseno_CdusuvAh.mjs'),"/src/content/posts/2023-11-14-como-crear-3-atractivas-secciones-hero.mdx": () => import('../2023-11-14-como-crear-3-atractivas-secciones-hero_DOXe_svV.mjs'),"/src/content/posts/2023-12-02-combinadores-css-como-seleccionar-varias-etiquetas-en-html.mdx": () => import('../2023-12-02-combinadores-css-como-seleccionar-varias-etiquetas-en-html_BBrlVmG4.mjs'),"/src/content/posts/2023-12-14-guia-efectiva-de-diseno-web-como-centrar-en-css.mdx": () => import('../2023-12-14-guia-efectiva-de-diseno-web-como-centrar-en-css_VIbhlEyu.mjs'),"/src/content/posts/2024-01-03-design-thinking-para-web.mdx": () => import('../2024-01-03-design-thinking-para-web_errjvlpZ.mjs'),"/src/content/posts/2024-02-23-mis-apuntes-del-curso-de-ux.mdx": () => import('../2024-02-23-mis-apuntes-del-curso-de-ux_Dl1RoHDu.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"posts":{"type":"content","entries":{"guia-completa-para-maquetar-un-diseno-de-figma-en-html5-y-css3":"/src/content/posts/2023-11-06-guia-completa-para-maquetar-un-diseno.mdx","como-crear-3-atractivas-secciones-hero-con-css-grid-y-seudoelementos":"/src/content/posts/2023-11-14-como-crear-3-atractivas-secciones-hero.mdx","combinadores-css-como-seleccionar-varias-etiquetas-en-html":"/src/content/posts/2023-12-02-combinadores-css-como-seleccionar-varias-etiquetas-en-html.mdx","guia-efectiva-de-diseno-web-como-centrar-div-imagen-y-texto-en-css":"/src/content/posts/2023-12-14-guia-efectiva-de-diseno-web-como-centrar-en-css.mdx","design-thinking-pasos-para-aplicarlo-al-diseno-web-responsive":"/src/content/posts/2024-01-03-design-thinking-para-web.mdx","mis-apuntes-del-curso-de-ux-de-google-como-disenar-una-pagina-web-o-un-producto-digital-desde-cero":"/src/content/posts/2024-02-23-mis-apuntes-del-curso-de-ux.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/2023-11-06-guia-completa-para-maquetar-un-diseno.mdx": () => import('../2023-11-06-guia-completa-para-maquetar-un-diseno_50VUZXmy.mjs'),"/src/content/posts/2023-11-14-como-crear-3-atractivas-secciones-hero.mdx": () => import('../2023-11-14-como-crear-3-atractivas-secciones-hero_BMi4Xlyi.mjs'),"/src/content/posts/2023-12-02-combinadores-css-como-seleccionar-varias-etiquetas-en-html.mdx": () => import('../2023-12-02-combinadores-css-como-seleccionar-varias-etiquetas-en-html_DybU057E.mjs'),"/src/content/posts/2023-12-14-guia-efectiva-de-diseno-web-como-centrar-en-css.mdx": () => import('../2023-12-14-guia-efectiva-de-diseno-web-como-centrar-en-css_CbTQmY74.mjs'),"/src/content/posts/2024-01-03-design-thinking-para-web.mdx": () => import('../2024-01-03-design-thinking-para-web_B5tgim-T.mjs'),"/src/content/posts/2024-02-23-mis-apuntes-del-curso-de-ux.mdx": () => import('../2024-02-23-mis-apuntes-del-curso-de-ux_Bh6Fv3ic.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$1 = createAstro("https://wilsonmunoz.com/");
const $$SearchForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SearchForm;
  return renderTemplate`${maybeRenderHead()}<form id="search-form" class="search-form d-flex mb-space-xl" action="/blog/search"> <label for="search-input" class="visually-hidden">Search</label> <input type="text" id="query" class="px-space-2xs py-space-3xs" name="query" placeholder="Buscar artículo" required> <button type="submit" class="d-flex bg-color-slate-600 radius px-space-xs"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:search" })}<span class="visually-hidden"> Search</span></button> </form>`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/components/SearchForm.astro", void 0);

const $$Astro = createAstro("https://wilsonmunoz.com/");
const prerender = false;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allPosts = await getCollection("posts");
  const personal = "\u{1F5A5}\uFE0F Con +4 a\xF1os en dise\xF1o y desarrollo web. Dominio de HTML5, CSS3, JavaScript, Adobe (Photoshop, Illustrator) y tecnolog\xEDas modernas como Astro, React y Tailwind.";
  const { canonicalURL } = Astro2.props;
  let searchResults = [];
  if (query) {
    searchResults = allPosts.filter((article) => {
      const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
      const bodyMatch = article.body.toLowerCase().includes(query.toLowerCase());
      const slugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
      return titleMatch || bodyMatch || slugMatch;
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Search Results", "class:list": "search", "canonical": canonicalURL, "description": personal }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hola!\u{1F44B}, Soy Wilson", "personal": personal })} ${renderComponent($$result2, "Nav", $$Nav, {})} <h2 class="mt-space-3xl"># Resultados de <strong>${query}</strong></h2> <a href="/blog" class="mt-space-l mb-space-m d-block">Todos los artículos</a> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <ul role="list" class="blog-post | flow"> ${searchResults.slice().map((post) => {
    return renderTemplate`${renderComponent($$result2, "CardPost", $$CardPost, { "post": post })}`;
  })} </ul> </div> ` })}`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/blog/search.astro", void 0);

const $$file = "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/blog/search.astro";
const $$url = "/blog/search";

const search = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Search,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, $$Nav as a, $$Layout as b, $$Icon as c, $$SearchForm as d, $$CardPost as e, blogroll as f, getCollection as g, projectsApp as h, $$Tag as i, projects as p, search as s };
