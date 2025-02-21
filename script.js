// script.js
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-btn");
    const images = document.querySelectorAll(".image");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            images.forEach(img => {
                if (category === "all" || img.getAttribute("data-category") === category) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                }
            });
        });
    });
});
