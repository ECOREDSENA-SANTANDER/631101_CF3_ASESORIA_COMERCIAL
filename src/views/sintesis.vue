<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src="@/assets/curso/titulo.svg", alt="alt")
    
    p El manejo de la información es un tema fundamental para un asesor comercial ya que dentro de sus competencias debe dominar temas como el procesamiento de la información, el análisis de datos y la realización de informes, en el siguiente diagrama se relacionan los conceptos y temas más significativos estudiados en este componente:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="en el diagrama se presentan los temas y conceptos más importantes tratados dentro del componente")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
