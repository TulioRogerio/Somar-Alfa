document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".menu > li > a").forEach(menuItem => {
        menuItem.addEventListener("click", function(event) {
            event.preventDefault();
            let submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains("submenu")) {
                submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
            }
        });
    });
});
