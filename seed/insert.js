// insert.js

const { MongoClient } = require("mongodb");

// 🧠 Pega tu string de conexión acá
const uri = "mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/myDatabase";

const client = new MongoClient(uri);
const products = [
    { 
        id: 1, name: "Llavero Dunalastair", img: "dunalastair.jpeg", price: 2000,
        formattedPrice: "$2.000", category: "Colegio", description: "Llavero personalizado con el escudo del Colegio Dunalastair. Ideal para estudiantes y exalumnos.",
        stockAvailability: true, rating: 5, featured: false, discount: null
    },
    { 
        id: 2, name: "Llavero Lincoln College", img: "lincoln_college.png", price: 2000,
        formattedPrice: "$2.000", category: "Colegio", description: "Llavero con el logo de Lincoln College. Ideal para estudiantes y exalumnos.",
        stockAvailability: true, rating: 5, featured: false, discount: null
    },
    {
        id: 3,  
        name: "Llavero Colegio Palmares", img: "palmares.jpeg", price: 2000,
        formattedPrice: "$2.000", category: "Colegio", description: "Llavero con el logo del colegio Palmares. Ideal para estudiantes y exalumnos.", 
        stockAvailability: true, featured: true, discount: null
    },
    { 
        id: 4, 
        name: "Llavero Colegio Pumahue", img: "pumahue.jpeg", price: 2000, 
        formattedPrice: "$2.000", category: "Colegio", description: "Llavero con el logo del colegio Pumahue. Ideal para estudiantes y exalumnos.", 
        stockAvailability: true, featured: true, discount: null
    },
    { 
        id: 5, 
        name: "Llavero Weston Academy", img: "weston_academy.jpeg", price: 2000, 
        formattedPrice: "$2.000", category: "Colegio", description: "Llavero con el logo del colegio Weston Academy. Ideal para estudiantes y exalumnos.", 
        stockAvailability: true, featured: true, discount: null
    },
    { 
        id: 6, name: "Iron Man", img: "iron_man.png", price: 65000,
        formattedPrice: "$65.000", category: "figura", description: "Figura de Iron Man de alta calidad. Diseño detallado y acabado perfecto.",
        stockAvailability: true, featured: true, discount: null
    },
    { 
        id: 7, name: "Abecedario Infantil", img: "abecedario.jpeg", price: 12000,
        formattedPrice: "$12.000", category: "Colegio", description: "Ayuda a tu hijo/a con este lindo Abecedario.",
        stockAvailability: true, featured: true, discount: null
    },
    { 
        id: 8, name: "Regla 30cms", img: "regla_30_cms.jpeg", price: 1500,
        formattedPrice: "$1.500", category: "Colegio", description: "Regla 30cms con letras y diseños",
        stockAvailability: true, featured: true, discount: null
    },
    { 
        id: 9, name: "Transportador 180°", img: "transportador_180.jpeg", price: 1500,
        formattedPrice: "$1.500", category: "Colegio", description: "Transportador 180° con guia para diagramar angulos.",
        stockAvailability: true, featured: true, discount: null
    },
    { 
        id: 10, name: "Perrito Completero", img: "perro_completero.jpeg", price: 3500,
        formattedPrice: "$3.500", category: "Hogar", description: "Hermoso Perrito Completero",
        stockAvailability: true, featured: true, discount: null
    },
    { 
        id: 11, name: "Clip para cerrar bolsas", img: "mc_donald_clip.webp", price: 12000,
        formattedPrice: "$12.000", category: "Hogar", description: "Si no sabes como cerrar tus bolsas de papas fritas una vez abiertas, esta es una excelente opcion para ti. Incluye 6 clips diseño de papas fritas y contenedor para su guardado",
        stockAvailability: true, featured: true, discount: null
    },
    { 
        id: 12, name: "Llavero Escuela Santa Teresa de Avila", img: "escuela_santa_teresa_de_avila.png", price: 2000,
        formattedPrice: "$2.000", category: "Colegio", description: "Llavero personalizado con el escudo de la Escuela Santa Teresa de Avila.",
        stockAvailability: true, rating: 5, featured: false, discount: null
    },
    { 
        id: 13, name: "Placa identificación de Gatitos. ", img: "placa_gatitos.png", price: 1000,
        formattedPrice: "$1.000", category: "mascotas", description: "Llavero personalizado con el nombre de tu gatito",
        stockAvailability: true, rating: 5, featured: false, discount: null
    },
    { 
        id: 14, name: "Placa identificación de Perritos. ", img: "placa_perritos.png", price: 1000,
        formattedPrice: "$1.000", category: "mascotas", description: "Llavero personalizado con el nombre de tu perrito",
        stockAvailability: true, rating: 5, featured: false, discount: null
    },
    { 
        id: 15, name: "Porta credencial Minecraft ", img: "minecraft_card_id.webp", price: 2500,
        formattedPrice: "$2.500", category: "card_id", description: "Entretenido porta credencial del famoso juego Minecraft",
        stockAvailability: true, rating: 5, featured: false, discount: null
    },
    { 
        id: 16, name: "Porta credencial Brawl Stars ", img: "brawl_stars_card_id.png", price: 2500,
        formattedPrice: "$2.500", category: "card_id", description: "Entretenido porta credencial del famoso juego Brawl Stars",
        stockAvailability: true, rating: 5, featured: false, discount: null
    },
    { 
        id: 17, name: "Tabla de multiplicar", img: "tabla_multiplicar.webp", price: 6000,
        formattedPrice: "$6.000", category: "Colegio", description: "si estas comenzando con las tablas de multiplicar esta es ideal para ayudar en el proceso.",
        stockAvailability: true, rating: 5, featured: false, discount: null
    },
    { 
        id: 18, name: "Porta credencial Stitch", img: "stitch.png", price: 2500,
        formattedPrice: "$2.500", category: "card_id", description: "Entretenido porta credencial del famoso personaje de disney Stitch",
        stockAvailability: true, rating: 5, featured: false, discount: null
    },
    { 
        id: 19, name: "Porta credencial Pokémon", img: "pokemon_card_id.png", price: 2500,
        formattedPrice: "$2.500", category: "card_id", description: "Entretenido porta credencial de la famosa seria de Pokémon",
        stockAvailability: true, rating: 5, featured: false, discount: null
    },
    { 
        id: 20, name: "Porta credencial Minions", img: "card_id_minions.png", price: 2500,
        formattedPrice: "$2.500", category: "card_id", description: "Entretenido porta credencial de los queridos personajes de los minions",
        stockAvailability: true, rating: 5, featured: false, discount: null
    },
    { 
        id: 21,
        name: "Contenedor Apilable para Huevos – ¡Ahorra espacio y gana orden!",
        img: "contenedor_huevos_apilable.webp",
        price: 4500,
        formattedPrice: "$4.500",
        category: "Hogar",
        description: "📦 Capacidad de cada contedor para 10 huevos\n✅ Diseño apilable y compacto\n✅ Ideal para el refrigerador\n✅ Práctico, limpio y duradero.",
        stockAvailability: true,
        featured: true,
        discount: null
    },
    {
        id: 22,
        name: "Huevo Conejito Decorativo – Sorpresas de Pascua",
        img: "conejito.webp",
        price: 2000,
        formattedPrice: "$2.000",
        category: "pascuas",
        description: "🎁 ¡Haz mágica esta Pascua!\nUn adorable huevo con orejitas de conejo, ideal para esconder dulces, monedas o pequeñas sorpresas. Perfecto para búsquedas de Pascua, decorar tu hogar o sorprender a alguien especial.\n\n🐣 Características destacadas:\n✅ Diseño divertido y colorido\n✅ Se abre en dos partes para esconder tesoros\n✅ Ideal para niños y decoraciones temáticas\n✅ Reutilizable año tras año\n✅ Tamaño compacto y fácil de manipular\n\n💡 ¡Combínalo con más colores para una búsqueda inolvidable!",
        stockAvailability: true,
        featured: true,
        discount: null
      },
      {
        id: 23,
        name: "Set de 3 Conejitos Decorativos – Estilo y ternura en Pascua",
        img: "conejito_2.webp",
        price: 1000,
        formattedPrice: "$1.000",
        category: "pascuas",
        description: "🐰 Dale un toque adorable a tus espacios con este set de conejitos decorativos en tonos pastel. Inspirados en la dulzura de la Pascua, su diseño en espiral agrega un toque elegante y moderno.\n\n🎨 Colores suaves y combinables\n🌀 Diseño espiral único y llamativo\n🌸 Perfectos para centros de mesa, repisas o regalos\n📦 Incluye múltiples tamaños para mayor versatilidad\n\nDecora con encanto y estilo, ¡haz que tu hogar brille esta temporada!",
        stockAvailability: true,
        featured: false,
        discount: null
      },
      {
        id: 24,
        name: "Easter Kinder Bunny – Guarda tu Kinder Sorpresa con estilo",
        img: "conejito_4.webp",
        price: 1500,
        formattedPrice: "$1.500",
        category: "pascuas",
        description: "🐰 Diseño encantador en forma de conejito\n✅ Ideal para búsquedas de huevos o regalos personalizados\n✅ Reutilizable y perfecto para decorar\n🥚 Tamaño justo para huevos de chocolate tipo Kinder\n\n¡Haz que cada descubrimiento sea aún más especial!",
        stockAvailability: true,
        featured: true,
        discount: null
      },
      {
        id: 25,
        name: "Easter Kinder Bunny 2– Guarda tu Kinder Sorpresa con estilo",
        img: "conejito_3.webp",
        price: 2000,
        formattedPrice: "$2.000",
        category: "pascuas",
        description: "🐰 Diseño encantador en forma de conejito\n✅ Ideal para búsquedas de huevos o regalos personalizados\n✅ Reutilizable y perfecto para decorar\n🥚 Tamaño justo para huevos de chocolate tipo Kinder\n\n¡Haz que cada descubrimiento sea aún más especial!",
        stockAvailability: true,
        featured: true,
        discount: null
      }
      

];

async function run() {
  try {
    await client.connect();
    const db = client.db("myDatabase"); // poné el nombre de tu base de datos
    const collection = db.collection("products");

    await collection.deleteMany({}); // limpia antes de insertar
    const result = await collection.insertMany(products);

    console.log(`Insertados ${result.insertedCount} productos.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
