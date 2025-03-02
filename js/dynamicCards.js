document.addEventListener("DOMContentLoaded", function () {
    const imgFolder = "assets/img/";
    const products = [
        { 
            id: 1, name: "Llavero Dunalastair", img: "dunalastair.jpeg", price: 2000,
            formattedPrice: "$2.000", category: "llavero", description: "Llavero personalizado con el escudo del Colegio Dunalastair. Material PLA resistente y duradero.",
            stockAvailability: true, rating: 5, featured: false, discount: null
        },
        { 
            id: 2, name: "Llavero Lincoln College", img: "lincoln_college.png", price: 2000,
            formattedPrice: "$2.000", category: "llavero", description: "Llavero con el logo de Lincoln College. Ideal para estudiantes y exalumnos.",
            stockAvailability: true, rating: 5, featured: false, discount: null
        },
        {
            id: 3,  
            name: "Llavero Colegio Palmares", img: "palmares.jpeg", price:"$2.000",
            formattedPrice: "$2.000", category: "llavero", description: "Llavero con el logo del colegio Palmares. Ideal para estudiantes y exalumnos.", 
            stockAvailability: true, featured: true, discount: null
        },
        { 
            id: 4, 
            name: "Llavero Colegio Pumahue", img: "pumahue.jpeg", price:"$2.000", 
            formattedPrice: "$2.000", category: "llavero", description: "Llavero con el logo del colegio Pumahue. Ideal para estudiantes y exalumnos.", 
            stockAvailability: true, featured: true, discount: null
        },
        { 
            id: 5, 
            name: "Llavero Weston Academy", img: "weston_academy.jpeg", price:"$2.000", 
            formattedPrice: "$2.000", category: "llavero", description: "Llavero con el logo del colegio Weston Academy. Ideal para estudiantes y exalumnos.", 
            stockAvailability: true, featured: true, discount: null
        },
        { 
            id: 6, name: "Iron Man", img: "iron_man.png", price: 65000,
            formattedPrice: "$65.000", category: "figura", description: "Figura de Iron Man de alta calidad. Diseño detallado y acabado perfecto.",
            stockAvailability: true, featured: true, discount: null
        }
    ];

    const container = document.getElementById("productContainer");
    const noResults = document.getElementById("no-results");
    const filterCategory = document.getElementById("filter-category");
    const filterSort = document.getElementById("filter-sort");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    function generateStarRating(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<div class="bi-star-fill"></div>';
            } else if (i - 0.5 <= rating) {
                stars += '<div class="bi-star-half"></div>';
            } else {
                stars += '<div class="bi-star"></div>';
            }
        }
        return stars;
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
                        <img src="${imgFolder}${product.img}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-price">Valor: ${product.formattedPrice}</p>
                            
                        </div>
                    </div>
                `;
                container.appendChild(productCard);
            });
        }
    }

    function filterProducts() {
        let filteredProducts = products;
        const category = filterCategory.value;
        const sortOption = filterSort.value;
        const searchText = searchInput.value.toLowerCase();

        if (category !== "all") {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }
        if (searchText) {
            filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(searchText));
        }
        if (sortOption === "price-low-high") {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price-high-low") {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        renderProducts(filteredProducts);
    }

    filterCategory.addEventListener("change", filterProducts);
    filterSort.addEventListener("change", filterProducts);
    searchButton.addEventListener("click", filterProducts);
    searchInput.addEventListener("keyup", filterProducts);

    renderProducts(products);
});
