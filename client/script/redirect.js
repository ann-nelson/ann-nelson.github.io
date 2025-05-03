document.addEventListener('DOMContentLoaded',() => {
    const figures = document.querySelectorAll('figure');

    figures.forEach((figure) => {
        const bubble = document.createElement('div');
        bubble.className = 'hover-bubble';
        bubble.innerHTML = `<a href="gallery.html">View More in Gallery</a>`;
        figure.appendChild(bubble);
    });
});