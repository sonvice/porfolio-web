import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_Cg3e6tzO.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://wilsonmunoz.com/");
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="tag | size--1"> <a class="p-space-3xs radius bg-color-slate-600 text-color-slate-50"${addAttribute(`/tags/${tag}`, "href")}>${tag}</a> </li>`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/components/Tag.astro", void 0);

export { $$Tag as $ };
