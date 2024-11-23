<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 La información

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 El análisis de datos es el proceso de examinar conjuntos de datos para encontrar tendencias y sacar conclusiones sobre la información que contienen; en la investigación cuantitativa apela a técnicas de cálculo de variables y  a la estadística como técnica específica en la ordenación y la exégesis de datos cuantitativos o cualitativos.
      
      Separador 
      #t_4_1.titulo-segundo.mb-4.color-primario
        h2 4.1 Antecedentes

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-4.col-8.col-sm-6
          img(src='@/assets/curso/temas/tema4/img02.png', alt='')
        .col-lg-8
          .cajon.color-acento-contenido.p-4.mb-4
            p Son todos los trabajos realizados previamente sobre el tema que se va a investigar y que aportan información relevante para nuestro trabajo. La página web de Quality Leadership University (QLE) indica que tradicionalmente en el análisis de antecedentes se verifica:
          ul.lista-ul
            li
              i.fas.fa-angle-right
              | Los resultados de otras investigaciones o estudios.
            li
              i.fas.fa-angle-right
              | La importancia de estos con relación al tema planteado.
            li
              i.fas.fa-angle-right
              | Título y autores del trabajo de referencia.
            li
              i.fas.fa-angle-right
              | El planteamiento del problema, los objetivos e hipótesis planteadas por estos estudios o investigadores.
            li
              i.fas.fa-angle-right
              | Metodología utilizada. 
      
      Separador 
      #t_4_1.titulo-segundo.mb-4.color-primario
        h2 4.2 Tipos de análisis de datos 

      p.mb-5 Son varios los tipos de análisis de datos que se pueden realizar dependiendo de la información que se dispone, a continuación se destacan los más importantes.
      
      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-5.col-md-12.col-12.px-3
          .titulo-sexto.color-secundario
            h5 Figura 2. 
            | Tipos de análisis de datos
        .col-lg-12.col-md-12.col-12.px-3
          img(src='@/assets/curso/temas/tema4/img03.svg', alt='la imagen presenta un línea recta, y dos flechas simulando que empujan hacia abajo y hacia arriba, al lado de la flecha hacia abajo se lee análisis cualitativo, y al lado de la flecha hacia arriba se lee análisis cuantitativo.')
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-8
          p De acuerdo con el Blog Questionpro (2021): también se recurre a otros tipos de análisis entre los cuales está el análisis descriptivo, que como su nombre lo indica, consiste en describir las tendencias claves en los datos existentes y observar las situaciones que conduzcan a nuevos hechos, está basada en la estadística descriptiva que conlleva a las medidas de tendencia central (media, mediana y moda) esta información es cotejada con las medidas de dispersión (desviación estándar y error estándar) para su validación. 
          .cajon.color-acento-contenido.p-4.mb-4
            p Por su parte, el análisis predictivo se conceptúa por parte del mismo blog Questionpro (2021) como una forma de análisis estadístico que se encomienda de conseguir información nueva o histórica y utilizarla para pronosticar patrones de conducta.
          p Por último, está el análisis prescriptivo se encarga de encontrar una solución entre una gama de variantes con el objetivo de optimizar los recursos y aumentar la eficiencia operativa, es decir, ayuda a entender qué tenemos que hacer para obtener los resultados que queramos en el futuro.
        .col-lg-4.col-sm-6
          img(src='@/assets/curso/temas/tema4/img04.png', alt='')

        .py-4
        .row.justify-content-center.mb-4(data-aos="zoom-in-left")
          .col-lg-10.col-md-12.col-12.px-3
            .titulo-sexto.color-secundario
              h5 Figura 3. 
              | Análisis descriptivo, predictivo y prescriptivo
            img(src='@/assets/curso/temas/tema4/img05.svg', alt='la imagen presenta tres iconos donde se lee respectivamente lo siguiente: Descriptiva(bombillo): describir y comprender lo que está pasando. <i>Big Data</i>. Predictiva(lupa): predecir lo que puede pasar. Pronostico y simulación. Prescriptiva(grafica de barras): Lo que se debe hacer en el futuro. Técnicas de optimización.')
            figcaption Nota: Adaptada de David Higuita (2.016)
      Separador 
      #t_4_3.titulo-segundo.mb-4.color-primario
        h2 4.3 Técnicas de análisis de datos  

      p Las técnicas de análisis de datos se definen como el proceso de explorar los datos metódicamente con el objetivo de destacar aquella información que sea más útil, con el auge y la aplicación de las tecnologías basadas en las industrias 4.0 los análisis de datos se hacen cada vez más precisos, disminuyendo la incertidumbre y el riesgo de errores.


      .row.mb-5
        .col-lg-12.col-12
          .tarjeta.tarjeta--gris.p-4.mb-5
            LineaTiempoC.color-acento-contenido(text-small)
              .row.justify-content-center(titulo="Minería de datos")
                .col-md-11.mb-4.mb-md-0
                  h4 Minería de datos
                  p Minería de datos es definida como el proceso de encontrar singularidades, elementos comunes y correspondencias en grandes agregados de datos para augurar conclusiones, empleando una amplia variedad de técnicas.  En conformidad con la página web de SAS la minería de datos le permite:
                  ul.lista-ul
                    li
                      i.fas.fa-angle-right
                      | Filtrar todo el ruido caótico y repetitivo en sus datos. (datos que se repiten)
                    li
                      i.fas.fa-angle-right
                      | Entender qué es relevante y luego hacer un buen uso de esa información para evaluar resultados probables. (datos significativos).
                    li
                      i.fas.fa-angle-right
                      | Acelerar el ritmo de la toma de decisiones informadas.
                  p La minería de datos tiene seis fases: comprensión del negocio, comprensión de los datos, preparación de datos, modelado, evaluación y despliegue.
                .col-lg-9.blanco.p-4
                  .titulo-sexto.color-secundario
                    h5 Figura 4. 
                    | Ámbito, Objetivos de negocio
                  img(src='@/assets/curso/temas/tema4/img06.svg', alt='la imagen presenta un diagrama de flujo con figuras geométricas que representan el proceso del análisis de datos: datos iniciales, almacén de datos, vista minable, patrones , conocimiento y decisiones. Adicional a estos conceptos, se encuentran mencionados en un flujo contrario: revisión, despliegue, evaluación, modelado, preparación de datos, integración y recopilación.')
                  figcaption Nota. Adaptada de conceptos (2.018)


              .row.justify-content-center(titulo="<i>Business intelligence</i>")
                .col-md-11.mb-4.mb-md-0
                    h4 #[em Business intelligence]
                    p Se conceptúa al conjunto de metodologías, aplicaciones, prácticas y capacidades enfocadas a la creación y administración de información que permite tomar mejores decisiones a los usuarios de una organización (Conesa y Curto, 2010, p18). Estas acciones pueden ser procesos, técnicas, metodologías, herramientas y tecnologías que generan información para que sirva de base para la toma de decisiones. En otras palabras la inteligencia de negocios o #[em business intelligence] (BI), mezcla lo más profundo del análisis de negocios con el trabajo del #[em big data] y la minería de datos, para obtener la información más expedita que  permita la mejor decisión posible en los escenarios posibles, minimizando siempre de esta forma los riesgos posibles.
                .col-lg-10.blanco.p-4
                    .titulo-sexto.color-secundario
                      h5 Figura 5.
                      |  Proceso #[em business intelligence] 
                    img(src='@/assets/curso/temas/tema4/img07.svg', alt='en el diagrama se presenta un flujo con los siguientes conceptos: Fuentes de datos, extracción, transformación y carga, almacén de datos y explotación de datos. Usuario final')
      

              .row.justify-content-center(titulo="Aprendizaje  automático")
                .col-md-6
                  h4 Aprendizaje  automático
                  p Es la parte de la inteligencia artificial (IA) que se concentra en desarrollar sistemas que aprenden, u optimizan el rendimiento, en dependencia  de los datos que ejecuten. Inteligencia artificial es un término amplio que se refiere a sistemas o máquinas que imitan la inteligencia humana, se puede decir que, el #[em Machine Learning] (como también es conocido el aprendizaje automático) es una disciplina del ámbito de la Inteligencia Artificial que, a través de algoritmos o guarismos matemáticos, otorga a los computadores de la capacidad de asemejar estándares en datos masivos y elaborar predicciones (para hacer análisis predictivos).
                .col-md-6
                  img(src='@/assets/curso/temas/tema4/img08.png', alt='')
              
              
              
              .row.justify-content-center(titulo="Análisis del <i>Big Data</i>")
                .col-md-6
                  .py-2
                  h4 Análisis del #[em Big Data]
                  .py-2
                  p El análisis de ‘grandes datos’ es el proceso de inspeccionar grandes cantidades de datos de una diversidad de tipos (#[em big data]) para descubrir patrones escondidos u ocultos, correspondencias inéditas u otra información útil, para generar información que posteriormente se convierta en conocimiento y aprendizaje en la toma asertiva de decisiones. Según Rodal Montero (2.020) define la “analítica de #[em big data]  como  la recolección, gestión y análisis a alta velocidad de grandes, dinámicos y heterogéneos volúmenes de datos generados por usuarios y máquinas, que debido a su tamaño y complejidad superan las capacidades de procesamiento de las herramientas de software tradicionales, por lo que requieren técnicas innovadoras para su procesamiento y tratamiento”. (p 65).
                  p Las fases del proceso de la analítica de grandes datos es la recolección de grandes magnitudes de datos, posteriormente existe todo un proceso de limpieza de esos datos, evitando los valores que constituyan ruido.
                .col-md-5.blanco.p-4
                  .titulo-sexto.color-secundario
                    h5 Figura 6.
                    | #[em Big Data] 
                  img(src='@/assets/curso/temas/tema4/img09.png', alt='Texto alternativo: la imagen presenta las palabras <i>BIG DATA</i> en el medio de un circulo, sobre el cual se mencionan: recolección de datos, limpieza de datos, analisis de datos e interpretación de datos.')
                  figcaption Nota. Adaptada de Raul Pulido (2.018)

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-4.col-8.my-2.col-sm-6
          img(src='@/assets/curso/temas/tema4/img10.png', alt='')
        .col-lg-8
          p Para Big Data Internacional Campus (2.020) Data mining es el proceso de identificación de toda la información que es relevante y es extraída de grandes cantidades de datos. El objetivo de esta extracción es descubrir patrones y tendencias estructurando la información que se ha obtenido de una manera que sea comprensible para su utilización. El data mining reúne las ventajas de varias áreas como la inteligencia artificial, la estadística, las bases de datos, la computación gráfica y el procesamiento masivo.
          .cajon.color-acento-contenido.p-4.mb-4
            p La principal diferencia entre #[em big data] y #[em data mining] (grandes datos y minería de datos) se halla en que #[em data mining] se refiere a operaciones que implican búsquedas sofisticadas para la obtención de datos específicos y concretos dentro del gran mundo de los datos (#[em big data]) Ejemplificando la data mining es observar, analizar y estudiar los datos con  microscopios, mientras que el #[em big data]  utilizará telescopios para observar, analizar y estudiar los datos
      





</template>
