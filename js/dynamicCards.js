document.addEventListener("DOMContentLoaded", function () {
    const imgFolder = "assets/img/";
    const images = [
        "dunalastair.jpeg",
        "producto2.jpg",
        "producto3.png"
    ]; // Esta lista se puede obtener dinámicamente desde un backend

    const container = document.getElementById("productContainer");

    images.forEach((img, index) => {
        const card = document.createElement("div");
        card.className = "col mb-5";

        card.innerHTML = `
            <div class="card h-100">
                <!-- Product image -->
                <img class="card-img-top" src="${imgFolder + img}" alt="Producto ${index + 1}" />
                <!-- Product details -->
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">Producto ${index + 1}</h5>
                        <div class="d-flex justify-content-center small text-warning mb-2">
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                        </div>
                        <!-- Product price -->
                        $2.000
                    </div>
                </div>
                <!-- Product actions -->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="https://wa.me/56951549184?text=Hola, Me gustaria un Llavero del colegio Dunalastair">Solicita vía Whatsapp</a></div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
});
