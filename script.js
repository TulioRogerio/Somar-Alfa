document.addEventListener("DOMContentLoaded", function() {
    fetch("menu.html") // Busca o conteúdo do menu
        .then(response => response.text()) // Converte para texto
        .then(data => {
            document.getElementById("menu-container").innerHTML = data; // Insere na página
            ativarSubmenus(); // Chama a função para interatividade do menu
        })
        .catch(error => console.error("Erro ao carregar o menu:", error));
});

// Função para expandir/recolher submenus
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
