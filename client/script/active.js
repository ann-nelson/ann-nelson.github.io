document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname;


    links.forEach((link) => {
        const linkPath = new URL(link.href).pathname'
        console.log("Link page:", linkPage);

        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});