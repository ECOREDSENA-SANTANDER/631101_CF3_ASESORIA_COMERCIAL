(function(e){function a(a){for(var i,o,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&u.push(t[o][0]),t[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],i=!0,o=1;o<n.length;o++){var c=n[o];0!==t[c]&&(i=!1)}i&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"d8d44084","chunk-0206bfa0":"f79aa899","chunk-039c07ee":"781c923f","chunk-13a6037e":"755d551f","chunk-16215048":"74e98965","chunk-18f95272":"718e38d3","chunk-2c06842c":"e5bfb3dd","chunk-2d0c5615":"35aabf1a","chunk-2d0e96ec":"f03af81d","chunk-2d208d90":"42a15148","chunk-2d21d0e2":"8bc84367","chunk-2d22c123":"fbe50b53","chunk-2e80bb9a":"91fefa25","chunk-2fdc87ee":"12c114de","chunk-30d2f332":"1b4a3fc0","chunk-36769079":"869949c2","chunk-398c63f0":"b662b9b4","chunk-44daca35":"55deaf02","chunk-4adb6690":"1deb2e27","chunk-5309f94e":"66872ec9","chunk-53ccb27e":"0d78aafd","chunk-55d286b8":"7aeadb6d","chunk-566917c4":"24d5592d","chunk-681f37d3":"b4f6ec2e","chunk-6928a14a":"55f127d0","chunk-69444b4c":"b9eaae69","chunk-6e45141e":"45a555c7","chunk-863a1ee8":"6fec5b09","chunk-923527cc":"ecdfa205","chunk-a48a3e88":"f2d07372","chunk-c796899c":"8f05f55a","chunk-e8a7823a":"57b1d05e","chunk-eaa1fac2":"c083dc03","chunk-f2a44bde":"15b201b2",comple:"3c24711c",creditos:"9ed03d7b",glosario:"96945ff4",intro:"7efddae1",referencias:"d701d05f",sintesis:"0ebaea01",tema1:"728ebaa5",tema2:"bdc76293",tema3:"fc0219ca"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={actividad:1,"chunk-039c07ee":1,"chunk-16215048":1,"chunk-30d2f332":1,"chunk-398c63f0":1,"chunk-44daca35":1,"chunk-4adb6690":1,"chunk-566917c4":1,"chunk-681f37d3":1,"chunk-6928a14a":1,"chunk-6e45141e":1,"chunk-863a1ee8":1,"chunk-923527cc":1,"chunk-a48a3e88":1,"chunk-f2a44bde":1,comple:1,creditos:1,glosario:1,referencias:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"32af5bbc","chunk-0206bfa0":"31d6cfe0","chunk-039c07ee":"c02cabcb","chunk-13a6037e":"31d6cfe0","chunk-16215048":"c02cabcb","chunk-18f95272":"31d6cfe0","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-2fdc87ee":"31d6cfe0","chunk-30d2f332":"c02cabcb","chunk-36769079":"31d6cfe0","chunk-398c63f0":"cc0f44fc","chunk-44daca35":"c02cabcb","chunk-4adb6690":"c02cabcb","chunk-5309f94e":"31d6cfe0","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-566917c4":"7c3db899","chunk-681f37d3":"c02cabcb","chunk-6928a14a":"836e2e3e","chunk-69444b4c":"31d6cfe0","chunk-6e45141e":"c0e85eea","chunk-863a1ee8":"a5714e76","chunk-923527cc":"343726a8","chunk-a48a3e88":"c02cabcb","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-eaa1fac2":"31d6cfe0","chunk-f2a44bde":"c02cabcb",comple:"6bb1e7cf",creditos:"20980590",glosario:"46c98405",intro:"31d6cfe0",referencias:"f09055de",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===i||l===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===i||l===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete o[e],m.parentNode.removeChild(m),n(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var i=t[e];if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(a,n){i=t[e]=[a,n]}));a.push(i[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);var i=n("68f3"),o=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],r={name:"App",data:()=>({menuOpen:!1}),computed:{menuState(){return this.$store.getters.isMenuOpen}},mounted(){this.$aos.init({offset:100})}},c=r,s=n("2877"),d=Object(s["a"])(c,o,t,!1,null,null,null),l=d.exports,u=n("2b0e"),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);const h=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:()=>n.e("intro").then(n.bind(null,"5167"))},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>n.e("tema1").then(n.bind(null,"02c8"))},{path:"tema2",name:"tema2",component:()=>n.e("tema2").then(n.bind(null,"fd11"))},{path:"tema3",name:"tema3",component:()=>n.e("tema3").then(n.bind(null,"eb46"))},{path:"tema4",name:"tema4",component:()=>n.e("tema3").then(n.bind(null,"3eb5"))},{path:"tema5",name:"tema5",component:()=>n.e("tema3").then(n.bind(null,"5029"))},{path:"tema6",name:"tema6",component:()=>n.e("tema3").then(n.bind(null,"92ea"))}]},{path:"/actividad",name:"actividad",component:()=>n.e("actividad").then(n.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:()=>n.e("glosario").then(n.bind(null,"69a7"))},{path:"/complementario",name:"complementario",component:()=>n.e("comple").then(n.bind(null,"dd8c"))},{path:"/referencias",name:"referencias",component:()=>n.e("referencias").then(n.bind(null,"64ef"))},{path:"/sintesis",name:"sintesis",component:()=>n.e("sintesis").then(n.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:()=>n.e("creditos").then(n.bind(null,"2e81"))}],scrollBehavior(e,a){if(e.hash){const n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise(e=>{setTimeout(()=>{e(n)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var g=h,b=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Manejo de la información",descripcionCurso:"En este documento se comprenderá el manejo de la información y sus tipos de análisis, los cuales son necesarios para la toma de decisiones, dirigidos a minimizar la incertidumbre y el riesgo en el mercado. Igualmente se abordarán las variedades de presentación de la información de mercados, su procesamiento, desde su recolección, depuración, análisis y construcción de conocimiento de mercados.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("648e")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"La información",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Datos, información y conocimiento",hash:"t_1_1"},{numero:"1.2",titulo:"Importancia de la información",hash:"t_1_2"},{numero:"1.3",titulo:"Fuentes de información",hash:"t_1_3"},{numero:"1.4",titulo:"Técnicas de recolección de información",hash:"t_1_4"},{numero:"1.5",titulo:"Análisis de la información",hash:"t_1_5"}]},{nombreRuta:"tema2",numero:"2",titulo:"Variables de  información",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Tipos de variables",hash:"t_2_1"},{numero:"2.2",titulo:"Clasificación de las variables",hash:"t_2_2"}]},{nombreRuta:"tema3",numero:"3",titulo:"Procesamiento de la información",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema4",numero:"4",titulo:"Análisis de datos",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Antecedentes",hash:"t_4_1"},{numero:"4.2",titulo:"Tipos de análisis",hash:"t_4_2"},{numero:"4.3",titulo:"Técnicas de análisis de datos",hash:"t_4_3"}]},{nombreRuta:"tema5",numero:"5",titulo:"Técnicas de evaluación",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema6",numero:"6",titulo:"Informes y documentos",desarrolloContenidos:!0,subMenu:[{numero:"6.1",titulo:"Informes",hash:"t_6_1"},{numero:"6.2",titulo:"Tipos de informes",hash:"t_6_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CF3_631101_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Bernal T cesar Augusto. (2.003) Metodología de la investigación aplicada para administración y economía. Editorial Prentice Hill.",link:""},{referencia:"Big Data Internacional Campus (2.020). Data mining vs Big data. ",link:"https://www.campusbigdata.com/big-data-blog/item/82-data-mining-vs-big-data"},{referencia:"Conceptos. (2018). Minería de datos. ",link:"https://mineriadedatos1.blogspot.com/2018/10/conceptos.html "},{referencia:"Conesa Caralt Jordi, Curto Diaz Josep. (2010). Introducción al Bussines Intelligence. Editorial UOC.",link:""},{referencia:"Dertiano Victor. (2014). ¿Qué es Business Intelligence? Beneficios del BI.",link:"https://bigeek.medium.com/qu%C3%A9-es-business-intelligence-509d6a12fdf3"},{referencia:"Espinoza Freire, Eudaldo. (2018). Las variables y su operacionalización en la investigación educativa. Scielo. ",link:"http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1990-86442018000500039  "},{referencia:"Fernández Jorge. (2016). Investigación Cualitativa Vs Investigación Cuantitativa. Investigación y docencia ",link:"https://www.investigacion360.com/2017/02/investigacion-cualitativa-vs-investigacion-cuantitativa.html  "},{referencia:"Florencia. (2013). Importancia de la información. ",link:"https://www.importancia.org/informacion.php  "},{referencia:"Grupo 10. (2015). Tipos de gráficas de control.",link:". http://grupo10direccion.blogspot.com/2015/06/tipos-de-graficas-de-control-1.html  "},{referencia:"Hernández Macario. (2008). El control estadístico del proceso. ",link:"https://optyestadistica.wordpress.com/2008/06/11/el-control-estadistico-de-proceso-3-de-3/  "},{referencia:"Hernández Noelia. (2019). Esto es lo que puede hacer la Inteligencia Artificial por la educación. Educación 3.0 ",link:"https://www.educaciontrespuntocero.com/tecnologia/poencial-ia-en-educacion/"},{referencia:"Hidalgo Nuchera Antonio, León Serrano Gonzalo, Pavon Morote Julián. (2013). la gestión de la innovación y la tecnología en las organizaciones. Editorial Pirámide.",link:""},{referencia:"Khan academy. (2018) Polígonos de frecuencia. ",link:"https://es.khanacademy.org/math/2-secundaria-pe/xf4e5558599a475b6:probabilidad-y-estadistica-2sec/xf4e5558599a475b6:preguntas-estadisticas-representacion-de-datos-a-traves-de-histogramas-y-poligonos-de-frecuencia/a/81817-artculo-polgonos-de-frecuencia  "},{referencia:"Higuita David. (2016). Analítica y productividad aplicada al ruteo de vehículos. ",link:"https://www.grupobancolombia.com/wps/portal/empresas/capital-inteligente/entorno-empresarial/tendencias/analitica-y-productividad  "},{referencia:"IBM. (2007). Análisis de causa raíz: el diagrama de espina de pescado. ",link:"https://managing-ils-reporting.itcilo.org/es/herramientas/root-cause-analysis-the-fishbone-diagramme/"},{referencia:"Lam Diaz Rosa. (2016).  La redacción de un artículo científico. ",link:"http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S0864-02892016000100006  "},{referencia:"Biblioguias: Gestión del Conocimiento (GDC): 1.3 Datos, Información y Conocimiento. (2017).  ",link:"https://biblioguias.cepal.org/c.php?g=738015&p=5789030"},{referencia:"Marta. (2019). ¿Qué es un Histograma?  Super prof ",link:"https://www.superprof.es/apuntes/escolar/matematicas/estadistica/descriptiva/histograma.html    "},{referencia:"Lind Douglas A, Marchal William E, Wathen Samuel A. (2.008). Estadística aplicada a los negocios y la economía. MC Graw Hill Interamericana.",link:""},{referencia:"Marcondes José. (2020). Diagrama ou grafico de Pareto. ",link:"https://gestaodesegurancaprivada.com.br/diagrama-ou-grafico-de-pareto-conceito/    "},{referencia:"Pulido Raúl. (2018).   Como iniciarse en el Big Data y el Análisis de Datos y no morir en el intento: La limpieza de datos. Puentes digitales ",link:"https://puentesdigitales.com/2018/02/09/como-iniciarse-en-el-big-data-y-el-analisis-de-datos-y-no-morir-en-el-intento-la-limpieza-de-datos/  "},{referencia:"Quality Leadership University. (2020). Ejemplos de antecedentes de un anteproyecto ",link:"https://qlu.ac.pa/ejemplos-antecedentes-anteproyecto/  "},{referencia:"Questionpro. (2021). ¿Qué es el análisis descriptivo? ",link:" https://www.questionpro.com/blog/es/analisis-descriptivo/   "},{referencia:"Rodal Montero Enrique, 2.020, Industrias 4.0. Editorial Pirámide.",link:""},{referencia:"SAS. (2021). minería de datos, ¿Qué es y porqué es importante?  ",link:"https://www.sas.com/es_co/insights/analytics/data-mining.html  "},{referencia:"Temas de enfermería. (2012). La media aritmética en medidas de tendencia central. ",link:"https://temasdeenfermeria.com.ar/2012/06/la-media-aritmetica-en-medidas-de-tendencia-central/  "},{referencia:"Samperi Hernández Roberto, 2.006, Metodología de la investigación. Editorial Mc Graw Hill",link:""},{referencia:"Suarez R. Pedro Alejandro, 2.001, Metodología de la investigación diseños y técnicas. Orión editores.",link:""}],glosario:[{termino:"Base de datos",significado:"Las bases de datos son una herramienta fundamental en el entorno informático hoy en día y tienen aplicación en la práctica totalidad de campos como los negocios, organizaciones y en la vida personal. Su aplicabilidad responde a la necesidad de gestionar datos que provean información pertinente.  "},{termino:"Conocimiento",significado:"es la explicación e interpretación de la información producto de los procesos cognitivos de comparar, analizar, combinar o experimentar, permitiendo al sujeto la argumentación y la aplicación de la información. "},{termino:"Datos",significado:"Son la diferenciación simbólica de una variable que puede ser clasificada como cualitativa o cuantitativa, indicando un valor representativo a dicha variable para su análisis, estudio y clasificación. "},{termino:"Encuesta",significado:"Las encuestas son un método de investigación y recopilación de datos utilizadas para obtener información a un grupo de individuos sobre diversos temas"},{termino:"Entrevista",significado:"La entrevista es una charla en la que una persona hace a otra una serie de preguntas sobre un tema determinado."},{termino:"Información",significado:"Es la denominación que se le da a la agrupación organizada de datos significativos que describen sucesos, eventos y hechos, con cuyo procesamiento se puede construir un mensaje descriptivo y/o analítico. "},{termino:"Información cualitativa",significado:"Es un método de estudio y análisis que se propone evaluar e interpretar información obtenida a través de recursos como entrevistas, conversaciones, memorias y registros documentales. "},{termino:"Información cuantitativa",significado:"Método estructurado de recopilación y análisis de información que se obtiene a través de diversas fuentes. Este proceso se lleva a cabo con el uso de herramientas estadísticas y matemáticas con el propósito de cuantificar el problema de investigación.  "},{termino:"Observación",significado:"Es una técnica que consiste en observar atentamente el fenómeno, hecho o caso, tomar información y registrarla para su posterior análisis."}],complementario:[{tema:"1.1 La información",referencia:"Pérez, J. (2008) concepto de información. https://definicion.de/informacion/",tipo:"Página web",link:"https://definicion.de/informacion/ "},{tema:"3.\tVariables de la información",referencia:"Questionpro (2021) cuales son los tipos de variables de la información https://www.questionpro.com/blog/es/tipos-de-variables-en-una-investigacion/",tipo:"Página web",link:"https://www.questionpro.com/blog/es/tipos-de-variables-en-una-investigacion/ "},{tema:"4.\tProcesamiento de la información",referencia:"Espinoza F. (2018). Las variables y su operacionalización en la investigación educativa. Scielo. http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1990-86442018000500039 ",tipo:"Página web",link:"http://www.scielo.org.pe/pdf/biblios/n75/a05n75.pdf "},{tema:"5.\tAnálisis de datos",referencia:"Rodríguez, J. (2024, enero 17). Qué es el análisis de datos: definición, etapas y ejemplos. Mundo Posgrado. https://www.mundoposgrado.com/que-es-el-analisis-de-datos/",tipo:"Página web",link:"https://www.mundoposgrado.com/que-es-el-analisis-de-datos/"},{tema:"6. Informes ",referencia:"Equipo editorial etece. (2021) Concepto, informes https://concepto.de/informe/",tipo:"Página web",link:"https://concepto.de/informe/ "}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del ecosistema",centro:"Dirección General"},{nombre:"Claudia Johanna Gómez Pérez",cargo:"Responsable de línea de producción",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Laureano E. Ruidiaz Polo",cargo:"Instructor grado 16",centro:"Centro de Comercio y Servicios - Sena Regional Bolívar"},{nombre:"Zenith Chinchilla Ruedas",cargo:"Diseñadora instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Carolina Coca Salazar",cargo:"Revisora metodológica y pedagógica ",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Revisión y corrección de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital "},{nombre:"Carolina Jiménez Suescún",cargo:"Evaluadora instruccional",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Yazmin Rocio Figueroa Pacheco",cargo:"Diseñadora de contenidos digitales",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Leonardo Castellanos Rodríguez",cargo:"Desarrollador <em>full stack</em>",centro:"Centro Agroturístico - Regional Santander"},{nombre:"María Alejandra Vera Briceño",cargo:"Animadora y productor multimedia",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Yineth Ibette Gonzalez Quintero",cargo:"Validadora de recursos educativos digitales",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Erika Fernanda Mejía Pinzón",cargo:"Evaluadora para contenidos inclusivos y accesibles",centro:"Centro Agroturístico - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});i["a"].prototype.$config=v;const k=n("9224");i["a"].prototype.$package=k,new i["a"]({router:g,store:b["a"],render:e=>e(l)}).$mount("#app")},"648e":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.8296e071.jpg"},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.a3e5da3c.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.3","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){}});
//# sourceMappingURL=app.7ec67165.js.map