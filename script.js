document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/llaveros/Colegio/dunalastair.jpeg",
        "images/llaveros/Colegio/palmares.jpeg",
        "images/llaveros/Colegio/pumahue.jpeg",
        "images/llaveros/Colegio/Weton_Academy.jpeg"
    ];
    
    const gallery = document.getElementById("gallery");
    const mainImage = document.getElementById("main-image");
    mainImage.src = images[0];
    
    images.forEach((imgSrc, index) => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-3", "mt-1");
        
        const imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.setAttribute("data-mdb-img", imgSrc);
        imgElement.alt = `Gallery image ${index + 1}`;
        imgElement.classList.add("w-100");
        
        imgElement.addEventListener("click", () => {
            mainImage.src = imgSrc;
        });
        
        colDiv.appendChild(imgElement);
        gallery.appendChild(colDiv);
    });
});