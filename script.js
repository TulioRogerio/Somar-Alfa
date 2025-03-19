// Carregar dinamicamente o menu.html dentro do index.html
document.addEventListener("DOMContentLoaded", function () {
    fetch("menu.html")
        .then(response => response.text()) // Converte o conteúdo para texto
        .then(data => {
            document.getElementById("menu-container").innerHTML = data; // Insere no div do menu
            ativarEventosMenu(); // Chama a função que controla os submenus
        })
        .catch(error => console.error("Erro ao carregar o menu:", error));
});

// Função que ativa os submenus
function ativarEventosMenu() {
    let menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            let submenu = this.nextElementSibling;

            if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
                this.classList.remove("active");
            } else {
                submenu.style.maxHeight = submenu.scrollHeight + "px";
                this.classList.add("active");
            }
        });
    });
}
