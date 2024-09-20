import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from './astro/server_Cg3e6tzO.mjs';
import 'kleur/colors';
import { a as $$Icon } from './Layout_DhsQYRrb.mjs';

const $$SearchForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="search-form" class="search-form d-flex mb-space-xl" action="/blog/search"> <label for="search-input" class="visually-hidden">Search</label> <input type="text" id="query" class="px-space-2xs py-space-3xs" name="query" placeholder="Buscar artículo" required> <button type="submit" class="d-flex radius px-space-xs bg-color-slate-50"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:search", "class": "text-color-slate-950" })}<span class="visually-hidden"> Search</span></button> </form>`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/components/SearchForm.astro", void 0);

export { $$SearchForm as $ };
