document.addEventListener('DOMContentLoaded', function() {
    const sloganElement = document.getElementById('slogan');

    const slogans = [
        "Art Made. Dreams Built",
        "Creativity in Every Stroke",
        "Building Dreams, One Brush at a Time",
        "Designs that Inspire"
    ];

    let sloganIndex = 0;

    setInterval(() => {
        sloganIndex = (sloganIndex + 1) % slogans.length;
        sloganElement.innerHTML = `<em>${slogans[sloganIndex]}</em>`;
    }, 5000); 
});