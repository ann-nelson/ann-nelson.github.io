document.addEventListener('DOMContentLoaded',() => {
    //select all <figure> elements 
    const figures = document.querySelectorAll('figure');
    //loop each figure element
    figures.forEach((figure) => {
        //create new <div> to serve as hover bubble
        const bubble = document.createElement('div');
        bubble.className = 'hover-bubble';
        //set innerhtml to link to gallery page
        bubble.innerHTML = `<a href="gallery.html">View More in Gallery</a>`;
        //append to hover bubble to currrent figure
        figure.appendChild(bubble);
    });
});