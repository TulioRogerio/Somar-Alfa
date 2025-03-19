document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os itens do menu que têm submenu
    let menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            let submenu = this.nextElementSibling; // Pega o submenu correspondente
            
            // Verifica se está expandido e alterna entre expandir/recolher
            if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
                this.classList.remove("active"); // Remove a classe ativa
            } else {
                submenu.style.maxHeight = submenu.scrollHeight + "px"; // Expande
                this.classList.add("active"); // Adiciona a classe ativa
            }
        });
    });
});
