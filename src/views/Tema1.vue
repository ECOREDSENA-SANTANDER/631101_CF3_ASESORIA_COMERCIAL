<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La información

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-8.col-sm-6
        img.mb-2(src='@/assets/curso/temas/tema1/img01.png', alt='')
      .col-lg-8
        p En el actual siglo XXI, una de sus principales características es la valía de la información para la toma de decisiones tanto empresariales, como ambientales y sociales; la sociedad vive en un mundo de permanente bombardeo de información en noticias de prensa, radio y televisión, pero con la masificación de la web y de las redes sociales, hoy en día el ser humano vive rodeado de información útil, pero también de información bastante inservible o inútil.    
        .cajon.color-acento-contenido.p-4.mb-4
          p Ahora bien, en los desempeños en que cotidianamente se desenvuelve la gran mayoría de las profesiones, oficios y artes, la información es trascendente en la toma de decisiones para el desempeño laboral. Para que este proceso de decisión sea lo más acertado posible es necesario determinar primero lo que es dato, información y generación de conocimientos.

    
    Separador 
    #t_1_1.titulo-segundo.mb-4.color-primario
      h2 1.1 Datos, información y conocimientos

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        p En el presente milenio la sociedad científica ha caracterizado y denominado a la población como la sociedad de la información, según las expresiones de Ruiz de Querol (2.007), y es que ha sido tanta la exposición de la sociedad a todo tipo de información y en todos los momentos, que se ha convertido en una desventaja competitiva no hacer parte de esta sociedad del conocimiento, para esto es importante entender como los datos se convierten en conocimiento en el contexto contemporáneo.
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img02.svg', alt='Infografía puntos calientes')
              figcaption Datos - información y conocimientos.


          .tarjeta.fondo-morado.p-3(x="25%" y="51%" numero="+")
            p #[b Datos:] es la diferenciación simbólica de una variable que puede ser clasificada como cualitativa o cuantitativa, indicando un valor representativo a dicha variable para su análisis, estudio y clasificación. Por ejemplo: Juan pesa 80 kilogramos, la expresión 80 es el valor representativo del peso de Juan que se mide en kilogramos.

          .tarjeta.fondo-morado.p-3(x="48%" y="33%" numero="+")
            p #[b Información:] es la denominación que se le da a la agrupación organizada de datos significativos que describen sucesos, eventos y hechos, con cuyo procesamiento se puede construir un mensaje descriptivo y/o analítico.

          .tarjeta.fondo-morado.p-3(x="73%" y="50%" numero="+")
            p #[b Conocimiento:] es la explicación e interpretación de la información producto de los procesos cognitivos de comparar, analizar, combinar o experimentar, permitiendo al sujeto la argumentación y la aplicación de la información.
    
    Separador 
    #t_1_2.titulo-segundo.mb-4.color-primario
      h2 1.2 Importancia de la información

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.col-sm-6
        img.mb-2(src='@/assets/curso/temas/tema1/img02.png', alt='')
      .col-lg-8
        p.mb-4 Es importante estar debidamente informado sobre un propósito, porque no solamente permite desenrollar un punto de vista o postura respecto del mismo, sino también porque permite adelantarse  a un hecho o estar prevenidos sobre determinada situación.
        .cajon.color-acento-contenido.p-4.mb-4
          p Según Florencia (2.013) en sus blogs expresa “Gracias a la información se puede conceptuar, significar o encontrarle sentido a las cosas que rodean o acontecen en la sociedad, para luego de concebir el conocimiento debido, tomar decisiones”.
        p.mb-5 Entonces, la información es necesaria y vital en muchos aspectos de la vida personal y profesional, y en los tiempos presentes se le atribuye a la misma una especial valoración en diversos contextos ya que sin duda alguna en la actualidad la humanidad está atravesando la era de la información.

    Separador 
    #t_1_3.titulo-segundo.mb-4.color-primario
      h2 1.3 Fuentes de información

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-12
        p Por fuente de información se entiende, cualquier instrumento o en un sentido más amplio, recurso, que permita satisfacer una necesidad informativa. La expresión fuente se entiende entonces, como el documento, sitio, lugar, página, domicilio, persona natural o jurídica, en donde se encuentra la información que necesita un demandante de la misma.
    
    .row.justify-content-start.mb-3
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/tema1/aro.svg")
          h3.bg13.py-2.w-card-text Fuentes de información primaria y secundaria    
    p.mb-4 Obtener información confiable y válida requiere cuidado y dedicación, pues de ello depende la confiabilidad y validez del estudio, estos datos o información que va a recolectarse en el medio, a través del cual se responden las preguntas de investigación y se logran los objetivos del estudio. Los datos deben ser pertinentes y suficientes para lo cual es necesario definir las fuentes y técnicas adecuadas para su recolección.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-md-6.col-lg.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fondo-azul
           

      .col-md-6.col-lg.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fondo-morado
            
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-12.col-md-12.col-12
        .tarjeta--container.row
          .col-md.tarjeta.fondo-azul.p-4
            .row.justify-content-center.align-items-center.p-4
              .col-lg-2.py-2.col-4
                img(src='@/assets/curso/temas/tema1/1.png', alt='')
              .col-lg-10
                h2.text-center.titulo-morado.p-2 Fuentes de información primarias
              .col-lg-12
                .py-3
                p Son todas aquellas personas, empresas, organizaciones, los acontecimientos que aquejan o benefician a la sociedad, el propio medio ambiente natural de las donde  se obtienen información directa, es decir, de donde se origina la información, también son conocidas como fuentes de primera mano o desde el lugar de los hechos.
          .col-md.tarjeta.fondo-morado.p-4
            .row.justify-content-center.align-items-center.p-4
              .col-lg-2.py-2.col-4
                img(src='@/assets/curso/temas/tema1/2.png', alt='')
              .col-lg-10
                h2.text-center.titulo-morado.p-2 Fuentes de información secundarias
              .col-lg-12
                .py-3
                p Son todas aquellas revistas, libros, los documentales, los noticieros, medios de información y los documentos escritos (todo medio impreso físico o digital) que ofrecen información sobre el tema por investigar, pero que no son la fuente original de los hechos o situaciones, sino que los referencian.
                br







      Separador 
      #t_1_4.titulo-segundo.mb-4.color-primario
        h2 1.4 Técnicas de recolección de la información
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-12
          p Debe entenderse que los procesos de recolección de la información constan una gran multiplicidad de técnicas o herramientas para la recopilación de la misma, las técnicas más usadas son:
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img03.svg', alt='Infografía puntos calientes')
                figcaption Técnicas de recolección de la información.

            .tarjeta.fondo-morado.p-3(x="19%" y="38%" numero="+")
              p #[b La encuesta], según Bernal (2.000), “una de las técnicas más reconocidas y utilizadas, a pesar de que ha perdido credibilidad por  el sesgo que hay en las personas encuestadas y por el uso cada vez más frecuente de TIC´S” (p.172). 
              p Por tanto, la encuesta está fundada en un agregado de interrogantes que son planeadas con la finalidad de obtener información de las personas en referencia a una temática o hecho específico.

            .tarjeta.fondo-morado.p-3(x="29%" y="65%" numero="+")
              p #[b La entrevista] es una técnica orientada a obtener una conversación estructurada con las personas con apropiación de la información, la entrevista a pesar de manejar un cuestionario base con el cual se establecerá una comunicación dialógica con el entrevistado, permite la flexibilidad de ampliar la respuesta del entrevistado con nuevas preguntas.

            .tarjeta.fondo-morado.p-3(x="50%" y="78%" numero="+")
              p #[b La observación directa] cada día cobra mayor fuerza y credibilidad, y cada vez tiende a generalizarse más, dado que permite la obtención de información directa y confiable, siempre que medie un procedimiento sistematizado y supervisado, para lo cual hoy en día se utilizan medios audiovisuales muy completos y con alto componente tecnológico en las industrias 4.0, permite estudios de comportamiento del consumidor, del personal en el puesto de trabajo, estímulos basados en percepciones sensoriales en pruebas de productos, entre otros.

            .tarjeta.fondo-morado.p-3(x="70%" y="67%" numero="+")
              p #[b El análisis de documentos] se utiliza bajo los criterios de fichas bibliográficas que analizan material impreso o digital, su principal uso está en la elaboración del marco teórico del estudio.
            
            .tarjeta.fondo-morado.p-3(x="80%" y="37%" numero="+")
              p #[b La búsqueda web] o consulta de bases de datos, páginas web, bloog´s, en la red virtual se ha convertido en técnica de recolección de información por excelencia de toda la sociedad. 


      Separador 
      #t_1_5.titulo-segundo.mb-4.color-primario
        h2 1.5 Técnicas de análisis de la información

      p La información tiene diversas formas de ser examinada y analizada, de ello, dependerá las conclusiones que sean pertinentes al proceso de investigación que se está desarrollando, por tanto, a continuación se presenta la conceptualización de las formas de análisis de la información.

      .row.justify-content-start.mb-4
        .col-sm-12.col-lg-7.col-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/tema1/aro.svg")
            h3.bg13.py-2.w-card-text Análisis de la información

      
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-4.col-8
          img.mb-2(src="@/assets/curso/temas/tema1/img03.png")
        .col-lg-8.col-12.col-sm-12
          h4.subrayado.mb-4 Investigación cualitativa
          p Según Sampieri (2.006) “se fundamentan más en un proceso inductivo (explorar y describir, y luego generar perspectivas teóricas), van de lo particular a lo general en el análisis de fenómenos sociales” (p 8).
          p Según  Báez (2.009) en su definición agrega el componente comercial muy de moda en los presentes contextos ofreciendo el concepto de investigación cualitativa como “el conjunto de todas las cosas que se hacen para seguir la pista a los mercados y encontrar los rasgos que distinguen a las personas (cliente, consumidor, organización…) y a las cosas (productos, bienes, servicios, sectores de actividad) sus propiedades y atributos, sean estos naturales y/o adquiridos” (p.35).
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          h4 Ventajas y desventajas de la investigación cualitativa
              
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12.col-md-12.col-12
        .tarjeta--container.row
          .col-md.tarjeta.fondo-azul.p-4
            .row.justify-content-center.align-items-center.p-4
                .col-lg-2.py-2.col-4
                  img(src='@/assets/curso/temas/tema1/ventaja.svg', alt='')
                .col-lg-8
                  h2.text-center.titulo-morado.p-2 Ventajas
                .py-2
                .col-lg-12
                  ul.lista-ul--color
                    li
                      i.fas.fa-check-circle
                      | Permite profundización.
                    li
                      i.fas.fa-check-circle
                      | Evaluación correspondencia verbal-corporal.
                    li
                      i.fas.fa-check-circle
                      | Mayor rapidez.

          .col-md.tarjeta.fondo-morado.p-4
            .row.justify-content-center.align-items-center.p-4
                .col-lg-2.py-2.col-4
                  img(src='@/assets/curso/temas/tema1/desventaja.svg', alt='')
                .col-lg-8
                  h2.text-center.titulo-morado.p-2 Desventajas
                .py-2
                .col-lg-12
                  ul.lista-ul--color
                    li
                      i.fas.fa-check-circle
                      |  No cuantifican.
                    li
                      i.fas.fa-check-circle
                      |  Poco personal especializado.
                br
                br
      .py-3
      .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-lg-8.col-12
          h4.subrayado.mb-4 Investigación cuantitativa
          p Es un método de investigación en el que, según Sampieri (2.006), el investigador recolecta datos numéricos de los objetos, fenómenos o participantes, que estudia y analiza mediante procedimientos estadísticos.
        .col-lg-4.col-8
          img(src="@/assets/curso/temas/tema1/img04.png")
         
          .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          h4 Ventajas y desventajas de la investigación cualitativa

            
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12.col-md-12.col-12
        .tarjeta--container.row
          .col-md.tarjeta.fondo-azul.p-4
            .row.justify-content-center.align-items-center.p-4
                .col-lg-2.py-2.col-4
                  img(src='@/assets/curso/temas/tema1/ventaja.svg', alt='')
                .col-lg-8
                  h2.text-center.titulo-morado.p-2 Ventajas
                .py-2
                .col-lg-12
                  ul.lista-ul--color
                    li
                      i.fas.fa-check-circle
                      | Permite profundización.
                    li
                      i.fas.fa-check-circle
                      | Evaluación correspondencia verbal-corporal.
                    li
                      i.fas.fa-check-circle
                      | Mayor rapidez.

          .col-md.tarjeta.fondo-morado.p-4
            .row.justify-content-center.align-items-center.p-4
                .col-lg-2.py-2.col-4
                  img(src='@/assets/curso/temas/tema1/ventaja.svg', alt='')
                .col-lg-8
                  h2.text-center.titulo-morado.p-2 Ventajas
                .py-2
                .col-lg-12
                  ul.lista-ul--color
                    li
                      i.fas.fa-check-circle
                      |  Permite hacer proyecciones.
                    li
                      i.fas.fa-check-circle
                      |  Mayor variedad de opiniones.
                    li
                      i.fas.fa-check-circle
                      |  Hace más tangible la relación causa/efecto.
          .py-3
      
      .row.align-items-center.justify-content-center.mb-5
        .col-lg-12.col-md-12.col-12
          .caja1.p-4
            .row.align-items-center.justify-content-center
              .col-lg-2
                img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/temas/tema1/alerta.svg")
              .col-lg-10.col-md-12.col-12
                p.mb-0.text-white Para concretar la investigación cualitativa pretende profundizar en los conceptos y valores, detectar motivadores y valorar las reacciones y para su ejecución requiere un soporte de psicología. Por otro lado en la  investigación cuantitativa pretende cuantificar, establecer proporciones y diferencias e importancia relativa y para su ejecución requiere un soporte estadístico.






</template>
