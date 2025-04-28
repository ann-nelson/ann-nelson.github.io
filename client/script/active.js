    // Get all anchor links in the navigation
    const links = document.querySelectorAll('nav a');

    const currentUrl = window.location.href;

    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
