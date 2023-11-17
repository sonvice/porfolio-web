import {
  imgCareerrist,
  imgDentis,
  imgEasybank,
  imgGalllery,
  imgJustice,
  imgPeli,
  imgPeople,
} from "../assets";

export const navLink = [
  {
    href: "/",
    label: "Home",
    path: " M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z ",
  },
  {
    href: "/about",
    label: "About",
    path: "M11 9H13V7H11M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM11 17H13V11H11V17Z  ",
  },
  { href: "/projects", label: "Porjects", path: "M2 20V4H22V20H2ZM4 18H20V8H4V18Z" },
  {
    href: "/blog",
    label: "Blog",
    path: "M3 21V3H21V21H3ZM18 17H6V18.5H18V17ZM6 15.5H18V14H6V15.5ZM6 12H18V6H6V12Z",
  },
];

export const figures = [
  {
    img: imgJustice,
    title: 'Landing Page',
    description:
      "De los primeros proyectos es una landing para abogados diseñada desde cero, herramientas utilizadas en este proyecto Adobe XD, Photoshop, Illustrator, para el código HTML CSS JavaScript también utilice librerias JavaScript para los slider y otra para efectos de scroll",
    href: "https://sonvice.github.io/justice/",
    label: "justice",
    gitHub:'https://github.com/sonvice/justice'
  },
  {
    img: imgDentis,
    title: 'Landing Page',
    description:
      "Landing diseñada desde cero utilizando herramientas como Adobe XD, Photoshop,Illustrator. Para el desarrollo utilice HTML CSS3 y Vanilla JavaScript y la grid de Bootstrap",
    href: "https://dentis1.netlify.app/",
    label: "dentis",
    gitHub:'https://github.com/sonvice/dentis'
  },
  {
    img: imgPeople,
    title: 'Landing Page',
    description:
      "También es un proyecto de una landing page diseñada desde cero, con Photoshop para el retoque de imágenes, e Illustrator para los vectores como logo e iconos. Librerias Js para el slider y css moderno utilizando variables css",
    href: "https://clinica1.netlify.app/",
    label: "people",
    gitHub:'https://github.com/sonvice/clinic'
  },
  {
    img: imgGalllery,
    title: 'App - Download Images',
    description:
      "Galería de imágenes consumiendo una api, utilice JavaScript Vanilla y funciones como localStorage para poder guardar las imagenes favoritas que se elijan, css moderno, como grid y variables",
    href: "https://save-gallery.netlify.app/",
    label: "gallery",
    gitHub:'https://github.com/sonvice/save-galeria/tree/main'
  },
  {
    img: imgPeli,
    title: 'App - Current Movies',
    description:
      "Es una pequeña app para ver los thiller de las últimas películas, en este proyecto se consume una api TMDB con JavaScript, listando tanto las últimas películas como series de Tv.",
    href: "https://thrillers-populares.netlify.app/",
    label: "peli",
    gitHub:'https://github.com/sonvice/thrillers-populares'
  },
  {
    img: imgCareerrist,
    title: 'Landing Page',
    description:
      "Este proyecto es un clon de la página web 'careerist.com' desarrollado en React. Careerist es una plataforma líder en la búsqueda de empleo y desarrollo profesional, y este clon se ha creado con el propósito de aprender y demostrar mis habilidades en desarrollo web utilizando React y Tailwind CSS.",
    href: "https://clon-careerist.netlify.app/",
    label: "careerist",
    gitHub:'https://github.com/sonvice/clon-careerist.com'
  },
  {
    img: imgEasybank,
    title: 'Landing Page',
    description:
      "Este proyecto es una landing page diseñada como práctica para el desafío de Frontend Mentor. La landing page está construida utilizando React, Sass, y se han implementado las siguientes tecnologías y metodologías: Menú accesible para una mejor experiencia de usuario. Plugins de PostCSS para optimizar el código CSS .Metodología de arquitectura CSS basada en el patrón 7-1 y clases de utilidad.",
    href: "https://easybank-fmentor.netlify.app/",
    label: "easybank",
    gitHub:'https://github.com/sonvice/easybank'
  },
];
