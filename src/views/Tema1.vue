<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión del riesgo informático
    
    p Esta área es una organización, por decirlo así, que tiene como objetivo general fortalecer y construir bases muy sólidas para dar cumplimiento a la misión salvaguardando todo activo informático y, sobre todo, la información. Actualmente las empresas deben realizar procesos de adquisición de datos empleando nuevas tecnologías como apoyo en cada una de sus misiones, por esta razón es importante realizar una buena gestión con el objetivo de protegerla de posibles amenazas.
    .h5.mb-5 Revisemos a continuación en qué consiste gestionar detalladamente los riesgos en informática y por qué debe existir una buena práctica de ella en todo orden de negocios.

    .row.justify-content-between.mb-4
      .col-lg-3.col-6.mb-lg-0.p-4.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img01.svg")
      .col-lg-9(data-aos="fade-left")
        p Un riesgo en informática es identificar la gran importancia de gestionarlo para que a futuro se eviten inconvenientes o problemas con los usuarios que incluso terminen en procesos legales. 
        p Cuando se realizan estas actividades siempre será más asequible desde la visión de un grupo de colaboradores con conocimiento y expertos; sin embargo, hay ciertas metodologías para prevenir daños en informática que todo responsable del área encargada debe conocer. 
        p.mb-0 A continuación, se explican:
      
    .row.justify-content-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR01S")
          div(titulo="Diseñar controles de seguridad")
            p.mb-0 Una plataforma informática con controles de seguridad a la medida de la empresa siempre permitirá que se anticipe a los problemas de forma oportuna y efectiva para evitar daños.
          div(titulo="Pruebas de seguridad")
            p.mb-0 La esencia de la prevención de riesgos informáticos siempre comienza desde la ejecución de pruebas de seguridad para confirmar si están realizando algún daño. Es recomendable hacer con frecuencia cada una de estas pruebas, preferiblemente programadas en el calendario a fin de organizar la información.
          div(titulo="Gestión de los incidentes")
            p.mb-0 Es importante mantener un historial con cada uno de los riesgos identificados y gestionar estos datos para ser capaces de reaccionar a tiempo y evitar problemas similares a futuro debido a que algunos archivos son afectados desde su raíz.
          div(titulo="Detección y clasificación de vulnerabilidades")
            p.mb-0 Viéndolo desde un punto más allá, la gestión de seguridad TI, debe ser capaz de detectar y clasificar cada una de las vulnerabilidades a que se expone el sistema de la empresa para reaccionar rápido ante cualquier calamidad. Existen herramientas informáticas capaces de escanear estos riesgos en tiempo real y continuo, entregando reportes constantemente y creando un historial de fallos para identificar la causa que los ocasiona.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img02.svg")

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Niveles y características

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4
          p La gestión del riesgo en la seguridad puede ser dinámica, al serlo permite conocer el estado actual y especificar cada interacción en detalle.
          p.mb-0 La eficacia del tratamiento del riesgo depende de los resultados de su valoración. Con el paso del tiempo se puede notar que el tratamiento sobre el riesgo no se genera de forma inmediata y el usuario puede no estar conforme con la acción; sin embargo, la constancia de proteger y realizar a diario la actividad hará que mejore con el uso si se realizan cambios en los parámetros del contexto; por ejemplo: criterios para la valoración del riesgo, de aceptación o de impacto.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4.p-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img03.png")
    
    p.mb-5 Dentro de la actividad de protección de la información se denota que cuando se realiza la tarea de tratar la seguridad de la información cada movimiento debe estar avalado por la parte directiva, que es la que tiene acceso directo a toda esta información. Esto es especialmente importante en una situación en la que, por costos, la implementación de los controles se omite o se pospone.
    .h5.mb-5 Los niveles de la gestión del riesgo se miden en:

    .BGR01.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-center
        .col-lg-10
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img04.svg')
            .tarjeta.color-acento-contenido.p-3(x="21.5%" y="47%" numero="1")
              .h5.mb-2 Planear
              p.mb-0 Para establecer contexto de lo que se desea proteger realizando una valoración del riesgo al que se expone toda la información. La acción está encaminada a la planificación y aceptación sobre el peligro que se genera en el momento en que la información es subida a la internet.
            .tarjeta.color-acento-contenido.p-3(x="48.5%" y="5%" numero="2")
              .h5.mb-2 Implementar
              p.mb-0 Se utiliza para realizar la implementación del plan diseñado en el tratamiento de riesgo.
            .tarjeta.color-acento-contenido.p-3(x="61.5%" y="45%" numero="3")
              .h5.mb-2 Gestionar
              p.mb-0 En este nivel se debe realizar un monitoreo y la revisión continua de todos los riesgos.
            .tarjeta.color-acento-contenido.p-3(x="81%" y="50%" numero="4")
              .h5.mb-2 Mejora continua
              p.mb-0 Al momento de salvaguardar la información y cuidar los datos nunca será un método o modelo suficiente para mantenerse de una manera estática debido a las posibles amenazas que existen y la vulnerabilidad del proceso de gestión del riesgo en la seguridad de la información (Suscriptor, 2022).

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Indicadores y métricas de calidad
    
    .row.justify-content-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Cuando es implementado un Sistema de Gestión de Seguridad de la Información (SGSI) y se gestionan unos indicadores se pueden medir planes, presupuestos, programas, personas, procesos, incluso prácticas de negocios, productos, servicios, ventas, proveedores y clientes.
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Un indicador es una medida que permite una estimación o una evaluación de determinados atributos mediante un modelo analítico, y una metodología para satisfacer ciertas necesidades de información.
        .h5 Los indicadores se pueden clasificar en:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img05.svg")

    .BGR01.p-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-4.hr-right-a.px-4.mb-lg-0.mb-4(data-aos="fade-right")
          .row.justify-content-center.mb-5
            .col-4
              img(src="@/assets/curso/tema1/img06.svg")
          .h4 Preindicadores
          p.mb-0 Son conocidos porque se identifican antes de que ocurran los hechos. Un ejemplo serían las tendencias económicas o conocer el resultado de un reinado de belleza, entre otros.
        .col-lg-4.hr-right-a.px-4.mb-lg-0.mb-4(data-aos="flip-up")
          .row.justify-content-center.mb-4
            .col-lg-6.col-4
              img(src="@/assets/curso/tema1/img07.svg")
          .h4.mt-4 Indicadores terminales
          p.mb-0 Solo son utilizados después de terminados los hechos, por lo que tienen menos utilidad. Como la fecha de término de un proyecto o el índice de rotación del personal.
        .col-lg-4.px-4.mb-5(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-lg-7.col-4
              img(src="@/assets/curso/tema1/img08.svg")
          .h4 Indicadores concurrentes
          p.mb-0 Se utilizan porque establecen por adelantado un evento, pero que evolucionan mientras transcurre la acción. Por ejemplo, producción por días de trabajo.
        .col-lg-9.BG02.p-4
          p.mb-0 Se puede concluir que existen indicadores como medidas de riesgo (KRI), medidas de desempeño (#[em Key Performance Indicator] o KPI) y medidas de control (#[em Key Control Indicator] o KCI).

    .h5.mb-5 Descripción sobre cómo deberían ser los indicadores eficaces:

    .row.justify-content-center.mb-5
      .col-xl-5.col-md-6.col-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img09.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR03A.p-4
            p.ms-5.mb-0 1. Solo se debe medir lo que es importante.
      .col-xl-5.col-md-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR03A.p-4
            p.ms-5.mb-0 2. No crear demasiados, pues podría ser contraproducente.
      .col-xl-5.col-md-6.col-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR03A.p-4
            p.ms-5.mb-0 3. Tener en cuenta que no hay un indicador protagonista, todos son importantes.
      .col-xl-5.col-md-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR03A.p-4
            p.ms-5.mb-0 4. Los indicadores deben propiciar un entorno de mejora continua y estar vinculados a los objetivos del SGSI.
      .col-xl-5.col-md-6.col-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR03A.p-4
            p.ms-5.mb-0 5. No olvidar interpretarlos.
      .col-xl-5.col-md-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR03A.p-4
            p.ms-5.mb-0 6. Los indicadores deben englobar procesos importantes o críticos. También tienen que ser fáciles de mantener y utilizar.
      .col-xl-5.col-md-6.col-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR03A.p-4
            p.ms-5.mb-0 7. Deben ser compatibles con el resto de los indicadores.
      .col-xl-5.col-md-6.col-10(data-aos="fade-left")
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img16.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR03A.p-4
            p.ms-5.mb-0 8. Los indicadores deben permitir conocer la situación en tiempo real.

    .row.justify-content-center.mb-5
      .col-lg-10.BGR04.p-4(data-aos="flip-up")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/img17.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.text-white.mb-2 Indicadores
                p.text-white.mb-0 En el siguiente documento se explican al detalle los indicadores sobre la gestión del riesgo informático:
              .col-sm-auto
                a.boton.color-acento-contenido(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
    
    .row.justify-content-center.mb-4
      .col-lg-3.col-6.mb-lg-0.p-4.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img18.svg")
      .col-lg-9(data-aos="fade-left")
        .cajon-b.color-acento-contenido.p-3
          p Cuidar la información es importante porque esta es el mayor activo de una empresa; por lo tanto se deben tener mecanismos óptimos para asegurarla y tener indicadores de gestión que permitan minimizar el riesgo de seguridad y a la vez ganar confianza ante los clientes, lo que se traducirá en más clientes y mayores ingresos para la empresa.
          p.mb-0 Cuando se garantiza una óptima gestión de los indicadores, su cálculo y alimentación, es de gran ayuda un #[em software] de gestión de la seguridad de la información que permita en todo momento mantener un control total de todo lo <span style="background-color: #FFF2CA; padding: 5px">relacionado para evitar posibles</span> catástrofes (Suscriptor, 2022).

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Manuales y procedimientos
    
    .row.justify-content-center.mb-4
      .col-lg-3.col-6.mb-lg-0.p-4.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img19.svg")
      .col-lg-9(data-aos="fade-left")
        .h4 Lineamientos del manual de seguridad informática
        p.mb-0 Los presentes lineamientos se dictan con el objeto gestionar adecuadamente la tecnología, los sistemas informáticos y el ambiente tecnológico del Ministerio de Educación Nacional (MEN).

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="BGR01")
          div(titulo="Del buen uso y de los activos tecnológicos")
            ol.lista-ol--cuadro.mb-2
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span a
                | Los activos tecnológicos definidos y entregados por la OTSI son: 
              li
                ul.lista-ul.ms-5
                  li(style="margin-bottom:2px")
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | Los PC de escritorio y portátiles. 
                  li(style="margin-bottom:2px") 
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | Impresoras. 
                  li(style="margin-bottom:2px") 
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | Escáner. 
                  li(style="margin-bottom:2px")
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | Teléfonos celulares. 
                  li(style="margin-bottom:2px") 
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | Carteleras digitales. 
            p.ms-5 Toda esta propiedad del MEN.
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span b
                | La OTSI asignará a los colaboradores y a las áreas de acuerdo con la necesidad los activos informáticos necesarios para uso de sus funciones y estos serán los únicos responsables de su utilización, así como también de la información contenida en los mismos, por lo que debe evitar compartirlos. En caso de requerir compartirlo o prestar el activo informático, será́ solamente para cuestiones laborales y sin liberarlo de su responsabilidad. 
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span c
                p.mb-0 Los PC de escritorio y portátiles se encuentran configurados con el #[em hardware] y el #[em software] básicos necesarios para su funcionamiento y cumplimiento de las funciones. 
              li
                ul.lista-ul.ms-5
                  li(style="margin-bottom:2px") 
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | Sistema operativo: Windows, IOS o Linux. 
                  li(style="margin-bottom:2px") 
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | Ofimática: Office 365 (Access, Excel, OneNote, One Drive, Outlook, Power Point, Publisher, Word.).
                  li(style="margin-bottom:2px") 
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | CA 
                  li(style="margin-bottom:2px") 
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | ISE 
                  li(style="margin-bottom:2px") 
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | Descomprimir archivos: Winrar. 
                  li(style="margin-bottom:2px") 
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | Antivirus 
                  li(style="margin-bottom:2px") 
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | Chat: Skype empresarial o Lync. 
                  li(style="margin-bottom:2px") 
                    i.fas.fa-circle(style="color: #4DD0E1; font-size: xx-small")
                    | Videoconferencias: Webex.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span d
                | Toda movilización del activo informático dentro o fuera de las instalaciones de la entidad es responsabilidad del colaborador asignado a este. 
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span e
                | Cuando exista algún incidente (robo, extravío, daño físico, etc.) que afecte de manera directa un activo informativo del MEN deberá ser notificado de inmediato a la OTSI mediante la Mesa de Ayuda de Tecnología para que esta informe las acciones a tomar. 
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span f
                |  Solo el personal de la Mesa de Ayuda de Tecnología está autorizado a realizar reparaciones, cambios, desarme de los activos informáticos del MEN. 
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span g
                | La OTSI realizará periódicamente actualizaciones a los sistemas operativos, parches de seguridad, antivirus y de las aplicaciones instaladas en los PC de escritorio y portátiles de los colaboradores del MEN.  
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span h
                | Todos los activos tecnológicos propiedad del MEN deberán estar incluidos en el dominio mineducacion.gov.co y aplicar las políticas de seguridad definidas por la OTSI, tales como: un fondo de pantalla definido por el Área de Comunicaciones, acceso al activo tecnológico de acuerdo con su perfil, bloqueo a las propiedades del sistema operativos, entre otros. Todo activo tecnológico que no se encuentre dentro del dominio o no cuente con las políticas de seguridad definidas por la OTSI será solicitado al colaborador por medio de los funcionarios de la Mesa de Ayuda de Tecnología donde estos efectuarán las configuraciones necesarias para cumplir los lineamientos. De negarse el colaborador a entregar el activo tecnológico se informará al jefe inmediato para que este tome las acciones pertinentes o comunique a la OTSI el porqué de la necesidad de que el activo tecnológico se encuentre por fuera del dominio del MEN.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span i
                p.mb-0 Los colaboradores con activos tecnológicos no deben cambiar o eliminar la configuración del #[em software] de antivirus, antispyware, antimalware, antispam que defina por la Oficina de Tecnología y Sistemas de Información; por consiguiente, únicamente podrán realizar tareas de escaneo de virus en diferentes medios.
          div(titulo="Del internet")
            ol.lista-ol--cuadro.mb-2
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span a
                | La OTSI provee el servicio de internet a todos los colaboradores del MEN para adelantar exclusivamente las funciones asignadas a su cargo y con uso austero y eficiente.  
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span b
                |  Abstenerse de publicar Información relevante al MEN independiente de su formato (Word, Excel, Power Point, PDF, avi, mp3, mp4 o cualquier otro formato actual o futuro) o su nivel de clasificación de confidencialidad en sitios de internet no licenciados por el MEN en los denominados discos, nubes, carpetas virtuales o cualquier sistema de publicación de documentos actual o futura dentro o fuera de la entidad.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span c
                |  Abstenerse de utilizar aplicaciones que permitan evadir los controles implementados por el MEN.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span d
                |  El acceso a páginas web con contenido inapropiado se encuentra restringido. Sin embargo, y si por la naturaleza del cargo se requiere el acceso a páginas de acceso controlado, se debe solicitar a la Mesa de Ayuda su acceso adjuntando la aprobación y justificación por parte del jefe inmediato.
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span e
                |  Abstenerse de descargar imágenes, sonidos, música y videos, a su vez descargar archivos o instalar programas de sitios web desconocidos o gratuitos. 
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span f
                |  La OTSI se reserva el derecho a bloquear sitios que se detecten como peligrosos (con contenidos no autorizados) para la seguridad de los activos informáticos.”
              li 
                .lista-ol--cuadro__vineta(style="background-color: #4DD0E1")
                  span g
                |  Cada colaborador es responsable del adecuado manejo de los usuarios de autenticación y contraseña a la hora de ingresar a los diferentes sistemas de información que consulte en internet (Ministerio de Educación Nacional, s/f).
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img20.svg")
    
    .row.justify-content-center.mb-5
      .col-lg-10.BGR04.p-4(data-aos="flip-up")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/img24.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.text-white.mb-2 Información descriptiva del manual de seguridad
                p.text-white.mb-0 Para continuar conociendo la información descriptiva del manual de seguridad se debe revisar el siguiente enlace
              .col-sm-auto
                a.boton.color-acento-contenido(href="https://www.mineducacion.gov.co/1759/articles-322548_Manual_de_Seguridad_Informatica_.pdf" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Políticas y normativas
    
    .row.justify-content-center.mb-5
      .col-lg-9.mb-4
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img21.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 Las políticas de seguridad informática serán aplicadas para las personas que trabajen en entidades públicas o privadas. En el caso del servicio público incluye a todo servidor, pasante y contratista que haga parte del Estado. Para ello se manejan todos los datos inherentes a las organizaciones, incluyendo información de entidades relacionadas con las actividades de recopilación de información, análisis, procesamiento, custodia, recuperación.
      .col-lg-10
        .cajon-b.color-acento-botones.p-3
          p.mb-0 Es importante recordar la existencia de unas políticas de seguridad sobre la información para analizar, que se actualizan cada año y garantizan a cada una de las personas que hacen parte de la organización en las que existen, unas pertinencias y durabilidad a la hora de hacer cumplir todas las características y componentes institucionales. También se revisan otras situaciones que se presentan, tales como: cambios culturales, organizacionales, de la parte interna o externa; se incluyen también esos cambios normativos u operativos que lleguen a darse en momentos en que surjan afectaciones en la seguridad de la información de la empresa. Dentro de la normativa se implementan lineamientos, controles o procedimientos determinados con cada detalle técnico cada operación.

    .BGR05.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-3.col-6(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img22.svg")
        .col-lg-6(data-aos="fade-left")
          .titulo-segundo.color-primario(data-aos="fade-right")
            h4 Marco normativo
          p A continuación, se referencian las normas y leyes colombianas que se aplican en el ámbito de seguridad de la información; si alguna de las normas descritas llega a perder validez o fuerza obligatoria, sin importar la razón, las demás disposiciones se van a conservar.
          .row.justify-content-between
            .col-sm-auto
              a.boton.color-acento-contenido(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .h5 Responsabilidad por contravención de la política de seguridad
    p El incumplimiento de las políticas de seguridad de la información descritas en este documento se trata de acuerdo con la naturaleza del incidente. Los resultados de su tratamiento e investigación se producirán una vez los responsables de los trámites institucionales evalúen la necesidad de adelantar procesos disciplinarios o legales si se presentan inconvenientes que se relacionan con la seguridad de la información y los delitos que se comenten en la internet y están asociados a la normatividad vigente.

    .row.justify-content-center.mb-5
      .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
        .bloque-texto-d.color-acento-botones.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="font-size: 2em; color: #FD9927;")
            p Los servidores públicos del Departamento Administrativo de Función Pública que generen algún incidente de seguridad de la información por realizar acciones que contravengan o incumplan alguna de las disposiciones descritas en el presente documento, serán reportados por correo electrónico al Jefe inmediato, al Jefe de la Oficina Asesora de Planeación, al Coordinador del Grupo de Gestión Humana y Jefe de la Oficina de Control Interno, para la revisión del caso y la adopción de las medidas respectivas de acuerdo con las políticas aplicables en la entidad. Respecto a los contratistas y pasantes, estos serán reportados al supervisor del contrato y al director(a), subdirector(a) y jefe de Área, para la revisión del caso y tomar las medidas respectivas [sic]
            
          .bloque-texto-d__autor 
            .h5.mb-0 Función pública, 2020 
              i.fas.fa-quote-right(style="font-size: 2em; color: #FD9927;")
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img23.svg")

</template>

<script>
export default {
  name: 'Tema1',
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
