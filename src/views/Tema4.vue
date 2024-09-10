<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procesamiento de la información

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
    
  

</template>
