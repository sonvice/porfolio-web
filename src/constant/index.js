import {
  imgCareerrist,
  imgDentis,
  imgEasybank,
  imgGalllery,
  imgJustice,
  imgPeli,
  imgPeople,
  imgBoldo,
  imgIaLanding,imgTravel,
  imgPixelPunk
} from "../assets/images";

export const navLink = [
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

export const projects = [
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

export const projectsApp =[
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
]

export const blogroll = [
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
]