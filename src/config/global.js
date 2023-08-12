export default {
  global: {
    componenteFormativo: 'Estándares y normas asociados a infraestructura TI',
    descripcionCurso:
      'En esta área se conforman los parámetros y normas que complementan todos los dispositivos que se describen en la infraestructura tecnológica TI teniendo en cuenta el plan de contingencia que describe el diseño y uso para los centros de datos, como utilizar las características de la computación en la nube y la gestión de redes y computadores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión del riesgo informático',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Indicadores y métricas de calidad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Manuales y procedimientos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Políticas y normativas',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plan de Contingencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cadena de custodia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Gestión de redes de computadoras y recursos tecnológicos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción a las redes de datos ',
      referencia: '(S/a-a). Com.ar. Recuperado el22 de octubre de 2022, de',
      tipo: 'Manual',
      link: 'https://docer.com.ar/doc/s0s0n50',
    },
    {
      tema: 'Conceptos de redes de computadoras',
      referencia: '(S/a-b). Com.ar. Recuperado el 22 de octubre de 2022, de',
      tipo: 'Artículo',
      link: 'https://docer.com.ar/doc/s0s0n1c',
    },
    {
      tema:
        'Introducción a la informática <em>hardware</em> y <em>software</em>',
      referencia: '(S/a-c). Edu.ar. Recuperado el 18de agosto de 2022, de',
      tipo: 'Manual',
      link:
        'https://economicas.unsa.edu.ar/sigeco/archivos/semi_material/U1-DT-IntroduccionalaInformatica.pdf',
    },
    {
      tema: 'Documento - versión actualizada del modelo de gestión it4+',
      referencia: '(S/a-d). Gov.co. Recuperado el 18 de agosto de 2022, de',
      tipo: 'Manual',
      link:
        'https://www.mintic.gov.co/arquitecturati/630/propertyvalues-8170_documento_pdf.pdf',
    },
    {
      tema: 'Data Center una mirada por dentro',
      referencia:
        '(S/a-e). Researchgate.net. Recuperado el 18 de agosto de 2022, de',
      tipo: 'Manual',
      link:
        'https://www.researchgate.net/publication/282611136_DATACENTER_-_UNA_MIRADA_POR_DENTRO',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'cualquier información o elemento relacionado con el tratamiento de la misma (sistemas, soportes, edificios, personas, etc.), que tenga valor para la organización.',
    },
    {
      termino: 'Activo de Información',
      significado:
        'recurso o elemento que contiene información con valor para la organización debido a su utilización en algún proceso, o que tiene relación directa o indirecta con las funciones de la entidad: software, hardware, personas (roles), físicos (instalaciones, áreas de almacenamiento de expedientes, centros de procesamiento de datos), intangibles (imagen y reputación).',
    },
    {
      termino: 'Amenaza',
      significado:
        ' causa potencial de un incidente no deseado que pueda provocar daños a un sistema o a la organización.',
    },
    {
      termino: 'Contingencia',
      significado: 'se asocia a la posibilidad de que una acción suceda o no.',
    },
    {
      termino: '<em>Data center</em>',
      significado:
        'centro de proceso de información. Lugar físico donde se guardan los datos e información relevante.',
    },
    {
      termino: 'DNS',
      significado: 'sistema de nombre de dominios.',
    },
    {
      termino: '<em>Firewalls</em>',
      significado: 'sistema diseñado para proteger redes privadas.',
    },
    {
      termino: 'LAN',
      significado: 'red de área local.',
    },
    {
      termino: '<em>Racks</em>',
      significado:
        'soportes metálicos para guardar y almacenar centros de información.',
    },
    {
      termino: 'RRHH',
      significado: 'recursos humanos.',
    },
    {
      termino: 'Salvaguardar',
      significado: 'proteger algo que requiera protección.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cloudflare. (s.f.). <em>Cloudflare.com</em>. Recuperado el 8 de octubre de 2022, de',
      link:
        'https://www.cloudflare.com/learning/network-layer/what-is-routing/',
    },
    {
      referencia:
        'Función Pública. (marzo de 2020). <em>Funcionpublica.gov.co</em>. Recuperado el 21 de octubre de 2022, de',
      link:
        'https://www.funcionpublica.gov.co/documents/418537/36701283/politica-de-seguridad-de-la-informacion.pdf.pdf/325019e5-a92f-0b44-3676-2356bd71240c?t=1586355315672',
    },
    {
      referencia:
        'Importancia de la gestión de riesgos informáticos. (2019, agosto 26). Hacknoid.',
      link:
        'https://www.hacknoid.com/hacknoid/importancia-de-la-gestion-de-riesgos-informaticos/',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). <em>Manual de seguridad informática</em>. Bogotá, Colombia. Recuperado el 29 de octubre de 2022, de',
      link:
        'https://www.mineducacion.gov.co/1759/articles-322548_Manual_de_Seguridad_Informatica_.pdf',
    },
    {
      referencia:
        'Ramírez Riveros , D. A., & Castro Serrato, E. F. (2018). Recuperado el 22 de octubre de 2022, de ',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/17370/86078250.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Suscriptor. (2022, mayo 13). <em>Indicadores más útiles para un sistema de gestión de seguridad de la información</em>. Software ISO.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
