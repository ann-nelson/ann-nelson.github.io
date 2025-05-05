document.addEventListener("DOMContentLoaded", function () {
  //select all slider container
    const sliderContainers = document.querySelectorAll(".slider-container");
//loop each slider container
  sliderContainers.forEach((container) => {
      const slides = container.querySelectorAll(".slide");
      

      let currentIndex = 0;//track index of currently visible slide
      let intervalId;//store autoplay interval
      let isPlaying = true;//track autoplay currently active

      //create play/pause btn and add to slide container
      const pauseBtn = document.createElement("button");
      pauseBtn.textContent = "Pause";//
      pauseBtn.classList.add("pause-play"); 
      container.appendChild(pauseBtn);
//display current slide and hide others
      function showSlide(index) {
          slides.forEach((slide) => slide.style.display = "none"); //hide slide
          slides[index].style.display = "block"; //show slide
        }
//start automatice slide change every 5 sec
      function startAutoPlay() {
        intervalId = setInterval(() => { 
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 5000);
    }
//stop slideshow
    function stopAutoPlay(){
        clearInterval(intervalId);
    }
//toggle play/pause when btn clicked
    pauseBtn.addEventListener("click", () => {
        if (isPlaying) {
            stopAutoPlay();//pause slide
            pauseBtn.textContent = "Play";

        } else {
            startAutoPlay();//resume slide
            pauseBtn.textContent = "Pause";

        }
        isPlaying = !isPlaying;
    });
//show slide and start autoplay 
      showSlide(currentIndex);
      startAutoPlay();

    });
});