document.addEventListener("DOMContentLoaded", function() {
    fetch("menu.html") // Carrega o menu
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;
            ativarSubmenus(); // Inicia a funcionalidade dos submenus
        })
        .catch(error => console.error("Erro ao carregar o menu:", error));
});

// Função para expandir/recolher os submenus ao clicar
function ativarSubmenus() {
    document.querySelectorAll(".menu > li > a").forEach(menuItem => {
        menuItem.addEventListener("click", function(event) {
            event.preventDefault();
            let submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains("submenu")) {
                submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
            }
        });
    });
}
