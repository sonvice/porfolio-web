import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, e as renderSlot, b as renderComponent, F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_Cg3e6tzO.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image, a as $$Picture } from './_astro_assets_C8HTnmJ3.mjs';
import 'clsx';
import 'kleur/colors';

const esquema = new Proxy({"src":"/_astro/esquema-design-thinking.DLzxuI9F.png","width":1366,"height":520,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/images/design-thinking-aplicado-a-web/esquema-design-thinking.png";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro("https://wilsonmunoz.com/");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  delete Astro2.props.size;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(2, "stroke-width")}${addAttribute(size ?? 24, "width")}${addAttribute(size ?? 24, "height")} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24"${spreadAttributes(Astro2.props)}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$4 = createAstro("https://wilsonmunoz.com/");
const $$FlaskConical = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FlaskConical;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path> <path d="M8.5 2h7"></path> <path d="M7 16h10"></path> ` })}`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/node_modules/lucide-astro/dist/FlaskConical.astro", void 0);

const $$Astro$3 = createAstro("https://wilsonmunoz.com/");
const $$Hammer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hammer;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path> <path d="M17.64 15 22 10.64"></path> <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"></path> ` })}`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/node_modules/lucide-astro/dist/Hammer.astro", void 0);

const $$Astro$2 = createAstro("https://wilsonmunoz.com/");
const $$Lightbulb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Lightbulb;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path> <path d="M9 18h6"></path> <path d="M10 22h4"></path> ` })}`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/node_modules/lucide-astro/dist/Lightbulb.astro", void 0);

const $$Astro$1 = createAstro("https://wilsonmunoz.com/");
const $$PersonStanding = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PersonStanding;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="5" r="1"></circle> <path d="m9 20 3-6 3 6"></path> <path d="m6 8 6 2 6-2"></path> <path d="M12 10v4"></path> ` })}`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/node_modules/lucide-astro/dist/PersonStanding.astro", void 0);

const $$Astro = createAstro("https://wilsonmunoz.com/");
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="11" cy="11" r="8"></circle> <path d="m21 21-4.3-4.3"></path> ` })}`;
}, "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/node_modules/lucide-astro/dist/Search.astro", void 0);

const frontmatter = {
  "tags": ["UX", "design"],
  "date": "2024-01-03T00:00:00.000Z",
  "featured": false,
  "image": "./images/design-thinking-aplicado-a-web/esquema-design-thinking.png",
  "title": "Design Thinking: Pasos Para Aplicarlo al Diseño Web Responsive\n",
  "slug": "design-thinking-pasos-para-aplicarlo-al-diseno-web-responsive",
  "description": "Estos son los pasos comunes del proceso de diseño centrado en el usuario, aplicados específicamente al diseño web responsive.\n"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "qué-es-el-design-thinking",
    "text": "¿Qué es el Design Thinking?"
  }, {
    "depth": 3,
    "slug": "1-empatizar",
    "text": "1. Empatizar:"
  }, {
    "depth": 3,
    "slug": "2-definir",
    "text": "2. Definir:"
  }, {
    "depth": 3,
    "slug": "3-idear",
    "text": "3. Idear:"
  }, {
    "depth": 3,
    "slug": "4-prototipar",
    "text": "4. Prototipar:"
  }, {
    "depth": 3,
    "slug": "5-probar",
    "text": "5. Probar:"
  }, {
    "depth": 3,
    "slug": "6-implementar-desarrollar",
    "text": "6. Implementar (Desarrollar):"
  }, {
    "depth": 3,
    "slug": "7-evaluar-y-mejorar",
    "text": "7. Evaluar y Mejorar:"
  }, {
    "depth": 2,
    "slug": "por-qué-incluir-los-pasos-de-implementar-y-evaluar-y-mejorar",
    "text": "¿Por qué incluir los pasos de “Implementar” y “Evaluar y Mejorar”?"
  }, {
    "depth": 2,
    "slug": "notas-finales",
    "text": "Notas Finales"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Picture, {
      quality: 100,
      src: esquema,
      widths: [720, esquema.width],
      sizes: `(min-width: 39.9em) 720px`,
      alt: "Esquema del Design Thinking"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Como individuos, nos enfrentamos diariamente a diversos desafíos. La pregunta fundamental es: ¿Cómo podemos identificar soluciones efectivas para los problemas comunes, asegurándonos siempre de considerar las necesidades y experiencias de las personas involucradas? R: Design Thinking"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "qué-es-el-design-thinking",
      children: "¿Qué es el Design Thinking?"
    }), "\n", createVNode(_components.p, {
      children: "Design Thinking es una metodología de resolución de problemas que se centra en desarrollar soluciones creativas e innovadoras centradas en las necesidades y experiencias de las personas. Va más allá del enfoque convencional del diseño, incorporando la empatía, la experimentación y la colaboración interdisciplinaria para abordar desafíos complejos."
    }), "\n", createVNode(_components.p, {
      children: "El concepto de Design Thinking se originó en la Escuela de Diseño de Stanford en la década de 1960. Inicialmente, estaba dirigido a diseñadores industriales, pero con el tiempo, se expandió para aplicarse a una variedad de disciplinas. La metodología se consolidó gracias a académicos como Rolf Faste y David Kelley."
    }), "\n", createVNode(_components.p, {
      children: "En la década de 1990, David Kelley cofundó IDEO, una firma de diseño que desempeñó un papel fundamental en la popularización del Design Thinking. IDEO aplicó esta metodología con éxito en proyectos diversos, desde productos hasta servicios."
    }), "\n", createVNode(_components.p, {
      children: "Estos son los pasos comunes del proceso de diseño centrado en el usuario, aplicados específicamente al diseño web responsive."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: [createVNode($$PersonStanding, {
          color: "#08B8A7"
        }), "Empatizar:"]
      }), " Comprender las necesidades y perspectivas de los usuarios."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: [createVNode($$Search, {
          color: "#55B107"
        }), "Definir:"]
      }), " Definir claramente el problema basándose en la empatía y la comprensión del usuario."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: [createVNode($$Lightbulb, {
          color: "#E5AB06"
        }), "Idear:"]
      }), " Generar ideas creativas y soluciones posibles."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: [createVNode($$Hammer, {
          color: "#D30722"
        }), "Prototipar:"]
      }), " Crear representaciones visuales y tangibles de las soluciones propuestas."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: [createVNode($$FlaskConical, {
          color: "#5A23BA"
        }), "Probar:"]
      }), " Obtener retroalimentación mediante la prueba de los prototipos con usuarios reales."]
    }), "\n", createVNode(_components.h3, {
      id: "1-empatizar",
      children: "1. Empatizar:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Definición:"
      }), " Antes de comenzar a diseñar, es crucial comprender las necesidades y expectativas de los usuarios. Realiza investigaciones, entrevistas y encuestas para obtener información sobre los comportamientos, preferencias y desafíos de tus usuarios.", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Acciones:"
      }), "\r\nRealiza entrevistas con usuarios representativos.\r\nAnaliza métricas y datos existentes del sitio web.\r\nCrea personas o perfiles de usuarios."]
    }), "\n", createVNode(_components.h3, {
      id: "2-definir",
      children: "2. Definir:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Definición:"
      }), " Con base en la información recopilada, define claramente los objetivos del diseño y los problemas específicos que estás tratando de resolver. Establece criterios de éxito para medir el rendimiento.", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Acciones:"
      }), "\r\nSintetiza la información de la etapa de empatía.\r\nDefine los objetivos del diseño web adaptable.\r\nIdentifica los principales desafíos y oportunidades."]
    }), "\n", createVNode(_components.h3, {
      id: "3-idear",
      children: "3. Idear:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Definición:"
      }), " Genera ideas y soluciones creativas para abordar los problemas definidos en la etapa anterior.", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Acciones:"
      }), "\r\nRealiza sesiones de lluvia de ideas con tu equipo.\r\nUtiliza técnicas como mapas de empatía, diagramas de afinidad y prototipos rápidos.\r\nExplora diversas opciones de diseño adaptativo."]
    }), "\n", createVNode(_components.h3, {
      id: "4-prototipar",
      children: "4. Prototipar:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Definición:"
      }), " Crea representaciones visuales y navegables de tu diseño propuesto. En el contexto del diseño web adaptable, esto podría incluir wireframes y prototipos interactivos.", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Acciones:"
      }), "\r\nUtiliza herramientas de diseño como Figma o ", createVNode(_components.a, {
        href: "https://penpot.app/",
        children: "Penpop"
      }), " para crear wireframes.\r\nDesarrolla prototipos interactivos para simular la experiencia del usuario en diferentes dispositivos."]
    }), "\n", createVNode(_components.h3, {
      id: "5-probar",
      children: "5. Probar:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Definición:"
      }), " Obtén retroalimentación valiosa al exponer tu prototipo a usuarios reales o a miembros del equipo. Evalúa cómo se comporta el diseño en diferentes dispositivos y resoluciones.", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Acciones:"
      }), "\r\nRealiza pruebas de usabilidad con usuarios representativos.\r\nRecopila comentarios sobre la experiencia en diferentes dispositivos.\r\nAjusta el diseño según los resultados de las pruebas."]
    }), "\n", createVNode(_components.h3, {
      id: "6-implementar-desarrollar",
      children: "6. Implementar (Desarrollar):"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Definición:"
      }), " Desarrolla la versión final del diseño web adaptable basándote en los aprendizajes de las etapas anteriores.", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Acciones:"
      }), "\r\nColabora con desarrolladores para ", createVNode(_components.a, {
        href: "https://wilsonmunoz.com/guia-completa-para-maquetar-un-diseno-de-figma-en-html5-y-css3/",
        children: "implementar el diseño"
      }), ".\r\nAsegúrate de que el código esté optimizado para la adaptabilidad a diferentes dispositivos.\r\nRealiza pruebas continuas durante el desarrollo."]
    }), "\n", createVNode(_components.h3, {
      id: "7-evaluar-y-mejorar",
      children: "7. Evaluar y Mejorar:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Definición:"
      }), " Después del lanzamiento, sigue evaluando el rendimiento del diseño y recopilando comentarios. Realiza iteraciones para mejorar continuamente la experiencia del usuario.", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Acciones:"
      }), "\r\nMonitorea métricas clave, como tasas de conversión y tiempo de carga.\r\nRecopila comentarios de los usuarios post-lanzamiento.\r\nImplementa ajustes y mejoras según sea necesario.\r\nEste proceso iterativo y centrado en el usuario ayuda a garantizar que el diseño web sea no solo atractivo visualmente, sino también funcional y adaptado a las necesidades de los usuarios en diferentes dispositivos y contextos."]
    }), "\n", createVNode(_components.h2, {
      id: "por-qué-incluir-los-pasos-de-implementar-y-evaluar-y-mejorar",
      children: "¿Por qué incluir los pasos de “Implementar” y “Evaluar y Mejorar”?"
    }), "\n", createVNode(_components.p, {
      children: ["Incluir los pasos de “Implementar” y “Evaluar y Mejorar” es una extensión práctica del proceso, ya que considera la fase de ", createVNode(_components.strong, {
        children: "implementación"
      }), " del diseño y la iteración continua para mejorar basándose en los resultados reales y en la retroalimentación del usuario."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Implementar:"
      }), " Integración con el Desarrollo: La implementación se refiere a la fase en la que el ", createVNode(_components.a, {
        href: "https://wilsonmunoz.com/guia-completa-para-maquetar-un-diseno-de-figma-en-html5-y-css3/",
        children: "diseño se traduce en código"
      }), " y se integra en el entorno tecnológico real. Incluir este paso garantiza que los diseñadores trabajen en colaboración estrecha con los desarrolladores para asegurar que la visión del diseño se refleje fielmente en la versión final del producto o sitio web.\r\nOptimización Técnica: Durante la implementación, se pueden abordar aspectos técnicos específicos relacionados con el diseño web adaptable, como la optimización del rendimiento, la carga rápida en diferentes dispositivos y la compatibilidad con varios navegadores."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Evaluar y Mejorar:"
      }), " Retroalimentación Post-Implementación: La evaluación y mejora continúan incluso después de la implementación para garantizar que el diseño cumpla con las expectativas y resuelva los problemas identificados en las etapas anteriores. La retroalimentación post-implementación puede provenir de usuarios reales y observaciones en condiciones del mundo real.\r\nIteración Continua: La iteración es clave para el diseño centrado en el usuario. Después de la implementación, puedes identificar áreas de mejora basadas en la retroalimentación del usuario y en el monitoreo continuo del rendimiento. Las iteraciones permiten ajustar y optimizar el diseño con el tiempo.\r\nAmbos pasos son esenciales para cerrar el ciclo de diseño y garantizar que el producto o sitio web evolucione y se adapte a las necesidades cambiantes de los usuarios y a las condiciones tecnológicas. Además, la inclusión de estos pasos refleja la naturaleza iterativa y colaborativa del diseño centrado en el usuario, donde el aprendizaje continuo y la mejora son parte integral del proceso."]
    }), "\n", createVNode(_components.h2, {
      id: "notas-finales",
      children: "Notas Finales"
    }), "\n", createVNode(_components.p, {
      children: "Recordar que el Design Thinking se caracteriza por su enfoque no lineal y su énfasis en la iteración. El ciclo de Design Thinking no tiene un orden fijo y puede requerir múltiples iteraciones para llegar a una solución óptima, las cinco fases, etapas o modos no siempre son secuenciales incluso pueden ocurrir en paralelo. Los pasos mencionados inicialmente se alinean con los principios fundamentales del Design Thinking, que busca comprender profundamente a los usuarios, idear soluciones creativas y probar iterativamente para mejorar continuamente."
    }), "\n", createVNode(_components.p, {
      children: "Una de las principales fortalezas del Design Thinking radica en su capacidad para ser aplicado con éxito en diversas industrias, no limitándose exclusivamente a la tecnología o el diseño. Es por eso que este enfoque de pensamiento y trabajo se implementa efectivamente en áreas como el gobierno, la atención médica, los servicios financieros y organizaciones sin fines de lucro. Cualquier sector tiene el potencial de beneficiarse de este tipo de enfoque innovador."
    }), "\n", createVNode(_components.p, {
      children: ["En general es un proceso iterativo, que se retroalimenta buscando un objetivo concreto: ", createVNode(_components.strong, {
        children: "perfeccionar una solución"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/posts/2024-01-03-design-thinking-para-web.mdx";
const file = "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2024-01-03-design-thinking-para-web.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/julie/OneDrive/Escritorio/portfolio/porfolio-web/src/content/posts/2024-01-03-design-thinking-para-web.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
