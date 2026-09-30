// Casa do Seu Kapa
// Interações do site

document.addEventListener("DOMContentLoaded", function () {

    // Rolagem suave para as seções do site
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const destino = document.querySelector(
                this.getAttribute("href")
            );

            if (destino) {
                event.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});
