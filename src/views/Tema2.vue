<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 2
      h1 Plan de contingencia
    
    .BGIMG01.p-md-5.p-4
      .row.justify-content-center.mb-5
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p Se refiere a la metodología o los pasos que se deben seguir cuando se detecta una falla en el desarrollo normal del sistema de información de una empresa. El funcionario debe informar a su jefe de área para que a su vez este corrobore con el líder de la oficina de sistemas las posibles fallas presentadas, así se determinará que en efecto se trata de una falla informática y no de una falsa alarma. 
          p El área de trabajo de la oficina de sistemas evaluará y realizará un dictamen sobre si el daño se presenta en una parte o en la totalidad de la red e informará a los jefes de cada zona, centro y/o líderes de los procesos afectados para que comiencen el uso de los procedimientos y formatos manuales que se describen en las políticas privadas de cada organización y con base en la naturaleza de la tarea que se desarrolle. 
          p.mb-0 En caso de un siniestro, un desastre natural o de la pérdida total de comunicación, los coordinadores de centro o líderes de proceso tienen la autonomía para definir en qué momento se deben comenzar a utilizar los procedimientos y formatos manuales en pro de recuperar y salvaguardar la información que aún no haya sido afectada, en aras de empezar el proceso de recuperación de aquella en la que se han generado daños.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img01.png")
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6.mb-lg-0.p-4.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img02.svg")
      .col-lg-9(data-aos="fade-left")
        p Para concluir, se dice que el plan de contingencia es un documento formal que reúne un conjunto de procedimientos alternativos para facilitar el normal funcionamiento de las Tecnologías de Información y de Comunicaciones (TIC) cuando alguno de sus servicios se ha afectado negativamente por causa de algún incidente interno o externo en la organización.
        p Este plan permite reaccionar sobre las posibles consecuencias en caso de incidente con el fin de reanudar las operaciones en el menor tiempo posible de forma eficiente y oportuna.
        p.mb-0 Así mismo, establecen las acciones a realizar en las siguientes etapas: 
      
    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        figure.mb-4
          img(src="@/assets/curso/tema2/img03.svg")
        .h4 Antes
        p.mb-0 Como un plan de prevención para mitigar los incidentes.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        figure.mb-4
          img(src="@/assets/curso/tema2/img04.svg")
        .h4 Durante
        p.mb-0 Como un plan de emergencia y/o ejecución en el momento de presentarse el incidente.
      .col-lg-4.col-8(data-aos="flip-up")
        figure.mb-4
          img(src="@/assets/curso/tema2/img05.svg")
        .h4 Después
        p.mb-0 Como un plan de recuperación una vez superado el incidente para regresar al estado previo a la contingencia.

</template>

<script>
export default {
  name: 'Tema2',
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
