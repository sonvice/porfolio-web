import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from './astro/server_Cg3e6tzO.mjs';
import 'kleur/colors';
import { $ as $$Tag } from './Tag_CI4vE9Kv.mjs';

const $$Astro = createAstro("https://wilsonmunoz.com/");
const $$CardPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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

export { $$CardPost as $ };
