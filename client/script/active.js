const links = document.querySelectorAll('nav a');

const currentPath = window.location.pathname.split('/').pop(); 
console.log("Current path:", currentPath);

links.forEach((link) => {
    const linkPath = new URL(link.href).pathname.split('/').pop(); 
    console.log("Link path:", linkPath);

    if (linkPath === currentPath) {
        link.classList.add('active');
    }
});
