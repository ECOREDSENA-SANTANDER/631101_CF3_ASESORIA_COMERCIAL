<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procesamiento de la información
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-4.col-8
        img.mb-2(src="@/assets/curso/temas/tema3/img01.svg")
      .col-lg-8
        p Es un proceso que implica:
        ul.ul.lista-ul
          li
            i.fas.fa-check-circle
            | Determinación clara de los objetivos que  ameritan la necesidad de información.
          li
            i.fas.fa-check-circle
            | Tener una población plenamente identificada para la recolección de la información.
          li
            i.fas.fa-check-circle
            | Identificar las técnicas de recolección de la información debidamente validadas.
        p.mb-5 A continuación se presenta una cadena de pasos que pueden emplearse para la recaudación de los datos necesarios para responder a los objetivos:
      

    TabsC.color-acento-botones(data-aos="zoom-in-left")
      .py-3.py-md-5(titulo="Recogida de los datos").bgfondo4
        .row.justify-content-center.align-items-center.p-4
          .col-md-4.col-8.my-2
            figure
              img.mb-2(src='@/assets/curso/temas/tema3/img01.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Recogida de los datos
            p Esta parte del procesamiento de la información requiere previamente haber perfilado
            p los instrumentos de recolección que hayan sido validados y que generen confiabilidad. La recolección de datos se realiza siguiendo tres (3) pasos:
            ul.lista-ul
              li.d-flex.mb-2
                i.fas.fa-check-circle
                p.mb-0 Elegir y confeccionar un instrumento de recolección de datos validado.
              li.d-flex.mb-2
                i.fas.fa-check-circle
                p.mb-0 Utilizar el instrumento de recolección de datos validado en las fuentes de información previamente escogidas. 
              li.d-flex.mb-2
                i.fas.fa-check-circle
                p.mb-0 Una vez recopilada la información obtenida se debe codificar.
              
          
      .py-3.py-md-5(titulo="Procesamiento de los datos").bgfondo4
        .row.justify-content-center.align-items-center.p-4(data-aos="zoom-in-left")
            .col-md-4.col-8.my-2
              figure
                img.mb-2(src='@/assets/curso/temas/tema3/img02.png', alt='')
            .col-md-6.mb-4.mb-md-0
              h4 Procesamiento de los datos
              p Debe efectuarse mediante el uso de herramientas estadísticas apoyadas en 
              p #[em software] reconocidos por la comunidad científica, que hoy fácilmente se encuentran en el mercado. Para realizar la actividad de procesar los datos se siguen unos pasos de los cuales Bernal (2.003) postula lo siguiente:
              ul.lista-ul
                li.d-flex.mb-2
                  i.fas.fa-check-circle
                  p.mb-0  Obtener la información de la población o muestra objeto de la investigación. 
                li.d-flex.mb-2
                  i.fas.fa-check-circle
                  | Definir las variables o criterios para ordenar los datos obtenidos.
                li.d-flex.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 Definir las herramientas estadísticas y #[em software] reconocidos por la comunidad científica. 
                li.d-flex.mb-2
                  i.fas.fa-check-circle
                  | Introducir los datos en el computador y activar el programa para que procese la información. 
                li.d-flex.mb-2
                  i.fas.fa-check-circle
                  | Imprimir los resultados. (p.179).
        
      .py-3.py-md-5(titulo="Interpretación de los datos").bgfondo4
        .row.justify-content-center.align-items-center.p-4
          .col-md-4.col-8.my-2
            figure
              img.mb-2(src='@/assets/curso/temas/tema3/img03.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Interpretación de los datos
            p Se refiere a la ejecución de procesos por medio de los cuales se examinan los datos con el fin de llegar a una conclusión informada y una etapa esencial del procesamiento de datos.
        
      .py-3.py-md-5(titulo="Almacenamiento de los datos").bgfondo4
        .row.justify-content-center.align-items-center.p-4
          .col-md-4.col-8.my-2
            figure
              img.mb-2(src='@/assets/curso/temas/tema3/img04.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Almacenamiento de los datos
            p Es el proceso de custodia o protección de la información a través del empleo de un conjunto de técnicas desarrollada enfáticamente para guardar esos datos y garantizar su acceso en el momento en que se requiera.
               
</template>
