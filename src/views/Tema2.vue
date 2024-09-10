<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Variables de  información

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Según Espinoza (2018), las variables son elementos que se ponen en dependencia a un referente teórico y según lo que se puede pronosticar en la población de estudio, por tanto, la variable es una propiedad que puede cambiar de valor en cada situación o de un individuo a otro y cuyo cambio o alteración es capaz de medirse en torno a una escala.
    
      Separador 
      #t_2_1.titulo-segundo.mb-4.color-primario
        h2 2.1 Tipos de variables en el análisis de datos

      p Existen varios tipos de variables y cada una de ellas representa una característica, número o cantidad que puede ser medida o contada.
      
      .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/tema1/aro.svg")
            h3.bg13.py-2.w-card-text Tipos de variable
        .py-2
        p Obtener información confiable y válida requiere cuidado y dedicación, pues de ello depende la confiabilidad y validez del estudio, estos datos o información que va a recolectarse en el medio, a través del cual se responden las preguntas de investigación y se logran los objetivos del estudio. Los datos deben ser pertinentes y suficientes para lo cual es necesario definir las fuentes y técnicas adecuadas para su recolección.
      
      .row.mb-5(data-aos="zoom-in-left")
        .col-lg-6
          h4.subrayado.mb-4 Variables numéricas
        .col-lg-12
          p Son aquellas que personifican números y con ellas se logran realizar procedimientos aritméticamente. Por ejemplo, ventas mensuales puede representar a las ventas de productos  que hay en un mes cualquiera. También son conocidas como variables cuantitativas, que a su vez se clasifican en discretas y continuas.
      
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="Variables discretas")
          .row-p-4
            .col-md-12.mb-4.mb-md-0.p-4
              h4 Variables discretas
              p Son aquellas cuyos valores corresponden a clases independientes, no admiten valores intermedios y por lo tanto en ellas no tiene sentido hablar de promedios estadísticos, un ejemplo clásico, es la respuesta a la pregunta cuántos hermanos tienen los 5 amigos de Javier Martínez, la respuesta a esta pregunta es 3, 2, 1, 0, 2; es preciso aclarar que no cabe en las respuesta un amigo de Javier Martínez que tenga 1.5 hermanos o alguna respuesta semejante.
        
        .py-3.py-md-4(titulo="Variables continuas")
          .row
            .col-md-12.mb-4.mb-md-0.p-4
              h4 Variables continuas
              p Son variables cuyos valores cambian en carácter progresivo y no a irrupciones o de otra condición, tienen una disposición que no puede alterarse y sobre ellas se pueden hacer análisis estadísticos descriptivos mediantes medidos de tendencia central (media, mediana y moda) y medidas de dispersión. Por ejemplo, la estatura de los jugadores de la selección Colombia de fútbol, la respuesta sería que el jugador A mide 1.80 m, el jugador B 1,82 m, el jugador C 1.79 m, el jugador D 1.85 m y el jugador E 1.78 m; sobre esa estatura es típico poder calcular medidas de tendencia central estadísticas, como el promedio de estatura que sería 1.80 m.

      .py-4
      .row.mb-5(data-aos="zoom-in-left")
        .col-lg-6
          h4.subrayado.mb-4 Variables categóricas
        .col-lg-12
          p Son un número definido de valores diferentes o categorías (por ejemplo, raza, género, sexo o religión). Las variables categóricas pueden ser nominales u ordinales.
      
      TabsC.color-acento-botones
        .py-3.py-md-4(titulo="Variable ordinal")
          .row-p-4
            .col-md-12.mb-4.mb-md-0.p-4
              h4 Variable ordinal
              p Es un tipo de variable estadística de tipo cualitativo que expresa con palabras una cualidad de naturaleza ordenable como por ejemplo primer puesto, segundo puesto, tercer puesto.
        
        .py-3.py-md-4(titulo="Variables nominal")
          .row
            .col-md-12.mb-4.mb-md-0.p-4
              h4 Variables nominal
              p Es un tipo de variable estadística de tipo cualitativo que expresa con nombre una cualidad no necesariamente ordenable, como puede ser por ejemplo los colores de ojos de un salón de clases.


      Separador 
      #t_2_2.titulo-segundo.mb-4.color-primario
        h2 2.2 Clasificación de las variables

      p.mb-5 Se pueden identificar 2 tipos de variables que participan en el manejo de la información de un proceso investigativo y pueden señalar relaciones comportamentales  al medir determinado número de sucesos:
      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-5.col-md-12.col-12.px-3
          .titulo-sexto.color-secundario
            h5 Figura 1. 
            | Causa y efecto
          img(src="@/assets/curso/temas/tema2/img02.svg", alt= 'la imagen presenta dos columnas: causa y efecto, donde se menciona: manipulada y variable independiente en la columna de causa; medida y variable dependiente en la columna de efecto. Estas palabras también relacionan respectivamente.')
        .col-lg-5.col-md-12.col-12
          br
          br
          ul.lista-ul
            li
              i.fas.fa-angle-right
              | #[b Variable dependiente] es definida por Bernal (2.003) como el “resultado” o “efecto” producido por la variable independiente.
            li
              i.fas.fa-angle-right
              | #[b Variable independiente] es definida como todo aquel aspecto, hecho, situación, rasgo, que se considera como “la causa de” en una relación entre variables.

</template>
