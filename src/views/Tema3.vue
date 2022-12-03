<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 3
      h1 Cadena de custodia
    
    .BGM06.p-md-5.p-4
      .h4 Conceptos, usos y las tendencias del ecosistema tecnológicos
      p Se asocia a un sistema de control y registro de todo el material utilizado como evidencia de alguna actividad que se considere delictiva. Por ejemplo, la ubicación: en caso de hacer algo incorrecto, existe la cadena de custodia que delata todas las pruebas que confirman la acción mal realizada. Se conocen cinco pasos principales que definen la cadena de custodia.

      .row.justify-content-center.mb-5
        .col-lg-10
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.jpg')})`}"
            )(data-aos="fade-right")
            .bloque-texto-g__texto.p-4(data-aos="fade-left")
              p El proceso de cadena de custodia es uno de los más relevantes en la tecnología ya que es cuando se deben identificar las diferentes responsabilidades y medidas de control relacionadas con el personal que tiene contacto con las evidencias. 
              p Para dar cumplimiento hay que redactar un documento donde se indiquen los datos personales completos de todos los involucrados en la manipulación de las copias, desde el momento en que hayan sido creadas a partir de la evidencia, hasta el momento de almacenamiento.
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-lg-0.p-4.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema3/img02.svg")
        .col-lg-8(data-aos="fade-left")
          p.mb-0 Dicho documento debe contener información del cómo, el cuándo, el dónde y el quién tuvo contacto con la evidencia, también sus nombres completos, su cargo, las fechas y horas exactas; en efecto se debe también tener en cuenta registrar los datos de la persona que tuvo bajo custodia la evidencia, el tiempo que esta estuvo bajo su poder y dónde fue guardada. Para tener un consecutivo de trayectoria también es importante que al momento de cambiar de custodio se debe registrar cuándo y cómo se produjo el intercambio, así como los datos de la persona que transportó la evidencia. Todos estos paso a paso son muy importantes y por esta razón debe existir registro completo de toda la actividad.

      .row.justify-content-center.mb-4
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p Por último, la cadena de custodia no es más que mantener y preservar la integridad lógica y física de una posible prueba o evidencia. Esta metodología se debe llevar a cabo desde el mismo instante de la recopilación o registro, su almacenamiento, transporte y análisis hasta culminar con su entrega a las entidades judiciales o a quien corresponda. Es importante tener en cuenta que, en la mayoría de los casos, para que la cadena de custodia sea tomada como válida es necesario que un perito o alguna entidad judicial o del estado certifique que el proceso de custodia se ha llevado de manera correcta. 
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema3/img03.png")

</template>

<script>
export default {
  name: 'Tema3',
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
