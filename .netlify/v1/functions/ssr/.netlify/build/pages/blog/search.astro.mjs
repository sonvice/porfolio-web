import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Cg3e6tzO.mjs';
import 'kleur/colors';
import { $ as $$CardPost } from '../../chunks/CardPost_Cu8rIA7Y.mjs';
import { $ as $$Hero, a as $$Nav } from '../../chunks/Nav_ByBpCzwg.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DhsQYRrb.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DMaMIpTb.mjs';
import { $ as $$SearchForm } from '../../chunks/SearchForm_BK_k0qQa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://wilsonmunoz.com/");
const prerender = false;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query") || "";
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Search Results", "class:list": "search", "canonical": canonicalURL, "description": personal }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hola!\u{1F44B}, Soy Wilson", "personal": personal })} ${renderComponent($$result2, "Nav", $$Nav, {})} <h2 class="mt-space-3xl fw-regular"># Resultados de <strong class="text-color-slate-50">${query}</strong></h2> <a href="/blog" class="mt-space-l mb-space-m d-block">Todos los artículos</a> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <ul role="list" class="blog-post | flow"> ${searchResults.slice().map((post) => {
    return renderTemplate`${renderComponent($$result2, "CardPost", $$CardPost, { "post": post })}`;
  })} </ul> </div> ` })}`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/blog/search.astro", void 0);

const $$file = "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/pages/blog/search.astro";
const $$url = "/blog/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
