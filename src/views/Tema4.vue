<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión de redes de computadores y recursos de tecnológicos

    p  A continuación, encontrará un video donde se podrá profundizar en la temática:    
    h4.mb-5 Tipos de respaldo de información

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p Cuando se presenta un tercer movimiento u operación de respaldo, aquella información que se copia de forma incremental limitará esos cambios realizados en el último respaldo incremental. Sin embargo, cuando se presenta el tercer #[em backup], donde está ese respaldo diferencial, siempre se copiará con referencia al primer #[em backup].

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.p-4.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img01.svg")
      .col-lg-8(data-aos="fade-left")
        p En conclusión, la tecnología día a día brinda mayores soluciones a las necesidades de cada persona, siendo parte de las actividades cotidianas y, principalmente, de nuestro trabajo. Desde que se produjo la pandemia, el cambio a los trabajos remotos aumentó de manera exponencial, por esa razón las redes tecnológicas están siempre renovando y actualizando su portafolio para brindar un mejor servicio a sus clientes.
        p Tener el control de la información permite operar y gestionar los entornos TI empresariales, incluidos todos los elementos de red, #[em software], #[em hardware] y, en especial, el almacenamiento de datos; así se ofrecen al cliente servicios y soluciones con alternativa tecnológica, que se ajustan a los parámetros y estándares basados en las normas que conforman los dispositivos y que utilizan plataformas y entornos que ayudan a la gestión de los datos obtenidos.
        p.mb-0 La simplicidad es la clave de un ecosistema de TI más seguro y eficiente cuando se implementa una infraestructura basada en las tecnologías de fácil acceso y comunicación con la empresa y el cliente.

    p Con estos métodos se garantizan mayor efectividad y rapidez al obtener la información y se consolida un apoyo en torno a las organizaciones al velar por sus intereses con un sistema automatizado que permita confiar cuando se deba subir información y se necesite tener retroalimentación efectiva para la utilización de los datos.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-acento-botones.p-4(data-aos="flip-up")
          p.mb-0 Estimado aprendiz, ha culminado satisfactoriamente el estudio de este componente, lo invitamos a que revise el material complementario y a realizar la actividad didáctica para que afiance sus conocimientos frente a los contenidos vistos.
      
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
