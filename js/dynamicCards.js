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
            id: 13, name: "Placa identificación de Gatitos. ", img: "placa_gatitos.jpeg", price: 1000,
            formattedPrice: "$1.000", category: "mascotas", description: "Llavero personalizado con el nombre de tu gatito",
            stockAvailability: true, rating: 5, featured: false, discount: null
        },
        { 
            id: 14, name: "Placa identificación de Perritos. ", img: "placa_perritos.jpeg", price: 1000,
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
                const productCard = document.createElement("div");
                productCard.classList.add("col-lg-4", "col-md-6", "mb-4");
                productCard.innerHTML = `
                    <div class="card product-card">
                        <img src="${imgFolder}${product.img}" class="card-img-top product-image" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="text-muted small">${product.description}</p>
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
