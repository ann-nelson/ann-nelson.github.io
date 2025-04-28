<script>
    const slogans = [
        "Art Made. Dreams Built",
        "Creativity in Every Stroke",
        "Building Dreams, One Brush at a Time",
        "Designs that Inspire"
    ];
    
    let sloganIndex = 0;
    const sloganElement = document.getElementById('slogan');

    setInterval(() => {
        sloganIndex = (sloganIndex + 1) % slogans.length;
        sloganElement.innerHTML = `<em>${slogans[sloganIndex]}</em>`;
    }, 3000); // Change every 3 seconds
</script>