// Función para hacer que la navegación entre secciones sea fluida
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Desplazarse suavemente a la sección correspondiente
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Ajustamos el desplazamiento para que la sección no quede tapada por el menú
            behavior: 'smooth'
        });
    });
});
