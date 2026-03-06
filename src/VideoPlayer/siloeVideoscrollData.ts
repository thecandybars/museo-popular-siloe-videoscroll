// endContentTop y endContentBottom permiten agregar contenido al final del videoScroll.
// Puede ser un video o una foto.
// type:video recibe un src de video y lo muestra
// type:photo recibe un src de una array que contenga fotos en formato jpg o png y las muestra en un carrusel

import type { SceneRecord } from "../types";

export const siloeVideoscrollData: SceneRecord = {
  A01: {
    src: "/lugares/siloe/video/A01-pr.mp4",
    title: "Patoneando la memoria desde el Museo Popular de Siloé",
    speed: 800,
    type: "scroll",
    endContentTitle: "Monumento de los Diablitos de Siloé",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaA01.mp4",
      title: "Mapi sobre la escuela y el patrimonio cultural de los diablitos",
    },
    endContentBottom: {
      title: "¡Viva el carnaval de los diablitos en Siloé!",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaA01",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "right",
            title: "Al cementerio San Jose De Siloé",
            href: "/A02",
          },
        ],
      },
    ],
    map: {
      //https://www.google.com/maps/dir/Museo+POPULAR+DE+SILO%C3%89/Monumento+a+los+Diablitos+de+Silo%C3%A9/@3.4156506,-76.5598752,19.68z/data=!4m14!4m13!1m5!1m1!1s0x8e30a41a97fb7c93:0xd581f9cebc92d5ff!2m2!1d-76.5595526!2d3.4156271!1m5!1m1!1s0x8e30a500264a0f7b:0x33054b5fe7589258!2m2!1d-76.5595672!2d3.4158412!3e2?authuser=1&entry=tts&g_ep=EgoyMDI0MTIwOS4wKgBIAVAD
      points: [
        [3.415639782444439, -76.5595491937936],
        [3.4158092385595995, -76.5596076496516],
        [3.4159210218325806, -76.55956272265072],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/A01.mp3",
    },
  },
  A02: {
    src: "/lugares/siloe/video/A02-pr.mp4",
    title: "Caminamos al cementerio San José",
    speed: 800,
    type: "scroll",
    // endContentTop: {
    //   type: "video",
    //   src: "/lugares/siloe/video/paradas/paradaA02.mp4",
    // },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Entrar al Cementerio San Jose De Siloé",
            href: "/A03",
          },
        ],
      },
    ],
    map: {
      //https://www.google.com/maps/dir/Monumento+a+los+Diablitos+de+Silo%C3%A9/3.4154692,-76.559442/3.4154793,-76.558937/@3.4154461,-76.5590266,21z/data=!4m10!4m9!1m5!1m1!1s0x8e30a500264a0f7b:0x33054b5fe7589258!2m2!1d-76.5595672!2d3.4158412!1m0!1m0!3e2?authuser=1&entry=tts&g_ep=EgoyMDI0MTIwOS4wKgBIAVAD
      points: [
        [3.415808, -76.55959],
        [3.4154692, -76.559442],
        [3.4154793, -76.558937],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/A02.mp3",
    },
  },
  A03: {
    src: "/lugares/siloe/video/A03.mp4",
    title: "Andrés y el estallido social de 2021",
    speed: 800,
    type: "scroll",
    endContentTitle:
      "En memoria de Angelvis Gregorio Bello Pérez, venezolano que asesinaron en el estallido social 2021",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaA03.mp4",
      title: "Andrés recuerda a su compañero durante el estallido social",
    },
    endContentBottom: {
      title: "Una comunidad lucha contra el olvido",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaA03",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "down",
            title: "Mural del cementerio San Jose De Siloé",
            href: "/A04",
          },
        ],
      },
    ],
    map: {
      // https://www.google.com/maps/dir/3.4154672,-76.5588983/3.4151644,-76.5585132/@3.4154339,-76.5588865,280m/data=!3m1!1e3!4m2!4m1!3e2?authuser=1&entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D
      points: [
        [3.4154606744482896, -76.55889320552254],
        [3.415002831279694, -76.55885565459644],
        [3.415018895955968, -76.55854988276963],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/A03.mp3",
    },
  },
  A04: {
    src: "/lugares/siloe/video/A04.mp4",
    title: "Pasamos por el mural de memoria del cementerio",
    speed: 800,
    type: "scroll",
    endContentTitle:
      "Mural de memoria para las víctimas del estallido social 2021",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaA04.mp4",
      title:
        "David sobre la iniciativa contra el olvido de las víctimas del estallido social 2021",
    },
    endContentBottom: {
      type: "photo",
      src: "/lugares/siloe/fotos/paradaA04",
      title: "La Dignidad hace Memoria",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Por la Diagonal 51 hacia La Sorpresa",
            href: "/A05",
          },
        ],
      },
    ],
    map: {
      // https://www.google.com/maps/dir/3.4154524,-76.5588594/3.4157523,-76.5575424/@3.4157777,-76.5576269,19z/data=!4m2!4m1!3e2?authuser=1&entry=tts&g_ep=EgoyMDI0MTIwOS4wKgBIAVAD
      points: [
        [3.4154524, -76.5588594],
        [3.41555814957217, -76.55814322523632],
        [3.4157777, -76.5576269],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/A04.mp3",
    },
  },
  A05: {
    src: "/lugares/siloe/video/A05.mp4",
    title: "Pasamos por la calle comercial de Siloé",
    speed: 800,
    type: "scroll",
    endContentTitle: "Doña Blanca esperando justicia y verdad",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaA05.mp4",
      title:
        "Doña Blanca sobre la pérdida de su hijo y su resistencia con otros familiares",
    },
    endContentBottom: {
      title: "La lucha de doña Blanca y su familia en imágenes",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaA05",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Seguimos a la glorieta de Siloé",
            href: "/A07",
          },
        ],
      },
    ],
    map: {
      // https://www.google.com/maps/dir/3.415777,-76.5575073/3.416423,-76.5556297/@3.416228,-76.5568792,292m/data=!3m1!1e3!4m2!4m1!3e2?authuser=1&entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D
      points: [
        [3.4158448353714355, -76.5574256668608],
        [3.416470887114691, -76.555983184628],
        [3.416444056334062, -76.5556024051566],
        [3.416444056334062, -76.5556024051566],
        [3.4163173881221165, -76.55503914044168],
        [3.4164700023269217, -76.55540392086664],
        [3.416836811807613, -76.5553502766865],
        [3.416933199677094, -76.55517861531004],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/A05.mp3",
    },
  },
  A07: {
    src: "/lugares/siloe/video/A07.mp4",
    title: "Seguimos hacia la galería de Siloé",
    speed: 800,
    type: "scroll",
    endContentTitle: "Jenny sigue resisitiendo y espera justicia",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaA07.mp4",
      title: "Jenny sobre el asesinato de su hijo",
    },
    endContentBottom: {
      title:
        "Jenny en las actividades después de la masacre del 3 de mayo de 2021",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaA07",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Galería de Siloé",
            href: "/A08",
          },
        ],
      },
    ],
    map: {
      // https://www.google.com/maps/dir/3.4164637,-76.5553434/3.416295,-76.5549455/3.4164839,-76.5547773/3.4169031,-76.5546863/3.4168763,-76.554462/@3.416754,-76.5545664,20.55z/data=!4m2!4m1!3e2?authuser=1&entry=tts&g_ep=EgoyMDI0MTIwOS4wKgBIAVAD
      points: [
        [3.4164637, -76.5553434],
        [3.416295, -76.5549455],
        [3.4164839, -76.5547773],
        [3.4169031, -76.5546863],
        [3.4168763, -76.554462],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/A07.mp3",
    },
  },
  A08: {
    src: "/lugares/siloe/video/A08.mp4",
    title: "Entramos a la galería",
    speed: 800,
    type: "scroll",
    endContentTitle: "La vendedora doña Miriam resiste en la galería de Siloé",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaA08.mp4",
      title: "La hierbatera doña Miriam sobre su legado",
    },
    endContentBottom: {
      title: "Un patrimonio arquitectónico en imágenes",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaA08",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
      ],
      // description: "Descripcion del video",
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Glorieta 'Siloé resiste'",
            href: "/A09",
          },
        ],
      },
    ],
    map: {
      // https://www.google.com/maps/dir/3.4168257,-76.5544677/3.4164865,-76.5544977/Galer%C3%ADa+siloe/@3.4161529,-76.5542247,140m/data=!3m1!1e3!4m10!4m9!1m0!1m0!1m5!1m1!1s0x8e30a58a792d876d:0x38cea09cac50c5f9!2m2!1d-76.5538715!2d3.4162586!3e2?authuser=1&entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D
      points: [
        [3.4168257, -76.5544677],
        [3.4164865, -76.5544977],
        [3.4159200210709106, -76.55402135030211],
      ],
      zoom: 17,
    },
    audioBackground: {
      src: "/lugares/siloe/audio/A08.mp3",
    },
  },
  A09: {
    src: "/lugares/siloe/video/A09.mp4",
    title: "Seguimos a la glorieta de Siloé",
    speed: 800,
    type: "scroll",
    endContentTitle:
      "La historia del estallido social y el Tribunal Popular en Siloé",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaA09.mp4",
      title:
        "Ani y Steven sobre el paro nacional y la lucha por los derechos humanos en Siloé",
    },
    endContentBottom: {
      title: "El Tribunal Popular en Siloé - una comunidad se organiza",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaA09",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Incendio del Dollar City",
            href: "/A10",
          },
        ],
      },
    ],
    map: {
      // https://www.google.com/maps/dir/3.4161711,-76.5533613/3.4157655,-76.5534761/3.4159657,-76.5541933/3.416044,-76.5545/@3.4159585,-76.5544534,140m/data=!3m1!1e3!4m2!4m1!3e2?authuser=1&entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D
      points: [
        [3.4161711, -76.5533613],
        [3.4157655, -76.5534761],
        [3.4159657, -76.5541933],
        [3.416044, -76.5545],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/A09.mp3",
    },
  },
  A10: {
    src: "/lugares/siloe/video/A10.mp4",
    title: "Concemos el antiguo centro comercial quemado el 28 de mayo de 2021",
    speed: 800,
    type: "scroll",
    endContentTitle: "¡Prohibido olvidar esta tragedia!",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaA10.mp4",
      title:
        "David sobre los muertos quemados en el Dollar City durante el estallido social",
    },
    endContentBottom: {
      type: "photo",
      title: "Soñando con un centro cultural y de memoria",
      src: "/lugares/siloe/fotos/paradaA10",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.JPG",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Camino hacia el parque de la Horqueta",
            href: "/A11",
          },
        ],
      },
    ],
    map: {
      // https://www.google.com/maps/dir/3.4164956,-76.5544829/3.4174133,-76.5543538/3.4174791,-76.5541363/@3.417481,-76.5542113,140m/data=!3m1!1e3!4m2!4m1!3e2?authuser=1&entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D
      points: [
        [3.4164956, -76.5544829],
        [3.4174133, -76.5543538],
        [3.4174791, -76.5541363],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/A10.mp3",
    },
  },
  A11: {
    src: "/lugares/siloe/video/A11.mp4",
    title: "Seguimos al Parque de la Horqueta",
    speed: 800,
    type: "scroll",
    endContentTitle:
      "Un parque que reconstruye la comunidad en alianza con el empresariado",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaA11.mp4",
      title:
        "Héctor Fabio sobre el éxito de un parque para formación, cultura y recreación",
    },
    endContentBottom: {
      title: "La historia del parque",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaA11",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Hacia el parque de la Mina",
            href: "/B01",
          },
        ],
      },
    ],
    map: {
      // https://www.google.com/maps/dir/3.4174229,-76.5543406/3.4179701,-76.5541428/3.4180963,-76.5543439/Parque+Recreativo+La+Horqueta/3.4192981,-76.5541009/@3.4185472,-76.5542881,382m/data=!3m1!1e3!4m12!4m11!1m0!1m0!1m0!1m5!1m1!1s0x8e30a41c023b1e9f:0xa9b489265bcf5f1d!2m2!1d-76.5541897!2d3.4192766!1m0!3e2?authuser=1&entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D
      points: [
        [3.4174229, -76.5543406],
        [3.4179701, -76.5541428],
        [3.4180963, -76.5543439],
        [3.4192786772282293, -76.5541873342125],
        [3.4192981, -76.5541009],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/A11.mp3",
    },
  },
  B01: {
    src: "/lugares/siloe/video/B01.mp4",
    title: "Subimos a la loma de Siloé",
    speed: 800,
    type: "scroll",
    endContentTitle: "Las minas de carbón en Siloé",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB01b.mp4",
      title: "David sobre los mineros de Marmato, Caldas",
    },
    endContentBottom: {
      title: "Video antiguo de Minas de Siloé años 1960",
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB01a.mp4",
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Hacia el mural Yo amo a Siloé",
            href: "/B02",
          },
        ],
      },
    ],
    map: {
      //https://www.google.com/maps/dir/Parque+Recreativo+La+Horqueta/3.418929,-76.5553576/3.4192175,-76.5557616/3.4194441,-76.5558886/3.4199297,-76.5562838/3.4202773,-76.5559768/@3.4201775,-76.5569152,453m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0x8e30a41c023b1e9f:0xa9b489265bcf5f1d!2m2!1d-76.5541897!2d3.4192766!1m0!1m0!1m0!1m0!1m0!3e2?authuser=1&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D
      points: [
        [3.4192453751795866, -76.55426174247235],
        [3.4189401476287005, -76.55513077816491],
        [3.418929, -76.5553576],
        [3.4192175, -76.5557616],
        [3.4194441, -76.5558886],
        [3.4199297, -76.5562838],
        [3.4202773, -76.5559768],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B01.mp3",
    },
  },
  B02: {
    src: "/lugares/siloe/video/B02.mp4",
    title: "Hacia el mirador 'Yo amo a Siloé, y usted?'",
    speed: 800,
    type: "scroll",
    endContentTitle: "El mural sobre una tragedia familiar",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB02.mp4",
      title: "David sobre el derrumbe de 1997",
    },
    endContentBottom: {
      title: "El mural en memoria de las víctimas de la tragedia",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaB02",
      images: ["01.jpg"],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Mirador Yo amo a Siloé",
            href: "/B03",
          },
        ],
      },
    ],
    map: {
      // https://www.google.com/maps/dir/3.4204338,-76.5562334/3.4199352,-76.5567635/3.4199919,-76.5568772/3.4200704,-76.5569256/3.4202373,-76.5569407/3.420314,-76.5566665/3.4205995,-76.5567919/Parque+mirador+%22YO+AMO+A+SILO%C3%89%22/@3.4204284,-76.5568747,19z/data=!4m15!4m14!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m5!1m1!1s0x8e30a5004a02f1cd:0xf9a73675a5689fd0!2m2!1d-76.5569575!2d3.4204548!3e2!5m1!1e4?authuser=1&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D
      points: [
        [3.420409657983336, -76.5562698618868],
        [3.4201981409126025, -76.55657026928671],
        [3.4199277202858624, -76.55676607053843],
        [3.4200696241886113, -76.55692432086516],
        [3.420219560364924, -76.55694577853659],
        [3.420326657619369, -76.5566560999724],
        [3.420615820146588, -76.55678752820984],
        [3.4205140777858465, -76.55695918958122],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B02.mp3",
    },
  },
  B03: {
    src: "/lugares/siloe/video/B03.mp4",
    title: "Conocemos la historiadora doña Ana",
    speed: 800,
    type: "scroll",
    endContentTitle: "El mirador, la construcción de un sueño",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB03.mp4",
      title: "Doña Ana sobre la historia de este espacio emblemático",
    },
    endContentBottom: {
      title: "La construcción del mirador",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaB03",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "left",
            title: "Hacia La Estrella con los arrieros",
            href: "/B04_V3",
          },
          {
            direction: "up",
            title: "Hacia Estacion de Mio Cable",
            href: "/B04_V1",
          },
          {
            direction: "right",
            title: "Hacia La Estrella por las escaleras",
            href: "/B04_V2",
          },
        ],
      },
    ],
    map: {
      //https://www.google.com/maps/@3.4205056,-76.5569105,21z/data=!5m1!1e4?authuser=1&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D
      points: [
        [3.4204881967002203, -76.55694302178325],
        [3.4204600836768217, -76.55698526657386],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B03.mp3",
    },
  },
  B04_V1: {
    src: "/lugares/siloe/video/B04_V1.mp4",
    speed: 800,
    type: "scroll",
    title: "Subimos a la estación del cable y terminamos la ruta",
    endContentTitle: "La historia del teleférico",
    endContentTop: {
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaC01.mp4",
      title: "David sobre el sueño de un teleférico en Siloé",
    },
    endContentBottom: {
      title: "Así se construyó el cable que se inauguró en 2015",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaC01",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Tomamos el Mio Cable",
            href: "/C02v1b",
          },
        ],
      },
    ],
    map: {
      // https://www.google.com/maps/dir/Parque+mirador+%22YO+AMO+A+SILO%C3%89%22/3.4202917,-76.5572761/3.4202526,-76.5574417/3.4201299,-76.5575503/3.4195362,-76.5579296/3.4195593,-76.5580863/3.4198579,-76.5579207/3.4201246,-76.5578905/3.4199202,-76.5581665/@3.4198802,-76.5580285,19z/data=!4m16!4m15!1m5!1m1!1s0x8e30a5004a02f1cd:0xf9a73675a5689fd0!2m2!1d-76.5569575!2d3.4204548!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!3e2!5m1!1e4?authuser=1&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D
      points: [
        [3.4204478, -76.5569489],
        [3.4202917, -76.5572761],
        [3.4202526, -76.5574417],
        [3.4201299, -76.5575503],
        [3.4195362, -76.5579296],
        [3.4195593, -76.5580863],
        [3.4198579, -76.5579207],
        [3.4201246, -76.5578905],
        [3.4199202, -76.5581665],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B04v1.mp3",
    },
  },
  B04_V2: {
    src: "/lugares/siloe/video/B04_V2.mp4",
    speed: 800,
    type: "scroll",
    title: "Seguimos caminando por las escaleras hacia la estrella",
    endContentTitle: "El muralismos y el grafiti como estética popular",
    // endContentTop: {
    //   type: "video",
    //   src: "/lugares/siloe/video/paradas/paradaB04_V2-3.mp4",
    //   title: "A Siloé no es como lo pintan, sino como lo pintamos",
    // },
    endContentBottom: {
      type: "photo",
      src: "/lugares/siloe/fotos/paradaB04_V2-3",
      images: [
        "01.JPG",
        "02.JPG",
        "03.JPG",
        "04.JPG",
        "05.JPG",
        "06.JPG",
        "07.JPG",
        "08.JPG",
        "09.JPG",
        "10.JPG",
        "11.JPG",
        "12.JPG",
        "13.JPG",
        "14.JPG",
        "15.JPG",
        "16.JPG",
        "17.JPG",
        "18.JPG",
        "19.JPG",
        "20.JPG",
        "21.JPG",
        "22.JPG",
        "23.JPG",
        "24.JPG",
        "25.JPG",
        "26.JPG",
        "27.JPG",
        "28.JPG",
        "29.JPG",
        "30.JPG",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Hacia La Estrella caminando",
            href: "/B05_V2",
          },
        ],
      },
    ],
    map: {
      points: [
        [3.4211184676474855, -76.5571323414373],
        [3.421430388081101, -76.55712027149669],
        [3.4219587012054893, -76.55688655321875],
        [3.422019679675398, -76.55731620853562],
        [3.4224451463734793, -76.55781312657474],
        [3.4228955182232066, -76.55814579136961],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B04v2.mp3",
    },
  },
  B04_V3: {
    src: "/lugares/siloe/video/B04_V3.mp4",
    speed: 800,
    type: "scroll",
    title: "Acompañamos a los arrieros hacia la estrella",
    endContentTitle: "El muralismos y el grafiti como estética popular",
    // endContentTop: {
    //   type: "video",
    //   src: "/lugares/siloe/video/paradas/paradaB04_V2-3.mp4",
    //   title: "A Siloé no es como lo pintan, sino como lo pintamos",
    // },
    endContentBottom: {
      type: "photo",
      src: "/lugares/siloe/fotos/paradaB04_V2-3",
      images: [
        "01.JPG",
        "02.JPG",
        "03.JPG",
        "04.JPG",
        "05.JPG",
        "06.JPG",
        "07.JPG",
        "08.JPG",
        "09.JPG",
        "10.JPG",
        "11.JPG",
        "12.JPG",
        "13.JPG",
        "14.JPG",
        "15.JPG",
        "16.JPG",
        "17.JPG",
        "18.JPG",
        "19.JPG",
        "20.JPG",
        "21.JPG",
        "22.JPG",
        "23.JPG",
        "24.JPG",
        "25.JPG",
        "26.JPG",
        "27.JPG",
        "28.JPG",
        "29.JPG",
        "30.JPG",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Hacia La Estrella con los arrieros",
            href: "/B05_V3",
          },
        ],
      },
    ],
    map: {
      points: [
        [3.420578531647029, -76.55690856430014],
        [3.42028800444612, -76.55725167851202],
        [3.4202793922719814, -76.55731309214752],
        [3.4199140577641214, -76.55767829437247],
        [3.4200050904601635, -76.5578231336588],
        [3.420222297756154, -76.55776304766867],
        [3.4209763678613085, -76.55721912583597],
        [3.4214416284775178, -76.5570964032804],
        [3.4219517836332125, -76.55686323984813],
        [3.4221229450666693, -76.55743345077592],
        [3.4224145542378808, -76.55778380331749],
        [3.423015543065912, -76.55820903646618],
        [3.422800321640074, -76.55833918064005],
        [3.42348812466229, -76.55832586240449],
        [3.4230427362887745, -76.55906270553848],
        [3.4228874730702015, -76.5593075287779],
        [3.4219129162849105, -76.56004242663272],
        [3.4216620187286937, -76.56090531592817],
        [3.4216088446617774, -76.56109175752323],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B04v3.mp3",
    },
  },
  B05_V2: {
    src: "/lugares/siloe/video/B05_V2.mp4",
    speed: 800,
    type: "scroll",
    title: "Hacia La Estrella por las escaleras",
    endContentTitle: "La Estrella que corona al pesebre de la montaña mágica",
    endContentTop: {
      title: "David sobre unos de los miradores más espectaculares de Cali",
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB05.mp4",
    },
    endContentBottom: {
      title: "Fotografías aéreas de la Estrella",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaB05",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
      ],
    },

    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "A pie hacia el campamento del M19",
            href: "/B06_V2",
          },
        ],
      },
    ],
    map: {
      points: [
        [3.4211184676474855, -76.5571323414373],
        [3.421430388081101, -76.55712027149669],
        [3.4219587012054893, -76.55688655321875],
        [3.422019679675398, -76.55731620853562],
        [3.4224451463734793, -76.55781312657474],
        [3.4228955182232066, -76.55814579136961],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B05v2.mp3",
    },
  },
  B05_V3: {
    src: "/lugares/siloe/video/B05_V3.mp4",
    speed: 800,
    type: "scroll",
    title: "Hacia La Estrella con los arrieros",
    endContentTitle: "La Estrella que corona al pesebre de la montaña mágica",
    endContentTop: {
      title: "David sobre unos de los miradores más espectaculares de Cali",
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB05.mp4",
    },
    endContentBottom: {
      title: "Fotografías aéreas de la Estrella",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaB05",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Bajamos a caballo al campamento de la guerrilla M-19",
            href: "/B06_V3",
          },
        ],
      },
    ],
    map: {
      points: [
        [3.4211184676474855, -76.5571323414373],
        [3.421430388081101, -76.55712027149669],
        [3.4219587012054893, -76.55688655321875],
        [3.422019679675398, -76.55731620853562],
        [3.4224451463734793, -76.55781312657474],
        [3.4228955182232066, -76.55814579136961],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B05v3.mp3",
    },
  },
  B06_V2: {
    src: "/lugares/siloe/video/B06_V2.mp4",
    speed: 800,
    type: "scroll",
    title: "Al campamento del M19",
    endContentTitle: "El M-19 en el territorio",
    endContentTop: {
      title:
        "Sobre la importancia del campamento del M-19 para sus operaciones a nivel nacional",
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB06.mp4",
    },
    endContentBottom: {
      title: "La loma se movio con el Eme",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaB06",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Caminar hacia el Monumento a la Opresión",
            href: "/B07_V2",
          },
          {
            direction: "left",
            title: "Bajar a caballo hacia el teleférico",
            href: "/B07_V3",
          },
        ],
      },
    ],
    map: {
      points: [
        [3.422903188529879, -76.55821574555468],
        [3.4232889909035946, -76.55807139314396],
        [3.4234980733810128, -76.55826303779749],
        [3.4233250776423865, -76.55839832646002],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B06v2.mp3",
    },
  },
  B06_V3: {
    src: "/lugares/siloe/video/B06_V3.mp4",
    speed: 800,
    type: "scroll",
    title: "Al campamento del M19 a caballo",
    endContentTitle: "El M-19 en el territorio",
    endContentTop: {
      title:
        "David sobre la importancia del campamento del M-19 para sus operaciones a nivel nacional",
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB06.mp4",
    },
    endContentBottom: {
      title: "La loma se movio con el Eme",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaB06",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Caminar hacia el Monumento a la Opresión",
            href: "/B07_V2",
          },
          {
            direction: "right",
            title: "Bajar a caballo hacia el teleférico",
            href: "/B07_V3",
          },
        ],
      },
    ],
    map: {
      points: [
        [3.422903188529879, -76.55821574555468],
        [3.4232889909035946, -76.55807139314396],
        [3.4234980733810128, -76.55826303779749],
        [3.4233250776423865, -76.55839832646002],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B06v3.mp3",
    },
  },
  B07_V2: {
    src: "/lugares/siloe/video/B07_V2.mp4",
    speed: 800,
    type: "scroll",
    title:
      "Con los más berracos seguimos patoneando hacia el Monumento a la Opresión",
    endContentTitle: "El Monumento en contra de la opresión",
    endContentTop: {
      title:
        "David sobre la obra de los maestros Arturo Alape y Alfredo Castañeda",
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB07.mp4",
    },
    endContentBottom: {
      title: "Miradas al Monumento a la Opresión",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaB07",
      images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Casa de Jaqueline Rentería",
            href: "/B08",
          },
        ],
      },
    ],
    map: {
      points: [
        [3.4233348302956754, -76.55839142979907],
        [3.4226821841947235, -76.55860210273168],
        [3.4223142051926767, -76.55863213323332],
        [3.421961059633387, -76.55892663641406],
        [3.4219131458545613, -76.55870721076758],
        [3.4214374505543725, -76.55856852472881],
        [3.4206398913174842, -76.55896426360421],
        [3.4195817587536603, -76.55934593807895],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B07v2.mp3",
    },
  },
  B07_V3: {
    src: "/lugares/siloe/video/B07_V3.mp4",
    speed: 800,
    type: "scroll",
    title: "Terminamos la ruta con los arrieros y bajamos por el teleférico",
    endContentTitle: "La cultura del arriero",
    endContentTop: {
      title: "'El Cuco', otra generación de arrieros en Siloé",
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB07_V3.mp4",
    },
    endContentBottom: {
      title: "La loma está hecha a lomo de caballo",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaB07_V3",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Estación de Mio Cable",
            href: "/C02v1c",
          },
        ],
      },
    ],
    map: {
      points: [
        [3.4233348302956754, -76.55839142979907],
        [3.4226821841947235, -76.55860210273168],
        [3.4223142051926767, -76.55863213323332],
        [3.421961059633387, -76.55892663641406],
        [3.4219131458545613, -76.55870721076758],
        [3.4214374505543725, -76.55856852472881],
        [3.4206398913174842, -76.55896426360421],
        [3.4195817587536603, -76.55934593807895],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B07v3.mp3",
    },
  },
  B08: {
    src: "/lugares/siloe/video/B08.mp4",
    speed: 2000,
    type: "scroll",
    title: "Casa de Jaqueline Rentería",
    endContentTitle:
      "La casa de la doble medallista olímpica Jackeline Rentería",
    endContentTop: {
      title: "David sobre el ícono deportivo de la comunidad",
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB08.mp4",
    },
    endContentBottom: {
      title: "Un monumento para la medallista en la glorieta de Siloé",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaB08",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "La Cascada",
            href: "/B10",
          },
        ],
      },
    ],
    map: {
      points: [
        [3.419613980917109, -76.55883938053768],
        [3.4191857437172306, -76.5595691002525],
        [3.4188221290100422, -76.55953531812378],
        [3.4181635233023147, -76.55972486462478],
        [3.4181635233023147, -76.55972486462478],
        [3.4187202220082566, -76.56051964932126],
        [3.4185620513093617, -76.56070222744704],
        [3.41855287024377, -76.56081785230585],
        [3.4177630503995786, -76.56096127443998],
        [3.417854846367538, -76.56163579802225],
        [3.417529027603313, -76.5615504525806],
        [3.4184087647821397, -76.5630331421271],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B08.mp3",
    },
  },
  B10: {
    src: "/lugares/siloe/video/B10.mp4",
    speed: 800,
    type: "scroll",
    title: "La Cascada",
    endContentTitle: "El nombre Siloé proviene de esta cascada",
    endContentTop: {
      title: "La hermosa cascada en el sector de la Playa",
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB10a.mp4",
    },
    endContentBottom: {
      title:
        "Jhony sobre sus recuerdos de bañarse y pescar en las fuentes hídricas en Siloé",
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB10b.mp4",
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Balcon hacia Brisas de Mayo",
            href: "/B11",
          },
        ],
      },
    ],
    map: {
      points: [
        [3.4183925, -76.5630183],
        [3.4185231723605205, -76.56318213435803],
        [3.418549946722638, -76.56339939328117],
        [3.4186623990352714, -76.5634986350115],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B10.mp3",
    },
  },
  B11: {
    src: "/lugares/siloe/video/B11.mp4",
    speed: 800,
    type: "scroll",
    title: "Balcon hacia Brisas de Mayo",
    endContentTitle: "La última toma de tierra que resultó en un nuevo barrio",
    endContentTop: {
      title:
        "David sobre el origen del barrio Brisas de Mayo y la finca 'Siloé' de los alemanes",
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaB11.mp4",
    },
    endContentBottom: {
      title: "La toma de tierra del 3 de mayo del 1981 con apoyo del M-19",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaB11",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "up",
            title: "Estación de Mio Cable",
            href: "/C01",
          },
        ],
      },
    ],
    map: {
      points: [
        [3.41868003343721, -76.56350319596768],
        [3.4185203043661607, -76.56366997092451],
        [3.418380822620403, -76.56358432973046],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/B11.mp3",
    },
  },
  C01: {
    src: "/lugares/siloe/video/C01v1.mp4",
    speed: 800,
    type: "scroll",
    title: "Estación de Mio Cable",
    endContentTitle: "La historia del teleférico",
    endContentTop: {
      title: "David sobre el sueño de un teleférico en Siloé",
      type: "video",
      src: "/lugares/siloe/video/paradas/paradaC01.mp4",
    },
    endContentBottom: {
      title: "Así se construyó el cable que se inauguró en 2015",
      type: "photo",
      src: "/lugares/siloe/fotos/paradaC01",
      images: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
      ],
    },
    navigationHotspots: [
      {
        id: 1,
        isBlocking: true,
        links: [
          {
            direction: "left",
            title: "Terminar el recorrido en el MioCable",
            href: "/C02v1a",
          },
          {
            direction: "right",
            title: "Volver al Museo volando en dron",
            href: "/C02v2",
          },
        ],
      },
    ],
    map: {
      points: [
        [3.4184146418207106, -76.56373857742616],
        [3.418210607536718, -76.5639225355791],
        [3.418009542281106, -76.5642917182536],
        [3.4175256999941337, -76.56415824892828],
        [3.4173309418592153, -76.5641091677808],
        [3.4176248832865963, -76.56388788336986],
      ],
    },
    audioBackground: {
      src: "/lugares/siloe/audio/C01.mp3",
    },
  },

  C02v1a: {
    // Miocable trayecto completo
    src: "/lugares/siloe/video/C02v1a.mp4",
    type: "video",
    title: "MioCable",
    startTime: 0,
    map: {
      points: [
        [3.418043762178466, -76.56381478732216],
        [3.422004184072227, -76.56130001355203],
        [3.4200658882636485, -76.55793973085903],
        [3.415544908483542, -76.54925502064263],
      ],
    },
  },
  C02v1b: {
    // Miocable trayecto desde la mitad
    src: "/lugares/siloe/video/C02v1b.mp4",
    type: "video",
    title: "MioCable",
    startTime: 0,
    map: {
      points: [
        [3.4200658882636485, -76.55793973085903],
        [3.415544908483542, -76.54925502064263],
      ],
    },
  },
  C02v2: {
    src: "/lugares/siloe/video/C02v2.mp4",
    type: "video",
    title: "Dron",
    startTime: 0,
    map: {
      points: [
        [3.418043762178466, -76.56381478732216],
        [3.415639782444439, -76.5595491937936],
      ],
    },
  },
};
export const videoScrollPath = "/siloe";
