document.addEventListener("DOMContentLoaded", function () {
    const imgFolder = "assets/img/";
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
          },
          {
            id: 26,
            name: "Huevito Naruto – ¡El ninja más kawaii de la Pascua!",
            img: "huevito_naruto.webp",
            price: 3900,
            formattedPrice: "$3.900",
            category: "pascuas",
            description: "🍥🥚 ✅ Diseño inspirado en Naruto Uzumaki\n✅ Ideal para esconder dulces, sorpresas o regalos\n✅ ¡Perfecto para decorar o regalar a fans del anime!\n✅ Reutilizable y resistente\n\n¡Conviértete en el Hokage de la búsqueda de huevos esta Pascua!",
            stockAvailability: true,
            featured: true,
            discount: null
          },
          {
            id: 27,
            name: "Huevito Minecraft – El tesoro pixelado de Pascua",
            img: "huevito_minecraft.webp",
            price: 3500,
            formattedPrice: "$3.500",
            category: "pascuas",
            description: "🟩⛏️ ¡Este huevito es un verdadero bloque de sorpresas! Inspirado en el mundo de Minecraft, es ideal para esconder dulces o regalar a los fans del juego.\n\n✅ Diseño cúbico al estilo pixel art\n✅ Perfecto para esconder huevos sorpresa o pequeños regalos\n✅ Impreso en 3D con detalles en cada bloque\n✅ ¡Un must-have para los gamers esta Pascua!\n\n¡Haz que tu búsqueda de huevos sea épica con este huevito de Minecraft!",
            stockAvailability: true,
            featured: true,
            discount: null
          },
          {
            id: 28,
            name: "Huevitos Yoshi – ¡Directo del Reino Champiñón!",
            img: "Yoshi.webp",
            price: 3500,
            formattedPrice: "$3.500",
            category: "pascuas",
            description: "✅ Disponible en varios colores: verde, rojo, púrpura y más\n✅ Impresión 3D de alta calidad con acabado suave\n✅ Ideal para regalos, decoraciones o esconder sorpresas\n✅ ¡Un must para fans de Mario y Yoshi!\n\n¡Atrévete a coleccionarlos todos y haz de tu Pascua una aventura pixelada!",
            stockAvailability: true,
            featured: false,
            discount: null
          },
          {
            id: 29,
            name: "Conejito Kinder Sorpresa – Soporte 3D para tu huevito",
            img: "conejito_kinder_sorpresa.webp",
            price: 1500,
            formattedPrice: "$1.500",
            category: "pascuas",
            description: "✅ Compatible con huevos tipo Kinder Sorpresa\n✅ Diseño en 3D tierno y funcional\n✅ Ideal para centros de mesa o regalos personalizados\n✅ ¡Una combinación perfecta entre ternura y chocolate!\n\n¡Llená tu Pascua de dulzura y estilo con este conejito!",
            stockAvailability: true,
            featured: false,
            discount: null
          },
          {
            id: 30,
            name: "Decoración Happy Easter – Ornamento Pascua",
            img: "happy_easter_decoration.webp",
            price: 2000,
            formattedPrice: "$2.000",
            category: "pascuas",
            description: "✨🪺 Esta decoración 'Happy Easter' es ideal para agregar un toque elegante y festivo a tus celebraciones de Pascua. Con un diseño limpio y orejitas de conejo asomando por detrás, ¡es imposible no amarla!\n\n📏 Medidas: 10.7 cm x 5.2 cm x 1.25 cm\n✅ Perfecta para centros de mesa o repisas\n✅ Impresa en 3D con materiales de alta calidad\n✅ Estilo minimalista con detalles encantadores\n\n¡Decorá tu hogar con espíritu pascuero y mucho estilo!",
            stockAvailability: true,
            featured: false,
            discount: null
          },
          {
            id: 31,
            name: "Topper Cake Happy Easter",
            img: "toper_cake_1.webp",
            price: 1000,
            formattedPrice: "$1.000",
            category: "pascuas",
            description: "Ideal para decoración de tortas de Pascua.",
            stockAvailability: true,
            featured: false,
            discount: null
          },
          {
            id: 32,
            name: "Topper Cake Happy Easter",
            img: "toper_cake_2.webp",
            price: 1000,
            formattedPrice: "$1.000",
            category: "pascuas",
            description: "Ideal para decoración de tortas de Pascua.",
            stockAvailability: true,
            featured: false,
            discount: null
          },
          {
            id: 33,
            name: "Topper Cake Happy Easter",
            img: "toper_cake_3.webp",
            price: 1000,
            formattedPrice: "$1.000",
            category: "pascuas",
            description: "Ideal para decoración de tortas de Pascua.",
            stockAvailability: true,
            featured: false,
            discount: null
          },
          {
            id: 34,
            name: "Topper Cake Happy Easter",
            img: "toper_cake_4.webp",
            price: 1000,
            formattedPrice: "$1.000",
            category: "pascuas",
            description: "Ideal para decoración de tortas de Pascua.",
            stockAvailability: true,
            featured: false,
            discount: null
          },
          {
            id: 35,
            name: "Topper Cake Happy Easter",
            img: "toper_cake_5.webp",
            price: 1000,
            formattedPrice: "$1.000",
            category: "pascuas",
            description: "Ideal para decoración de tortas de Pascua.",
            stockAvailability: true,
            featured: false,
            discount: null
          },
    ];

    
    
    

    const container = document.getElementById("productContainer");
    const noResults = document.getElementById("no-results");
    const filterCategory = document.getElementById("filter-category");
    const filterSort = document.getElementById("filter-sort");

    function filterAndSortProducts() {
        let filteredProducts = [...products];

        // Aplicar filtrado por categoría
        const selectedCategory = filterCategory.value;
        if (selectedCategory !== "all") {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }

        // Aplicar ordenamiento
        const selectedSort = filterSort.value;
        if (selectedSort === "price-asc") {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (selectedSort === "price-desc") {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (selectedSort === "name-asc") {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (selectedSort === "name-desc") {
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        }

        renderProducts(filteredProducts);
    }

    function renderProducts(productsToRender) {
        container.innerHTML = '';
        if (productsToRender.length === 0) {
            noResults.classList.remove('d-none');
        } else {
            noResults.classList.add('d-none');
            productsToRender.forEach(product => {
                const formattedDescription = product.description.replace(/\n/g, '<br>');
                const productCard = document.createElement("div");
                productCard.classList.add("col-lg-4", "col-md-6", "mb-4");
                productCard.innerHTML = `
                    <div class="card product-card">
                        <img src="${imgFolder}${product.img}" class="card-img-top product-image" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="text-muted small">${formattedDescription}</p>
                            <p class="card-text"><strong>Precio: ${product.formattedPrice}</strong></p>
                        </div>
                    </div>
                `;
                container.appendChild(productCard);
            });
        }
    }

    // Escuchar cambios en los filtros
    filterCategory.addEventListener("change", filterAndSortProducts);
    filterSort.addEventListener("change", filterAndSortProducts);

    // Renderizar productos iniciales
    renderProducts(products);
});
