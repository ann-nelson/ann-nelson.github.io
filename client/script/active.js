document.addEventListener("DOMContentLoaded", function () {
const links = document.querySelectorAll('nav a');

const currentPage = window.location.pathname.split('/').pop(); 
console.log("Current page:", currentPage);

links.forEach((link) => {
    const linkPage = new URL(link.href).pathname.split('/').pop();
    console.log("Link page:", linkPage);

    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});
});