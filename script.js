document.addEventListener("DOMContentLoaded", function() {
    fetch("menu.html") // Carrega o menu
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;
            ativarMenu(); // Ativa o botão hamburguer
            ativarSubmenus(); // Ativa os submenus
        })
        .catch(error => console.error("Erro ao carregar o menu:", error));
});

// Função para abrir/fechar o menu lateral
function ativarMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        content.classList.toggle("open");
    });
}

// Função para abrir/fechar submenus
function ativarSubmenus() {
    document.querySelectorAll(".menu-item").forEach(menuItem => {
        menuItem.addEventListener("click", function(event) {
            event.preventDefault();
            let parentLi = this.parentElement;
            let submenu = parentLi.querySelector(".submenu");

            if (submenu) {
                // Fecha outros submenus antes de abrir este
                document.querySelectorAll(".submenu").forEach(sub => {
                    if (sub !== submenu) {
                        sub.style.maxHeight = null;
                        sub.parentElement.classList.remove("open");
                    }
                });

                // Alterna o submenu clicado
                if (submenu.style.maxHeight) {
                    submenu.style.maxHeight = null;
                    parentLi.classList.remove("open");
                } else {
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                    parentLi.classList.add("open");
                }
            }
        });
    });
}
