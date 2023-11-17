import {
  imgCareerrist,
  imgDentis,
  imgEasybank,
  imgGalllery,
  imgJustice,
  imgPeli,
  imgPeople,
  imgBoldo
} from "../assets/images";

export const navLink = [
  {
    href: "",
    label: "Home",
    icon:'carbon:home'
  },
  {
    href: "/about",
    label: "About",
    icon: 'ic:outline-info'
  },
  { href: "/projects", 
    label: "Porjects",
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
    label: "justice",
    gitHub:'https://github.com/sonvice/justice'
  },
  {
    img: imgDentis,
    title: 'Dentis | Landing Page',
    description:
      "Landing diseñada desde cero utilizando herramientas como Adobe XD, Photoshop,Illustrator. Para el desarrollo utilice HTML CSS3 y Vanilla JavaScript y la grid de Bootstrap",
    href: "https://dentis1.netlify.app/",
    label: "dentis",
    gitHub:'https://github.com/sonvice/dentis'
  },
  {
    img: imgPeople,
    title: 'People | Landing Page',
    description:
      "También es un proyecto de una landing page diseñada desde cero, con Photoshop para el retoque de imágenes, e Illustrator para los vectores como logo e iconos. Librerias Js para el slider y css moderno utilizando variables css",
    href: "https://clinica1.netlify.app/",
    label: "people",
    gitHub:'https://github.com/sonvice/clinic'
  },
  {
    img: imgGalllery,
    title: 'App | Download Images',
    description:
      "Galería de imágenes consumiendo una api, utilice JavaScript Vanilla y funciones como localStorage para poder guardar las imagenes favoritas que se elijan, css moderno, como grid y variables",
    href: "https://save-gallery.netlify.app/",
    label: "gallery",
    gitHub:'https://github.com/sonvice/save-galeria/tree/main'
  },
  {
    img: imgPeli,
    title: 'App | Current Movies',
    description:
      "Es una pequeña app para ver los thiller de las últimas películas, en este proyecto se consume una api TMDB con JavaScript, listando tanto las últimas películas como series de Tv.",
    href: "https://thrillers-populares.netlify.app/",
    label: "peli",
    gitHub:'https://github.com/sonvice/thrillers-populares'
  },
  {
    img: imgCareerrist,
    title: 'Careerist | Landing Page',
    description:
      "Este proyecto es un clon de la página web 'careerist.com' desarrollado en React. Careerist es una plataforma líder en la búsqueda de empleo y desarrollo profesional, y este clon se ha creado con el propósito de aprender y demostrar mis habilidades en desarrollo web utilizando React y Tailwind CSS.",
    href: "https://clon-careerist.netlify.app/",
    label: "careerist",
    gitHub:'https://github.com/sonvice/clon-careerist.com'
  },
  {
    img: imgEasybank,
    title: 'Easybank | Landing Page',
    description:
      "Este proyecto es una landing page diseñada como práctica para el desafío de Frontend Mentor. La landing page está construida utilizando React, Sass, y se han implementado las siguientes tecnologías y metodologías: Menú accesible para una mejor experiencia de usuario. Plugins de PostCSS para optimizar el código CSS .Metodología de arquitectura CSS basada en el patrón 7-1 y clases de utilidad.",
    href: "https://easybank-fmentor.netlify.app/",
    label: "easybank",
    gitHub:'https://github.com/sonvice/easybank'
  },
  {
    img: imgBoldo,
    title: 'Boldo | Figma to Code',
    description:
      "Este proyecto es un sitio web que ha sido desarrollado utilizando Astro Framework, React, Sass y JavaScript. El objetivo principal de este proyecto es traducir un diseño de Figma en un sitio web accesible y optimizado.",
    href: "https://boldo-figma.netlify.app/",
    label: "boldo",
    gitHub:'https://github.com/sonvice/figma-to-code'
  },
];


export const blogroll = [
  {author:'Ahmad Shadeed',link:'https://ishadeed.com/'},
  {author:'Andy Bell',link:'https://andy-bell.co.uk/'},
  {author:'Bramus Van Damme',link:'https://www.bram.us/'},
  {author:'Cassie Evans',link:'https://www.cassie.codes/'},
  {author:'Chen Hui-Jing',link:'https://chenhuijing.com/'},
  {author:'Chris Coyier',link:'https://chriscoyier.net/'},
  {author:'Eric Bailey',link:'https://ericwbailey.design/'},
  {author:'Hidde de Vries',link:'https://hidde.blog/'},
  {author:'Josh W Comeau',link:'https://joshwcomeau.com/'},
  {author:'Lea Verou',link:'https://lea.verou.me/'},
  {author:'Manuel Matuzović',link:'https://www.matuzo.at/'},
  {author:'Michelle Barker',link:'https://css-irl.info/'},
  {author:'Sara Soueidan',link:'https://www.sarasoueidan.com/'},
  {author:'Stefan Judis',link:'https://www.stefanjudis.com/'},
  {author:'Stephanie Eckles',link:'https://thinkdobecreate.com/'},
  {author:'Una Kravets',link:'https://una.im/'},
  {author:'Aleksandr',link:'https://www.aleksandrhovhannisyan.com/'},
  {author:'Dan Mall',link:'https://danmall.com/'},
]