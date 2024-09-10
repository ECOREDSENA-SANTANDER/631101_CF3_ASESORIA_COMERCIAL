<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 En el siguiente video se presenta la introducción al manejo de la información de los clientes y sus características y necesidades, con esto la empresa puede tomar buenas decisiones de mercado. 
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7b44onFfp9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Manejo de la información introducción


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
