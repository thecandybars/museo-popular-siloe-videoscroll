// endContent_A y endContent_B permiten agregar contenido al final del videoScroll.
// Puede ser un video o una foto.
// type:video recibe un src de video y lo muestra
// type:photo recibe un src de una array que contenga fotos en formato jpg o png y las muestra en un carrusel

import type { SceneRecord } from "../types";

export const siloeVideoscrollData: SceneRecord = {
  A01: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmYbSt4SLYq4rZ84prZ54qzpVcjwdVXqA5MXuptgbZ9ypi",
    title: "Monumento de los Diablitos de Siloé",
    caption: "Patoneando la memoria desde el Museo Popular de Siloé",
    speed: 800,
    type: "scroll",
    endContentTitle: "Monumento de los Diablitos de Siloé",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmQ7vbgsYymsPc9JY4pTYkcmfbrPHXgScRihP9sR25fy9p",
      title: "Mapi sobre la escuela y el patrimonio cultural de los diablitos",
    },
    endContent_B: {
      title: "¡Viva el carnaval de los diablitos en Siloé!",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmZ5sDEFsjJc6SMkHpUfcC3xSN1yMNVXwaxGkZeTSAcGjR",
        "QmQtuRDYnWY4ex6Sc2DXohotyuxLrKSC4WYWdFXhJkCGg3",
        "QmTdx9JnzT2ouR93s42Mn5uXLXhB5PGU4gRo1PAjtLu5bm",
        "Qmbpz2bBiLpFPGpvpq9LonWDCMYjXvq12FsUk7RL46WvGZ",
        "QmZEq3BPxpcyHr6fsbcBsN26yqYGmodh4gqLCDLi3ai9Ls",
        "QmdSHZyPS7NZw4f4287qUBPFFthJUtGJTqkgXtuP7yyN8F",
        "QmRJg2bqisnF1uUDfhb6e4ELa9Zw7aS5uNdTfX5LCzk2Qw",
        "QmRXBLM3NZn4tScjvHe1QM88ALdFjt32Cycx4FLEoySRUC",
        "QmdrfRjBiQXCanVaEBNS45UaMJmWwPk5b1cVmbYWawHa1s",
        "QmddPt6tYnNKTAh5HnwoE1kCFVsBtNy9tXYnGpqZ8iKnRr",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmP5DWqMPu2Q7DVShtwRBdTq67w8nEt7m8yDYLwx2un1uT",
    },
  },
  A02: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmV7snWTUG3EW48mN3RSAe3j6HfaLqu341byDRG3x4mGtu",
    title: "Hacia el Cementerio San Jose De Siloé",
    caption: "Caminamos al cementerio San José",
    speed: 800,
    type: "scroll",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmWPK7NxrJG1TohAvz7TuJ4pyvkxFQRMRJW2TkFXgdiSX7",
    },
  },
  A03: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmcQRun7ZD9ckPLsVJwt75pa9PEnsc4FqsuRp8xNtzPxLJ",
    title: "Dentro el cementerio San José",
    caption: "Andrés y el estallido social de 2021",
    speed: 800,
    type: "scroll",
    endContentTitle:
      "En memoria de Angelvis Gregorio Bello Pérez, venezolano que asesinaron en el estallido social 2021",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmZGjVvsiUS4vficKhmZRcPkjcm2gKE2NmfomJV2zPYrbt",
      title: "Andrés recuerda a su compañero durante el estallido social",
    },
    endContent_B: {
      title: "Una comunidad lucha contra el olvido",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmUUvvcMVyemRfEv1jLaiaEP7BLF9o9yN9fmTxKjeG3cqR",
        "QmecuxoRhFroznhDtGyE5rGRDvNquAc94c1wyFBFDYFgsd",
        "QmVPMV32s3biQppfxHunyGanGQYmjPQ9nFbfcjUKRP2box",
        "QmRhBFSjgcRnsmx3vxuVLdvG8hVdCo4iuJjASvrpxNfxvg",
        "QmfG9ZBmrQzDzrj4VC1etMj6AGdqdC7GKxaCdnyH4Z6f26",
        "QmbTiwKCDP8BeWxtejwHkW87RH83c1qHUN2Es3zvG8r2uo",
        "QmRRW8gzgDQahg1ZBprfKPXuMqoHy5w83KHdfewfi6muk1",
        "QmaVWqbigVffoRJgmydKqyEau5rcoHgj3MP89MsewQKRN8",
        "QmUQx58pohhbKArj4RkqhYpuZ5KL5CgSztenuSRCgWkQVd",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmcEEoCtqfnC8ydvJ3oJGHvUeUfJLB6ihkbykz5deTLjuB",
    },
  },
  A04: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmQFEvdX2aLG2zP8qLvnQH2937Nkv3cNtjJtgNuLF1SVkE",
    title: "Mural de memoria para las víctimas del estallido social 2021",
    caption: "Pasamos por el mural de memoria del cementerio",
    speed: 800,
    type: "scroll",
    endContentTitle:
      "Mural de memoria para las víctimas del estallido social 2021",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmQ7vbgsYymsPc9JY4pTYkcmfbrPHXgScRihP9sR25fy9p",
      title:
        "David sobre la iniciativa contra el olvido de las víctimas del estallido social 2021",
    },
    endContent_B: {
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      title: "La Dignidad hace Memoria",
      images: [
        "QmSE2uRtanUmcGdMMktH98DWR8DdMHBzTpfU7ckNXJmjMn",
        "QmQJCgmiUoRa1G2D8EFxgJEASWcXXyBZyQ2Rbw7a2WrUNY",
        "QmRJheXtGPvgH9qUVx5h82ZmF2RJKDkgzTc55McGBbcmF8",
        "QmeiUPCB4udAEjbyQmEcWN4ootszutWVvid4NDkypaHWH2",
        "QmSjUVog8mdnQTXNAQezneWxvRPybPouzsxpCe7Bd9goCx",
        "Qme7oxqYK31YwrW58reCKJ3mRbVmRpvDy5srBmc7jKy1dB",
        "QmQLLqSyyxsYPSzTjWdg7TCe4DZg4uxgGxg65zNxXGYgVz",
        "QmcHnxkhmCnNphDiwqNtEb7tVehuWCstxNBqW7tGBhwXwq",
        "QmaST3i722VYKE2pDBgB1FqRcLyDsEQEMepgWrX4YuTwaA",
        "QmQdw5e49a67Cz6KRZR8MQTJLZiPWQUDaSx3SXBsPUbXfy",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmXXeskL3VLfFhJQNYPRiwvYz9vRiK56B2vvK3vdcyXUJ2",
    },
  },
  A05: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmYgu5wVCNfBYJrSdvfsJKJqZbim9dyU1U8jm9iQQMZFHh",
    title: "Doña Blanca esperando justicia y verdad",
    caption: "Pasamos por la calle comercial de Siloé",
    speed: 800,
    type: "scroll",
    endContentTitle: "Doña Blanca esperando justicia y verdad",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/Qmcx4w6b9sGYuLnseXx8QMuKy32DRdiAUmuhVWGuq6bK6j",
      title:
        "Doña Blanca sobre la pérdida de su hijo y su resistencia con otros familiares",
    },
    endContent_B: {
      title: "La lucha de doña Blanca y su familia en imágenes",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmeR9yHuShCqUqspK3heecT4jt5KcyAwkpwoi8G1hJjYFk",
        "QmasQ4KuHvcdvTW3xAqqiCo5ZTpLssEeYzpikE6oXNqeJV",
        "QmevoBiATExcZ49p4suD955YugXNcWNrtTijq9LLwzFTka",
        "QmVqbeKmvgUYGXhY9qx4Gz5W8oxr8utURQPsy9LtsoVxmf",
        "QmSFTb92wkAifW8bcobLC6MBUgiNNqpPuFh2G95S98NwUw",
        "QmUXPpiAtJyC4iPfxEzyTzet3eMagHhrcL5nS17Vk2Twdc",
        "QmXE9Edhro2JDC7G4gvawjfg4os16YgoVCqqMV8NLcLZ2M",
        "QmTSnrqTSCXWF6tgJb5pUkUbgSaEWYpxRjBAy7QGPUwMss",
        "QmVsKJ3G9mzeFnnKgU2gZVFbVsYAuoSRfs4FJWNipsRgQp",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmZU4ikG47nnkJxTskGULZonVH9y5p3UNbPYdmnZi4XTXF",
    },
  },
  A07: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmfTbkSDy9YWkXoeWwZ3pTmDaVDkyxCZCFfBz6ZkDmKcwk",
    title: "Seguimos hacia la galería de Siloé",
    caption: "Jenny sigue resisitiendo y espera justicia",
    speed: 800,
    type: "scroll",
    endContentTitle: "Jenny sigue resisitiendo y espera justicia",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmeqSwVQsdou4WzfvKCNMAkMxZBn5VrYRsip17vDR3qiH1",
      title: "Jenny sobre el asesinato de su hijo",
    },
    endContent_B: {
      title:
        "Jenny en las actividades después de la masacre del 3 de mayo de 2021",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmShVoPKJ853FH5zsM6mmwKiTF2SqqSUaeJGqve9t3hdAJ",
        "QmRMazsjiV9smCFyeJogcDSSMX1QdBaFUx9gAQZTgAbyq7",
        "Qme6oERYSubbKAZsTB6RMpSrWwc5RavCVtfo8ga7MEN3zn",
        "Qmf76sybFma6QDmJTPPEfVpXV6vDMZvxzXnd4P8uTzDSJW",
        "QmTeFyY8Xjov2ykDihc1pcSapq7s5ezaz74BkSYGPZcPxr",
        "Qmb7sgybHvS4DuJUiYX3LcJbgAPJyuckvm9bMuWBH1muQe",
        "QmdmnM1QxQB7Z2UhsCmF1pHnXjgtXL8kTtYiDJNagEQ36r",
        "QmNwLFXApACs4ffPPUqgFgbAZPKzHdhko4Wiq3vq8apq4Q",
        "QmZqVcQ1J2CpHjt1wdS8eKPdT36ESXGdQjvwVtjZ71ydKh",
        "Qmd6HkaidACft3zcDMrh657ALP85jTUFX8hWnzVyHvuUuc",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmcWPcMTXePcDv1XkJ8zo9yvQv8r6ENujUxKtrBiNtRoRE",
    },
  },
  A08: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/Qmc7hvXsvDmFBsb7m9MrGqR3DVRvdCtRx39TusF8Z8cuRj",
    title: "La vendedora doña Miriam resiste en la galería de Siloé",
    caption: "Entramos a la galería",
    speed: 800,
    type: "scroll",
    endContentTitle: "La vendedora doña Miriam resiste en la galería de Siloé",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/Qmby3YgdTGV4eMUJmZYdSVzsTrAr1vNxec1Zx9c9MEtStp",
      title: "La hierbatera doña Miriam sobre su legado",
    },
    endContent_B: {
      title: "Un patrimonio arquitectónico en imágenes",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmQxhgDcYpSU8MVWWy7HveLr9W4DdQCVR6dWif1qjQVJSe",
        "QmXTRr1ziLAs2bocUiGw9vDrAfNyskPscpgyxsguN7a96B",
        "Qmb9BVgArd9BJE2KrkdqVgUJj45ZHbrijci7gVvESm7rBi",
        "QmRk73JESS2k87pcmj5q7SGCL6kpBC6UNdGrZro5k5wAuX",
        "QmeDsm2TZ2yqSjdxudhz9uZT2xBGZiSU5TMo4KwScwT9gV",
        "QmSqKtop7LVww3nVPsBmD1GRXiwYn3uyy32te3Y7rJZ1v3",
        "QmV61UJjZYkw4gLzn4AdL7VpjVke2inJSan4LGKZSJQfcs",
        "QmPZF8C5qfGZwYTcRHsRXWnosiu612YM2m6zu8phGaaMNQ",
      ],
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmTsoxAXpPdbQCobF5N4zS4eyDf97QU2tebiwV4skruhjz",
    },
  },
  A09: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmWdQbApEeG2yWWb5YkxvMj3V9R1ETe9MMZSqFT8jk36bG",
    title: "Hacia la glorieta de Siloé",
    caption: "La historia del estallido social y el Tribunal Popular en Siloé",
    speed: 800,
    type: "scroll",
    endContentTitle:
      "La historia del estallido social y el Tribunal Popular en Siloé",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmQPfXL1cofzK1MUWVXtEAWz3E19MDtPUNryqtdP5qk6Be",
      title:
        "Ani y Steven sobre el paro nacional y la lucha por los derechos humanos en Siloé",
    },
    endContent_B: {
      title: "El Tribunal Popular en Siloé - una comunidad se organiza",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmPa5bWBUXrV1HULni94UCQiUQSmhu9RmXcKWBMYdcWqkR",
        "QmZnrXPTENyAMWp4ZS5YqPFxrGpo8tJVKH4cuzhrpaMWPj",
        "QmT8FwxmAZm8ae9p4WLtkLftYBvsqFmiKryV8UojJuaJbP",
        "QmdUoVumDvpyyAVdGX7pdwVixP2JUQ2DyaCqPGCscUuWtN",
        "QmZKAE8dXeqogZvhGHnSdqxbaha3ooV6YXJ3uYgQxFpY4S",
        "QmQspdg3G6i9kQi7xCvzTKcowis4VUwq5akFWDw9DJvnkf",
        "QmZYWeFRHG1tCpDJBAYnQ1Hj3oeujnc1FXVZroZ38tnYYa",
        "QmNoRb2zTyxdjcKaAks14abvpwdduQpxHYprKSUS6KjM7T",
        "QmRqxPuwkD2vAq9GBUyvNk2gyy8cdnPcmPxNYB5NNSna6M",
        "QmNVqr812SxBLJ36JYF4uqv5EWKnz9wr4RrNoUyDLX6g8p",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmWwfpWnvFWbWhX72nrcbR2u9Gng1CzvGtYEPA1EnKVS1Q",
    },
  },
  A10: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmeeRzyAmmQGBXkcZ5Ldx8qkduANxJo4LsL9SZkCMia54A",
    title: "¡Prohibido olvidar esta tragedia!",
    caption:
      "Concemos el antiguo centro comercial quemado el 28 de mayo de 2021",
    speed: 800,
    type: "scroll",
    endContentTitle: "¡Prohibido olvidar esta tragedia!",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmUmCHNWgHu6NkUowdjXbdUsNH3eoqg8NhSfbZZHGnhWgD",
      title:
        "David sobre los muertos quemados en el Dollar City durante el estallido social",
    },
    endContent_B: {
      type: "photo",
      title: "Soñando con un centro cultural y de memoria",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmNmqeDKZuvRcbJdwR5kYUaBnK3vkEG3ErxYgZ9cWm891B",
        "Qmdv8o8yeQ5rrs5WJnbFRLLUNBARYFXZm5yjQTv78BCZFD",
        "QmV3XoBqM5R9znpqfzxBBzZ1eYqjVEcyasDByWiDaMEauy",
        "QmcGUVxT6EtnovHdQjt98iZx7ixvNiNxitju1o1X9RpzEX",
        "Qmd5qx2DskArj5xLNBJYhFW6SQJk7A1t3GtRShCDjV1xz8",
        "QmRCbZEXaVxmM3R7mYSkGKRoNAQJqERWxnuFcKMfY5BMWS",
        "QmcbUfyMoKmaxy4v3iJ9pzEdyWQawF1zJcu2Mqcs8o4BW2",
        "QmbTWZXHwYDRXJV9Eu4wueJCs8q8xFbfqX39uGCsMtKyKZ",
        "QmV8tXQdBVJcsnpocHFPvMeFbBtTxX7yxMgPhMFCVBXaW3",
        "QmWqyjspHRqVkY4W8obKfzJS5N8gSN3wHJTfsV5deGgR6z",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmSAMM1f8hNCxoZfPbsG8Pd77CGXEWpDHkVLx8gV3Jmfek",
    },
  },
  A11: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmUBSeofCkFwdpMcDTbG239Y2tBDDiVjcEmizw1PCHCzTt",
    title: "Seguimos al Parque de la Horqueta",
    caption:
      "Un parque que reconstruye la comunidad en alianza con el empresariado",
    speed: 800,
    type: "scroll",
    endContentTitle:
      "Un parque que reconstruye la comunidad en alianza con el empresariado",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmWF6tXT73zUGH8d2iwghqU1KVk7coiFJYUhDgmUYaKpR9",
      title:
        "Héctor Fabio sobre el éxito de un parque para formación, cultura y recreación",
    },
    endContent_B: {
      title: "La historia del parque",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmTNhMrFVTJuKuZxXaLfNurVM1gvZgLJfo2XdRtqsY3VyP",
        "QmQx6gUXk83NHyZ6y5T5AS2qF1qqFaBdz2nbEr24MTy9f1",
        "QmSYphQaP5hjWx74MrbSZnGRb2XFrmmrYmzdp7i6b5s6zE",
        "QmU3HddtyRBeQhuixcu3RndRxhdagNFwKFZtZh277EozSV",
        "QmTNvbvRFw1BejZQNkqxNX8qtSbRRXGXVjNVj13HyyhMJd",
        "QmdW7nWHShU2ZBdTzhFihmKguUDYN8gCCDy5iLckU7GZWx",
        "QmQ46Sn3eQJPc5uVWYAQ3piLJk4WjSGQhhGvpKcZtar3jm",
        "QmQUpBcU8b3yy2Vhca8RuvcqYGRWmzmso1taZNmVmZBX5P",
        "QmaCQBMa62ceS5XM8x17Neo2fr83wV4Y8AuxJqT6xK7emz",
        "QmdHiurvgXBXGYAe69hL8phm4z7ivp8dRw3n6d15a8oBa2",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmQ3dq4Pphv43XbwUxnvYJxEB8b4NoVCgRSppr8jtpFByu",
    },
  },
  B01: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/Qma6y8i2aiGUpSFBrH6NNAsQGpB7JrAg3T8pC4HaHGimSh",
    title: "Las minas de carbón en Siloé",
    caption: "Subimos a la loma de Siloé",
    speed: 800,
    type: "scroll",
    endContentTitle: "Las minas de carbón en Siloé",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmQgSq3fFoXZtibbJ6WFWuuKCj3PBnYJ6NNU4gvRiqJ3zT",
      title: "David sobre los mineros de Marmato, Caldas",
    },
    endContent_B: {
      title: "Video antiguo de Minas de Siloé años 1960",
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmSk6e4TVcSzufg4sTVCrBVseKCMZFTgN5A7GkBGiU1XiE",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmXiy5QpR2sFnNYrv9fR3NyuNBAmyn83Bf3yKMTPUcV8sK",
    },
  },
  B02: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/Qmb2YW5ckad5fRkvHZNKmRUxZXk7GoW8awWiJ6GYnntkhg",
    title: "Hacia el mirador 'Yo amo a Siloé, y usted?'",
    caption: "El mural sobre una tragedia familiar",
    speed: 800,
    type: "scroll",
    endContentTitle: "El mural sobre una tragedia familiar",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmPix3x5WbjSaFNsGKSVFgpbsqk1f9NFxLkVFVHNvK2Tbq",
      title: "David sobre el derrumbe de 1997",
    },
    endContent_B: {
      title: "El mural en memoria de las víctimas de la tragedia",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: ["QmbeWbdk7ZkCcDtStmQvmaf7gubL2AvxYdFo6uYTYnTevw"],
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmPToM95F7kPJtUi7zko6M2Yg62DPquNpTTpq1Zw6i8rzj",
    },
  },
  B03: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmdS2yMfhnMkfEhoXpiFC7q1WW3hBCTXxBUoCSLjpsVTHc",
    title: "Conocemos la historiadora doña Ana",
    caption: "El mirador, la construcción de un sueño",
    speed: 800,
    type: "scroll",
    endContentTitle: "El mirador, la construcción de un sueño",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/Qmcod9sqmtfmyNwyg4oKRMnHoFUsuSivrr4oXfKdxgHc5p",
      title: "Doña Ana sobre la historia de este espacio emblemático",
    },
    endContent_B: {
      title: "La construcción del mirador",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmbPPTj7CE2feho9ey71xiSBvCk2NpjfMkeoT7D5AT6pdM",
        "QmTzYHyQeLRbZh99532Grg74E8XkMMqf418pq5cjcpAXGH",
        "QmdRhbj7Srxv5nLo7wFNbgxdByxm8CiGm9VbgnskbmaRwx",
        "QmTDPgnooTMqMvQGuSpnRPLeZ7dTDR9SutLRL2yn2KG3Q2",
        "QmVB3FFx6U5AquN2Pm37E3WXFfwRtD7LUcfrnVCYerHw1U",
        "QmQHLgnH6ik8aJKmEWiqCmCapss4YFBrz9jx7tU7GWuVhJ",
        "QmYxzu52e3dg9qJrKqke6aKAcAhgEbqpzbxdwNkeJxQfw6",
        "Qmc3viCKmrGmkDKuCy56xWsogbkSzzzgNGybMXN6mC4Dm9",
        "QmbZMcxRYVA6GXDN7TuAY7GWv89Wk1q8vwjJRKk44aLFgp",
        "QmY7phpt4wxgKymXtJqJD8VukErfCD3oDrrscwe5Lr628y",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmdfRMHxwuAgVL4SkPL9ts4vqgBmTduDviZA9GrFqdQyP7",
    },
  },
  B04_V1: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmZzxU5ww2xUWECg7FwaQqapbmuMwikoMChHgs4yRnSnaC",
    title: "Subimos a la estación del cable y terminamos la ruta",
    caption: "La historia del teleférico",
    speed: 800,
    type: "scroll",
    endContentTitle: "La historia del teleférico",
    endContent_A: {
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmPasYvQ5b2mbgJXyYoSKM2VjD7WPJyGzMchZLv7D5KiUw",
      title: "David sobre el sueño de un teleférico en Siloé",
    },
    endContent_B: {
      title: "Así se construyó el cable que se inauguró en 2015",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmNnC9iDKUV1mym7BVgNrkx6uJQhq1z6gLn83dpeUo1JV2",
    },
  },
  B04_V2: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmevgHMH1uV4nM6aNtq24i2sp4RZr3mShKDnb2wH5MuSFH",
    title: "Seguimos caminando por las escaleras hacia la estrella",
    caption: "El muralismo y el grafiti como estética popular",
    speed: 800,
    type: "scroll",
    endContentTitle: "El muralismo y el grafiti como estética popular",
    endContent_B: {
      title: "El muralismo y el grafiti como estética popular",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmQ1qXvcSV2LnmA8ugPUjTVpHgMEHzY9smgdY4VS1Lqkpq",
        "QmSEvQe2tceuEzv33Cu5MtoeGMagZXTYc1JhrTboqgBqyn",
        "QmYSfYn5C6H7d2X9JXa1xhZ7wckgD7MUoHhHWDe6PpJydL",
        "QmRg7L2fchbagagZV6Q2sJEDTxSxH6E4zdbozZZjR1q7fe",
        "QmUFDk2Z37NhTj4HuF6oCENvFh9SWP6dhUunG59Pyt88t2",
        "QmRi94p9GVC8J5ZHjW8pEyYoHp2Lug2LfiGQiyeBVPnCpU",
        "QmfN5zTzJhJoosDQqZY212sCiiMyoq71HZZHFZ1Rz4yvsp",
        "QmQutHH23wqPfMWbjhA4vxUXjq6y75CZ4pMoGGJ6AwcCS3",
        "QmP3P7piGh6CJDicW69QAgMxP2TnWk865qqDvCBG3w6KwL",
        "QmaH3hV1rMFC7zkeZQCPBem5Luwf41MZfHkYCKGV14ueQw",
        "QmUg4eeKR5MqjhAdvciPAVjKPLidLyFDQghNzj2rpZahAp",
        "QmUqmokRq9UL6tfAegVPZzGzkPAnYUonMVVvqSiytVfiSo",
        "QmS7FTaE4fA3i7aPbc4yR9aEHd8RiH8E8qqiwEvKAJvFYs",
        "QmSxaVcbyDDuVugmcXsdmMWS2aRryRPZYW2mDRFBbkgm58",
        "QmSXpYtDaDQ9U1PqCnFWUVrFJdntJctyTZfDam33v5vr6x",
        "Qmc77rXyU7CwpVMzmx7HGkFSeKyf3Z7LG3nB2KqnYr4UaK",
        "QmSub7EbLoVzRDKadrj6iYYjDBHqFZd6JAfJawaQL4uz6v",
        "QmYatw2Cu7VuzM6SvtgYnfG3toWURWrKHzFY6myYPMs51a",
        "Qmafr4dyZaxuV3pH2c5FVfRxj2Afiy9LUGe7YpoHgoXRuK",
        "QmT1FkTMyBQeBZ2uCLFwkspvCjhYXk9rysa2uXCBZrupsF",
        "QmRDkUP5SfjBCPrwXucdR2migQGduBM7T6taSbTnbSGNNx",
        "QmRwShrzts5Wg58C2cRtS34NEedkqEgH2nTyTyCEYYjJSo",
        "QmccuuVpcLH7uLB7TuZsVWx8njt7vCdKSBAk5ChpGQ96rd",
        "QmSyhQ95BFF7MWPeyhxo8nVVYnwT4vV3zZrkpeu3kfkad2",
        "QmbsGU54FseCqq77GxcD8reDXWGxvcyDP99NZ2brUTXUca",
        "QmWnPVEj6uJZWt74Ke9ZVbC7J3nLZt78U64wuaDyEb6ABz",
        "QmWbGDeT1NK6GX2jkFKpxCWq7xMnUxy7tXKUcXdriFBfCV",
        "Qmd8PdtA3K5d5Kx84j4RXkaJGbJC86k2Fgc7fJQ3UukG5y",
        "QmRPrxUhqax9tebrxwAXQ6k2ZWQnabz7hCa7GNnza19YcZ",
        "QmSexbtQGrQc4sPtPyFmNhrmrMAJrgCgSMU1phLcf5CKtR",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmQxBNqRdr5oGRabGJf3aUmAWcpBpPKyfzmRm6khPryvSo",
    },
  },
  B04_V3: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmQRnxKauM7J6SinhjsMfb5aP5MmmBHPNta8WMGArRDgFa",
    speed: 800,
    type: "scroll",
    title: "Acompañamos a los arrieros hacia la estrella",
    caption: "El muralismos y el grafiti como estética popular",
    endContentTitle: "El muralismo y el grafiti como estética popular",
    endContent_B: {
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmbvZWbjVTpbTJGSNtRGMKrjrJ5wGLjF3T4TDwAEBwSxyV",
        "QmRrUbh8FbMaWNvQXgPhZ4nTPWmKeyoJiYF57XQNDpsmjQ",
        "QmPw2tx88mX2KVZYh5QqKn9PkezB4cphFVK34BMCtvmreP",
        "QmZfDtvh9ahrHet6YbTnvaCtJ4csFZPkktErCLWabLz53W",
        "QmWYqtkk9dpQSXQd1qqEmS8ZPbr67MVhfbNYdwLxmk8vyr",
        "QmX5NaF9sYYn5snm2zYcj5hraMZ2Ggjrrfks6G8PBVUhCV",
        "QmQUG5QW3P3WFko6W17XUAaTWSrCFfy3oxRrbPpmKrg95T",
        "QmWdKufwhAgZb1ZRHpLcNGPtXa8jVQ9WzfUPAUh1xPmDZT",
        "QmV11d2emmocjqpCn861zKb6SpcgBcHoGECzAPwcM3m7Mi",
        "QmcaGnv7gEi3L5cvn46ACkzWicn91unAEEVGq9Lbe17PE7",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/Qmc3zrbjhXtJYfQj6ZkgmJXJVpUJLeQ6yxpkNhEaXFuFJa",
    },
  },
  B05_V2: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmYP5p8bzZPJC6FhXfUCZ9fhBFbjrA5EPg9NfCCPMMBk4d",
    speed: 800,
    type: "scroll",
    title: "Hacia La Estrella por las escaleras",
    caption: "La Estrella que corona al pesebre de la montaña mágica",
    endContentTitle: "La Estrella que corona al pesebre de la montaña mágica",
    endContent_A: {
      title: "David sobre unos de los miradores más espectaculares de Cali",
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmTpS3K5TzRC7CrCn8EeqTDyPMGqLrDc8RRaqckXMyMBo6",
    },
    endContent_B: {
      title: "Fotografías aéreas de la Estrella",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmSKxzHpR8t8Fxa3EKzc1mbnqXUyA1FvrCWEhYAtqBtCVv",
        "Qmdiaf29gtKiHkNgUqxQXq7RC675cftN99DfWU5aHdtDef",
        "QmbY7wUFqHYGxf5JjEBueeG6UMmVQjC7ow3QZVCwoGsWQU",
        "QmRVvhRbEgHsRDVEh43r7hsUUAB2hR8pRu25nMPh2V6XKC",
        "QmaXu4Hojyr28iJ9bX2rch23yZ99CjrfQPNGLPYJJNH9Yx",
        "QmRXfabmuWVWfij1gQjjGmDvQvffrA1tQxMczkx2kgQh6q",
        "QmTXV2UHFqFnh9R3xTPdQfy1s4mP3x6oF79mfH6CpJde7y",
        "QmY2TMTt6dY4rm6GfxFrjCacXZB8gjf661TWLJaTWmLfmn",
        "QmPJ6ud3ojaG2U4BbfQ1Vaf1LhFbsPuYNdEvHJvwaduToZ",
        "QmXicHJFFXNt1jwxLxzpv1WquxB77PadFwnq5Rtq2PCHnP",
        "QmREiy9HJsHfqVFyVRx9mWpT8JJi4QAvwREBavEBcoPmBd",
        "QmWmAPR27fLqZCqtm6NWYXYritU9LM6QNLP6pVXSezmYjR",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmWaQWfasRHMfH2m7n1N7mjg7jCU3LsHk3Vz7KpQ4VGfPh",
    },
  },
  B05_V3: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmV2TZb8pFXLNpEwZZ37j6UuaUKT16iqugHNaisaBhujMw",
    speed: 800,
    type: "scroll",
    title: "Hacia La Estrella con los arrieros",
    caption: "La Estrella que corona al pesebre de la montaña mágica",
    endContentTitle: "La Estrella que corona al pesebre de la montaña mágica",
    endContent_A: {
      title: "David sobre unos de los miradores más espectaculares de Cali",
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmTpS3K5TzRC7CrCn8EeqTDyPMGqLrDc8RRaqckXMyMBo6",
    },
    endContent_B: {
      title: "Fotografías aéreas de la Estrella",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmQpSwNEkMRPFTnUsnGmDKMSW39UFQhfs6QnLoFczLrtdD",
    },
  },
  B06_V2: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmbHpiXE4DfnF94CW1VMdQn8k9bRXu29WRKuVicCHRaQMK",
    speed: 800,
    type: "scroll",
    title: "Al campamento del M19",
    caption: "El M-19 en el territorio",
    endContentTitle: "El M-19 en el territorio",
    endContent_A: {
      title:
        "Sobre la importancia del campamento del M-19 para sus operaciones a nivel nacional",
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmbTfkPpaiuQ1uRKjF1juU2qnWCp2G46uZMjZbARSg56rS",
    },
    endContent_B: {
      title: "La loma se movio con el Eme",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmS9BC33sM8ikmwMMS4DTWfJqNUyKJyNrQDAa31LMYNcNf",
        "QmebmJuLa3Y4vsaCHwnubbw8c3skq5KPQvz3tVRgAkneQu",
        "QmSb2swCscC9fmffURt16J9hBbmgD1jonCNZbvwHvCg22t",
        "QmTpwGKpNZ8c4yvRt7FoB2kwqU8nzgRvs5prXxxroBugWs",
        "QmfZ1bHobn3xn2HFNSYMwefzxVxizWXvXsnEAsc2L6B7Fh",
        "QmTLD9pV2h9iXiY7BF1v11paJ53E3CKBzS5sAHc4ySWyCR",
        "QmPckBdzzCEwdVehaTWsezZYY9Kt7EgsZmsmoynYadbj4p",
        "QmYGBTww1Vjvy1R5BDQYBpn3EwDz36ViHXqnQ8sn8tqnD8",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmWprqTkf7bxwSFXmjnxiRzTU3NZi2ccqm1NmFdUaCDdoU",
    },
  },
  B06_V3: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmeFXh3FKT14Agho7SVVRJ9a1N1S2tCnxiAxqk2Ap25Sv7",
    speed: 800,
    type: "scroll",
    title: "Al campamento del M19 a caballo",
    caption: "El M-19 en el territorio",
    endContentTitle: "El M-19 en el territorio",
    endContent_A: {
      title:
        "David sobre la importancia del campamento del M-19 para sus operaciones a nivel nacional",
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmbTfkPpaiuQ1uRKjF1juU2qnWCp2G46uZMjZbARSg56rS",
    },
    endContent_B: {
      title: "La loma se movio con el Eme",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmS9BC33sM8ikmwMMS4DTWfJqNUyKJyNrQDAa31LMYNcNf",
        "QmebmJuLa3Y4vsaCHwnubbw8c3skq5KPQvz3tVRgAkneQu",
        "QmSb2swCscC9fmffURt16J9hBbmgD1jonCNZbvwHvCg22t",
        "QmTpwGKpNZ8c4yvRt7FoB2kwqU8nzgRvs5prXxxroBugWs",
        "QmfZ1bHobn3xn2HFNSYMwefzxVxizWXvXsnEAsc2L6B7Fh",
        "QmTLD9pV2h9iXiY7BF1v11paJ53E3CKBzS5sAHc4ySWyCR",
        "QmPckBdzzCEwdVehaTWsezZYY9Kt7EgsZmsmoynYadbj4p",
        "QmYGBTww1Vjvy1R5BDQYBpn3EwDz36ViHXqnQ8sn8tqnD8",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmZGTdRfYqSw1pVzS9Ky493vf51c14U1jiTUgaKV78G8Mh",
    },
  },
  B07_V2: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmNs8FN8ZUcC2KzFCdgddic72kwmosqnjdd866TopijbzT",
    speed: 800,
    type: "scroll",
    title: "El Monumento en contra de la opresión",
    caption:
      "Con los más berracos seguimos patoneando hacia el Monumento a la Opresión",
    endContentTitle: "El Monumento en contra de la opresión",
    endContent_A: {
      title:
        "David sobre la obra de los maestros Arturo Alape y Alfredo Castañeda",
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/Qma15M6DKMHEb2uAk8CegKWHkh7pwnd7n9M6yyEr4zVPVr",
    },
    endContent_B: {
      title: "Miradas al Monumento a la Opresión",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmNg5Knq4cLgjJnGAXsbPqruBdbaE5wEiGWyDs1NTrsSyi",
        "QmSdpmBqNG3MowLDfW45D7qsvqp3MWc3CXpg1iook3KXio",
        "QmTzispiorEbNSiut4X6VRBTNhKMX7VEZpr8iUooGqR7ZZ",
        "QmehgRsSRUUtsTMKUHBSY8DxTNMvh9yVsJYx4wDMgi3aSZ",
        "QmYoqpp3D9LCi2y4hz8q2svGneVevkrJAHAZQKgGjbyhRg",
        "Qmb1Ku9MfxB17cnjsJMT5945FcFkXsCRJFYgeUohXKpsXG",
      ],
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmXbikC7QXAqJBMMP8nVUMBnwP8NBpgqreFpAo6DKWnQtw",
    },
  },
  B07_V3: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmTSGeDfxodDxm4MKk85zykaF8UYJaeUN7XC3kFoeDZfZs",
    speed: 800,
    type: "scroll",
    title: "Terminamos la ruta con los arrieros y bajamos por el teleférico",
    caption: "La cultura del arriero",
    endContentTitle: "La cultura del arriero",
    endContent_A: {
      title: "'El Cuco', otra generación de arrieros en Siloé",
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmXAcTc9t3dWpUzPs4Y3PP78zTXu7VAdYiJoMJJGHvFinP",
    },
    endContent_B: {
      title: "La loma está hecha a lomo de caballo",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmbvZWbjVTpbTJGSNtRGMKrjrJ5wGLjF3T4TDwAEBwSxyV",
        "QmRrUbh8FbMaWNvQXgPhZ4nTPWmKeyoJiYF57XQNDpsmjQ",
        "QmPw2tx88mX2KVZYh5QqKn9PkezB4cphFVK34BMCtvmreP",
        "QmZfDtvh9ahrHet6YbTnvaCtJ4csFZPkktErCLWabLz53W",
        "QmWYqtkk9dpQSXQd1qqEmS8ZPbr67MVhfbNYdwLxmk8vyr",
        "QmX5NaF9sYYn5snm2zYcj5hraMZ2Ggjrrfks6G8PBVUhCV",
        "QmQUG5QW3P3WFko6W17XUAaTWSrCFfy3oxRrbPpmKrg95T",
        "QmWdKufwhAgZb1ZRHpLcNGPtXa8jVQ9WzfUPAUh1xPmDZT",
        "QmV11d2emmocjqpCn861zKb6SpcgBcHoGECzAPwcM3m7Mi",
        "QmcaGnv7gEi3L5cvn46ACkzWicn91unAEEVGq9Lbe17PE7",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmPLTZtJN7iQhwMu6fScnktkGcsgFdpE1P4f392whx5e3P",
    },
  },
  B08: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmUbGJufpBuZ1RjK8dP3rKiTpQDPJtnhCVgVUXBpxpzTqP",
    speed: 2000,
    type: "scroll",
    title: "Casa de Jaqueline Rentería",
    caption: "La casa de la doble medallista olímpica Jackeline Rentería",
    endContentTitle:
      "La casa de la doble medallista olímpica Jackeline Rentería",
    endContent_A: {
      title: "David sobre el ícono deportivo de la comunidad",
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmPtSWF9W1mx6NfW1CzX2dL4KUkS5H4kmQ1FTSCvs263y5",
    },
    endContent_B: {
      title: "Un monumento para la medallista en la glorieta de Siloé",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "Qmf3nEEnGFMoCtL6SyrQZVARmNYGZqu7QnCyV5ay8qiifq",
        "QmQiBpcaTZFTknvpRJLNF434zk3sRtdxkFFtjLZsZBo22t",
        "QmRvUFygS9tDtfgLSP5s8TWfDHZk5Qn8bPdLGAw6YofpXZ",
        "QmeR9LYbDk1X5hkiRFgcR3gWxn4gH9YHo24qYUzGcQbDKa",
        "QmUyYYeVxwwuMt1JRoowr6XaXAvqS1C1uRLkjM52zi3b9r",
        "QmXw83LPWHuDWiuDTWQwDxS71MnQJ8GBPvZWjMaMiEXY7U",
        "Qmexqo1Bva3jD89RBRX9jcZfVR2jWUzXrJX6vb2mVPXyF5",
        "Qmbf5WhuQRXZrFJzQSN1EEjRRTXzgtdtpiN6hUNuR1ehaX",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmNZGS5s9vvdoqEtnLKUXgvrLV3fFBwciM1Biq9mHsXbNf",
    },
  },
  B10: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmP46C1TERt1zfZzT8h7XAmHqsjekj5uaVUCosLeHd6Y6B",
    speed: 800,
    type: "scroll",
    title: "La Cascada",
    caption: "El nombre Siloé proviene de esta cascada",
    endContentTitle: "El nombre Siloé proviene de esta cascada",
    endContent_A: {
      title: "La hermosa cascada en el sector de la Playa",
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmXyUxuCr8E5xLXw4jhF8hLM1gXb8Qk5E5gmyoohNWNFB5",
    },
    endContent_B: {
      title:
        "Jhony sobre sus recuerdos de bañarse y pescar en las fuentes hídricas en Siloé",
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmRePMWipdHtemHrX7Lg49c6V3MnpKg78uwCnZYKPKJHM8",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmTdDnRqwB9FZsXy5uBAuHBrvrrbpZKUFbrNxY6bHF2156",
    },
  },
  B11: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmeEyYo5aZwHLuHiq2JU5qEZhyzb5vh7Q2PKdpMnBxBPva",
    speed: 800,
    type: "scroll",
    title: "Balcon hacia Brisas de Mayo",
    caption: "La última toma de tierra que resultó en un nuevo barrio",
    endContentTitle: "La última toma de tierra que resultó en un nuevo barrio",
    endContent_A: {
      title:
        "David sobre el origen del barrio Brisas de Mayo y la finca 'Siloé' de los alemanes",
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmWRzfxXEDDoyFZFFVdUhvWFBVVF5BZmMT3Nmys82TdP8m",
    },
    endContent_B: {
      title: "La toma de tierra del 3 de mayo del 1981 con apoyo del M-19",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmVQRvTTnnonk5b7zg5evFUwxWw15FFRH5Ta94UqQZej9a",
        "QmXGonvVHW759FeGgUxWF5wc2f8XUfDpTpv3QC6tuZvMmg",
        "QmYcWw6L3WoF8UkXShYoBESF4S2eRpd6EFGZwJPxLMTujZ",
        "QmfTAdNWQyV6u33yFzUkwZmZbb1LmKm8MqqDa7Ghf1jqZJ",
        "QmcC5Y13n7MfTTv1LP6AtajPsWWCSWDUsDn5xYfRfX94cs",
        "QmPmnKV73WbytEyt1RKKiBwRP5GENc3tNBMRgjhqmPLY8F",
        "QmRzQsm2pmZZCdwewmoXyXUcxbbLjMvo6iJHG7gAoDxr7a",
        "QmXKW1zxZAzqZr74rLzfsUEw3UZ3fW6SMuvfNQuY8mMCdo",
        "QmXj9DoujAxLxbQtmfsg2SzNgEHzQj1qsAaNGMQFnDjNSj",
        "QmUb3b17KBKxgsdpxByn8afdcTua2rwTPFHiMs3jUMm41X",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/Qmd8wc1wCKoKhnDwVqwTqDbmAWySe69nxHE9mGtzXm7xYg",
    },
  },
  C01: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmeFvqmVBFgnW3YgjnoayayxD6W7A8JguTvMNf9rnPJ5Zr",
    speed: 800,
    type: "scroll",
    title: "Estación de Mio Cable",
    caption: "La historia del teleférico",
    endContentTitle: "La historia del teleférico",
    endContent_A: {
      title: "David sobre el sueño de un teleférico en Siloé",
      type: "video",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmPasYvQ5b2mbgJXyYoSKM2VjD7WPJyGzMchZLv7D5KiUw",
    },
    endContent_B: {
      title: "Así se construyó el cable que se inauguró en 2015",
      type: "photo",
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/",
      images: [
        "QmfRUoz6mdxrQThSP8wjUT8wHPdf5dKVUXoL5VwcGQr9wK",
        "QmbNeVpXAJgPGPqTQ2945zpvxYtiBWUQrz4yv2FyD4DqQu",
        "QmdXCMU8cFvDMFsE515azR8QZTLyPZ6u6B6SjcpiVSU4cq",
        "Qmf5HqsLV2tc5Dnf9r1mR6jZM67X9fUSTxcNwQxB7ckFnh",
        "QmPfWsaNz7YYrqMAe4a4QqUGjiEg381RE8Me4WPUAd4jAt",
        "QmQhPjBusux3ytueTsfQyHMexmrNUQn5sESYFjVV8fgadE",
        "QmPRfGXz1TSULDfexf98oWtxeg9NaJ8kFWqbdSLJJ9Ft1s",
        "QmPq2vRTyiTvWxS82W6VSJQEMTgK1ggZ6nMu4kK5JLiiZY",
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
      src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/Qme1omCe7bW727yZeuqixezNkAkRsVjQjtSodKapHbhwcc",
    },
  },
  C02v1a: {
    // Miocable trayecto completo
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmVgqg4VUhe4eyaDV8P1kz49QytteRqUcSE2PsPdrC61qw",
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
    // src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmcdH4qdwVZBBHXKdwEQiVYCCciJ2B7tTmpNThBwTz4aFT",
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmVgqg4VUhe4eyaDV8P1kz49QytteRqUcSE2PsPdrC61qw",
    type: "video",
    title: "MioCable",
    startTime: 309.9,
    map: {
      points: [
        [3.4200658882636485, -76.55793973085903],
        [3.415544908483542, -76.54925502064263],
      ],
    },
  },
  C02v1c: {
    // Miocable trayecto desde la ultima
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmVgqg4VUhe4eyaDV8P1kz49QytteRqUcSE2PsPdrC61qw",
    type: "video",
    title: "MioCable",
    startTime: 187,
    map: {
      points: [
        [3.4200658882636485, -76.55793973085903],
        [3.415544908483542, -76.54925502064263],
      ],
    },
  },
  C02v2: {
    src: "https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmV9oPR1TbQ3rYKZUFT69XDshwWBK9u8VaE4c37ycYfsYk",
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
export const videoScrollPath = "/ruta-de-la-memoria";
