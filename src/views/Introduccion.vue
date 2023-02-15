<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p Estimado aprendiz: en este componente formativo aprenderá sobre la implementación de tecnologías de la información y las comunicaciones, además identificará cómo ajustar los parámetros y estándares de los dispositivos de la infraestructura TI Se tendrán en cuenta definiciones claves sobre el diseño y la implementación del centro de datos alusivo a la infraestructura, la cual deberá ser creada con las consideraciones de diseño de cada cliente. Aprenderá cómo es el funcionamiento del centro de datos, características, normas y estándares con los que podrá seleccionar las conexiones y componentes según su criterio y marcos de referencia ya conocidos; de esta forma, realizará un análisis de medición de riesgos para cumplir con las características del servicio TI.

    .row.justify-content-between.mb-4
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/intro/img01.svg")
      .col-lg-8(data-aos="fade-left")
        .cajon.color-primario.p-4
          p.mb-0 Se desarrollará la capacidad de establecer las conexiones y componentes según las especificaciones técnicas y los marcos de referencia, ejemplificando la parte de infraestructura tecnológica con respecto a la seguridad, con modelos, estándares y normativa que serán implementados para el diseño del centro de datos en función de la infraestructura requerida. Se finalizará con la cuantificación de los riesgos para cumplir con las características del servicio TI, reconociendo las variaciones de ejecución del centro de datos y con base en el desarrollo del proceso.
    
    .h5.mb-5 A continuación, encontrará un video introductorio donde se amplía la información acerca de las temáticas a desarrollar en el transcurso de todo el componente formativo:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
