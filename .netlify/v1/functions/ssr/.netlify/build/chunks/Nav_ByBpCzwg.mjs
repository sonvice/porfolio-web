import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute } from './astro/server_Cg3e6tzO.mjs';
import 'kleur/colors';
import { a as $$Icon } from './Layout_DhsQYRrb.mjs';

const $$Astro$1 = createAstro("https://wilsonmunoz.com/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
    icon:'lucide:home'
  },
  {
    href: "/about",
    label: "About",
    icon: 'lucide:info'
  },
  { href: "/projects", 
    label: "Projects",
    icon: 'lucide:monitor'},
  {
    href: "/blog",
    label: "Blog",
    icon: 'lucide:clipboard-list'
  },
  {
    href: "/blogroll",
    label: "Blogroll",
    icon: 'lucide:link-2'
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

const $$Astro = createAstro("https://wilsonmunoz.com/");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nav;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav class="nav | mt-space-3xl"> <ul role="list" class="nav__list | d-flex"> ${navLink.map((link) => {
    const isActive = link.href === "/blog" ? currentPath.startsWith("/blog") && !currentPath.startsWith("/blogroll") : currentPath === link.href;
    return renderTemplate`<li> <a${addAttribute(`nav__link | border-animated d-flex px-space-3xs py-space-xs ${isActive ? "active" : ""}`, "class")}${addAttribute(`${link.href}`, "href")}${addAttribute(isActive ? "page" : void 0, "aria-current")}> ${renderComponent($$result, "Icon", $$Icon, { "name": link.icon })} ${link.label} </a> </li>`;
  })} </ul> </nav> `;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/components/Nav.astro", void 0);

export { $$Hero as $, $$Nav as a, blogroll as b, projectsApp as c, projects as p };
