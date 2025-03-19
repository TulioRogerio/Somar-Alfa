document.addEventListener("DOMContentLoaded", function() {
    fetch("menu.html") // Carrega o menu
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;
            ativarMenu();
            ativarSubmenus();
        })
        .catch(error => console.error("Erro ao carregar o menu:", error));
});

// Função para abrir/fechar o menu lateral
function ativarMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        content.classList.toggle("open");
    });
}

// Função para abrir/fechar submenus
function ativarSubmenus() {
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("menu-item")) {
            event.preventDefault();
            let submenu = event.target.nextElementSibling;

            if (submenu && submenu.classList.contains("submenu")) {
                submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
            }
        }
    });
}
