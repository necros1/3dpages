document.addEventListener("DOMContentLoaded", function () {
    const imgFolder = "assets/img/";
    const images = [ 
        { name: "Llavero Dunalastair", img: "dunalastair.jpeg", price:"$2.000" },
        { name: "Llavero Lincoln College", img: "lincoln_college.jpeg", price:"$2.000" },
        { name: "Llavero Palmares", img: "palmares.jpeg", price:"$2.000" },
        { name: "Llavero Pumahue", img: "pumahue.jpeg", price:"$2.000" },
        { name: "Llavero Weston Academy", img: "weston_academy.jpeg", price:"$2.000" }
    ];

    const container = document.getElementById("productContainer");

    images.forEach((item) => {
        const card = document.createElement("div");
        card.className = "col mb-5";

        card.innerHTML = `
            <div class="card h-100">
                <img class="card-img-top" src="${imgFolder + item.img}" alt="${item.name}" />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">${item.name}</h5>
                        <div class="d-flex justify-content-center small text-warning mb-2">
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                        </div>
                        ${item.price}
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="https://wa.me/56951549184?text=Hola, Me gustaria un ${item.name}">Solicita vía Whatsapp</a></div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
});
