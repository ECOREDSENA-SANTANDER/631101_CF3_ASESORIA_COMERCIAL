export default {
  global: {
    componenteFormativo: 'Manejo de la información',
    descripcionCurso:
      'En este documento se comprenderá el manejo de la información y sus tipos de análisis, los cuales son necesarios para la toma de decisiones, dirigidos a minimizar la incertidumbre y el riesgo en el mercado. Igualmente se abordarán las variedades de presentación de la información de mercados, su procesamiento, desde su recolección, depuración, análisis y construcción de conocimiento de mercados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Datos, información y conocimiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de la información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fuentes de información',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Técnicas de recolección de información',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Análisis de la información',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Variables de  información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de variables',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de las variables',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procesamiento de la información',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Antecedentes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de análisis',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas de análisis de datos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Técnicas de evaluación',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Informes y documentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Informes',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos de informes',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF3_631101_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bernal T cesar Augusto. (2.003) Metodología de la investigación aplicada para administración y economía. Editorial Prentice Hill.',
      link: '',
    },
    {
      referencia:
        'Big Data Internacional Campus (2.020). Data mining vs Big data. ',
      link:
        'https://www.campusbigdata.com/big-data-blog/item/82-data-mining-vs-big-data',
    },
    {
      referencia: 'Conceptos. (2018). Minería de datos. ',
      link: 'https://mineriadedatos1.blogspot.com/2018/10/conceptos.html ',
    },
    {
      referencia:
        'Conesa Caralt Jordi, Curto Diaz Josep. (2010). Introducción al Bussines Intelligence. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Dertiano Victor. (2014). ¿Qué es Business Intelligence? Beneficios del BI.',
      link:
        'https://bigeek.medium.com/qu%C3%A9-es-business-intelligence-509d6a12fdf3',
    },
    {
      referencia:
        'Espinoza Freire, Eudaldo. (2018). Las variables y su operacionalización en la investigación educativa. Scielo. ',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1990-86442018000500039  ',
    },
    {
      referencia:
        'Fernández Jorge. (2016). Investigación Cualitativa Vs Investigación Cuantitativa. Investigación y docencia ',
      link:
        'https://www.investigacion360.com/2017/02/investigacion-cualitativa-vs-investigacion-cuantitativa.html  ',
    },
    {
      referencia: 'Florencia. (2013). Importancia de la información. ',
      link: 'https://www.importancia.org/informacion.php  ',
    },
    {
      referencia: 'Grupo 10. (2015). Tipos de gráficas de control.',
      link:
        '. http://grupo10direccion.blogspot.com/2015/06/tipos-de-graficas-de-control-1.html  ',
    },
    {
      referencia:
        'Hernández Macario. (2008). El control estadístico del proceso. ',
      link:
        'https://optyestadistica.wordpress.com/2008/06/11/el-control-estadistico-de-proceso-3-de-3/  ',
    },
    {
      referencia:
        'Hernández Noelia. (2019). Esto es lo que puede hacer la Inteligencia Artificial por la educación. Educación 3.0 ',
      link:
        'https://www.educaciontrespuntocero.com/tecnologia/poencial-ia-en-educacion/',
    },
    {
      referencia:
        'Hidalgo Nuchera Antonio, León Serrano Gonzalo, Pavon Morote Julián. (2013). la gestión de la innovación y la tecnología en las organizaciones. Editorial Pirámide.',
      link: '',
    },
    {
      referencia: 'Khan academy. (2018) Polígonos de frecuencia. ',
      link:
        'https://es.khanacademy.org/math/2-secundaria-pe/xf4e5558599a475b6:probabilidad-y-estadistica-2sec/xf4e5558599a475b6:preguntas-estadisticas-representacion-de-datos-a-traves-de-histogramas-y-poligonos-de-frecuencia/a/81817-artculo-polgonos-de-frecuencia  ',
    },
    {
      referencia:
        'Higuita David. (2016). Analítica y productividad aplicada al ruteo de vehículos. ',
      link:
        'https://www.grupobancolombia.com/wps/portal/empresas/capital-inteligente/entorno-empresarial/tendencias/analitica-y-productividad  ',
    },
    {
      referencia:
        'IBM. (2007). Análisis de causa raíz: el diagrama de espina de pescado. ',
      link:
        'https://managing-ils-reporting.itcilo.org/es/herramientas/root-cause-analysis-the-fishbone-diagramme/',
    },
    {
      referencia:
        'Lam Diaz Rosa. (2016).  La redacción de un artículo científico. ',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S0864-02892016000100006  ',
    },
    {
      referencia:
        'Biblioguias: Gestión del Conocimiento (GDC): 1.3 Datos, Información y Conocimiento. (2017).  ',
      link: 'https://biblioguias.cepal.org/c.php?g=738015&p=5789030',
    },
    {
      referencia: 'Marta. (2019). ¿Qué es un Histograma?  Super prof ',
      link:
        'https://www.superprof.es/apuntes/escolar/matematicas/estadistica/descriptiva/histograma.html    ',
    },
    {
      referencia:
        'Lind Douglas A, Marchal William E, Wathen Samuel A. (2.008). Estadística aplicada a los negocios y la economía. MC Graw Hill Interamericana.',
      link: '',
    },
    {
      referencia: 'Marcondes José. (2020). Diagrama ou grafico de Pareto. ',
      link:
        'https://gestaodesegurancaprivada.com.br/diagrama-ou-grafico-de-pareto-conceito/    ',
    },
    {
      referencia:
        'Pulido Raúl. (2018).   Como iniciarse en el Big Data y el Análisis de Datos y no morir en el intento: La limpieza de datos. Puentes digitales ',
      link:
        'https://puentesdigitales.com/2018/02/09/como-iniciarse-en-el-big-data-y-el-analisis-de-datos-y-no-morir-en-el-intento-la-limpieza-de-datos/  ',
    },
    {
      referencia:
        'Quality Leadership University. (2020). Ejemplos de antecedentes de un anteproyecto ',
      link: 'https://qlu.ac.pa/ejemplos-antecedentes-anteproyecto/  ',
    },
    {
      referencia: 'Questionpro. (2021). ¿Qué es el análisis descriptivo? ',
      link: ' https://www.questionpro.com/blog/es/analisis-descriptivo/   ',
    },
    {
      referencia:
        'Rodal Montero Enrique, 2.020, Industrias 4.0. Editorial Pirámide.',
      link: '',
    },
    {
      referencia:
        'SAS. (2021). minería de datos, ¿Qué es y porqué es importante?  ',
      link: 'https://www.sas.com/es_co/insights/analytics/data-mining.html  ',
    },
    {
      referencia:
        'Temas de enfermería. (2012). La media aritmética en medidas de tendencia central. ',
      link:
        'https://temasdeenfermeria.com.ar/2012/06/la-media-aritmetica-en-medidas-de-tendencia-central/  ',
    },
    {
      referencia:
        'Samperi Hernández Roberto, 2.006, Metodología de la investigación. Editorial Mc Graw Hill',
      link: '',
    },
    {
      referencia:
        'Suarez R. Pedro Alejandro, 2.001, Metodología de la investigación diseños y técnicas. Orión editores.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'Las bases de datos son una herramienta fundamental en el entorno informático hoy en día y tienen aplicación en la práctica totalidad de campos como los negocios, organizaciones y en la vida personal. Su aplicabilidad responde a la necesidad de gestionar datos que provean información pertinente.  ',
    },
    {
      termino: 'Conocimiento',
      significado:
        'es la explicación e interpretación de la información producto de los procesos cognitivos de comparar, analizar, combinar o experimentar, permitiendo al sujeto la argumentación y la aplicación de la información. ',
    },
    {
      termino: 'Datos',
      significado:
        'Son la diferenciación simbólica de una variable que puede ser clasificada como cualitativa o cuantitativa, indicando un valor representativo a dicha variable para su análisis, estudio y clasificación. ',
    },
    {
      termino: 'Encuesta',
      significado:
        'Las encuestas son un método de investigación y recopilación de datos utilizadas para obtener información a un grupo de individuos sobre diversos temas',
    },
    {
      termino: 'Entrevista',
      significado:
        'La entrevista es una charla en la que una persona hace a otra una serie de preguntas sobre un tema determinado.',
    },
    {
      termino: 'Información',
      significado:
        'Es la denominación que se le da a la agrupación organizada de datos significativos que describen sucesos, eventos y hechos, con cuyo procesamiento se puede construir un mensaje descriptivo y/o analítico. ',
    },
    {
      termino: 'Información cualitativa',
      significado:
        'Es un método de estudio y análisis que se propone evaluar e interpretar información obtenida a través de recursos como entrevistas, conversaciones, memorias y registros documentales. ',
    },
    {
      termino: 'Información cuantitativa',
      significado:
        'Método estructurado de recopilación y análisis de información que se obtiene a través de diversas fuentes. Este proceso se lleva a cabo con el uso de herramientas estadísticas y matemáticas con el propósito de cuantificar el problema de investigación.  ',
    },
    {
      termino: 'Observación',
      significado:
        'Es una técnica que consiste en observar atentamente el fenómeno, hecho o caso, tomar información y registrarla para su posterior análisis.',
    },
  ],
  complementario: [
    {
      tema: '1.1 La información',
      referencia:
        'Pérez, J. (2008) concepto de información. https://definicion.de/informacion/',
      tipo: 'Página web',
      link: 'https://definicion.de/informacion/ ',
    },
    {
      tema: '3.	Variables de la información',
      referencia:
        'Questionpro (2021) cuales son los tipos de variables de la información https://www.questionpro.com/blog/es/tipos-de-variables-en-una-investigacion/',
      tipo: 'Página web',
      link:
        'https://www.questionpro.com/blog/es/tipos-de-variables-en-una-investigacion/ ',
    },
    {
      tema: '4.	Procesamiento de la información',
      referencia:
        'Espinoza F. (2018). Las variables y su operacionalización en la investigación educativa. Scielo. http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1990-86442018000500039 ',
      tipo: 'Página web',
      link: 'http://www.scielo.org.pe/pdf/biblios/n75/a05n75.pdf ',
    },
    {
      tema: '5.	Análisis de datos',
      referencia:
        'Rodríguez, J. (2024, enero 17). Qué es el análisis de datos: definición, etapas y ejemplos. Mundo Posgrado. https://www.mundoposgrado.com/que-es-el-analisis-de-datos/',
      tipo: 'Página web',
      link: 'https://www.mundoposgrado.com/que-es-el-analisis-de-datos/',
    },
    {
      tema: '6. Informes ',
      referencia:
        'Equipo editorial etece. (2021) Concepto, informes https://concepto.de/informe/',
      tipo: 'Página web',
      link: 'https://concepto.de/informe/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laureano E. Ruidiaz Polo',
          cargo: 'Instructor grado 16',
          centro: 'Centro de Comercio y Servicios - Sena Regional Bolívar',
        },
        {
          nombre: 'Zenith Chinchilla Ruedas',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica ',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
