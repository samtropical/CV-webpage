// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll smoothly to the section
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for the sticky nav bar
            behavior: 'smooth'
        });
    });
});
