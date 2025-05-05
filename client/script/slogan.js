document.addEventListener('DOMContentLoaded', function() {
    //get element where slogan will be displayed
    const sloganElement = document.getElementById('slogan');
//array of slogans to cycle through
    const slogans = [
        "Art Made. Dreams Built",
        "Creativity in Every Stroke",
        "Building Dreams, One Brush at a Time",
        "Designs that Inspire"
    ];
//start with first slogan 
    let sloganIndex = 0;

    //change slogan every 3 seconds 
    setInterval(() => {
        sloganIndex = (sloganIndex + 1) % slogans.length;
        sloganElement.innerHTML = `<em>${slogans[sloganIndex]}</em>`;
    }, 2000); 
});