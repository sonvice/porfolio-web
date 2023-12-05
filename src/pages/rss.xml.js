import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();
import { getCollection } from "astro:content"



  export async function GET(context) {
      const posts = await getCollection('posts');
      return rss({
        title: 'Wilson Muñoz Castro | Blog',
        description: 'Trucos y tutoriales de diseño y desarrollo web, html, css, javaScript',
        site: context.site,
        items: posts.map((post) => ({
          title: post.data.title,
          pubDate: post.data.date,
          link: `/${post.slug}/`,
          // Nota: esto no procesará componentes ni expresiones JSX en archivos MDX.
          content: sanitizeHtml(parser.render(post.body)),
          ...post.data,
        })),
      });
    }



 