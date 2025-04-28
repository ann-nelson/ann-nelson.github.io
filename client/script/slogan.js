document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('h1');
    const slogan = document.getElementById('slogan');

    let position = 0;
    let direction = 1;

    function moveElements() {
        position += direction * 2;

        header.style.transform = `translateX(${position}px)`;
        slogan.style.transform = `translateX(${position}px)`;

        if (position > 100 || position < 0) {
            direction *= -1;
        }

        requestAnimationFrame(moveElements);
    }

    moveElements();
});