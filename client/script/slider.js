document.addEventListener("DOMContentLoaded", function () {
  const sliderContainers = document.querySelectorAll(".slider-container");

  sliderContainers.forEach((container) => {
      const slides = container.querySelectorAll(".slide");
      const prevBtn = container.querySelector(".prev");
      const nextBtn = container.querySelector(".next");

      let currentIndex = 0;
      let intervalId;
      let isPlaying = true;

      const pauseBtn = document.createElement("button");
      pauseBtn.textContent = "Pause";
      pauseBtn.classList.add("pause-play");
      container.appendChild(pauseBtn);

      function showSlide(index) {
          slides.forEach((slide) => slide.style.display = "none"); 
          slides[index].style.display = "block"; 
        }

      function startAutoPlay() {
        intervalId = setInterval(() => { 
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 5000);
    }

    function stopAutoPlay(){
        clearInterval(intervalId);
    }

    pauseBtn.addEventListener("click", () => {
        if (isPlaying) {
            stopAutoPlay();
            pauseBtn.textContent = "Play";

        } else {
            startAutoPlay();
            pauseBtn.textContent = "Pause";

        }
        isPlaying = !isPlaying;
    });

      showSlide(currentIndex);
      startAutoPlay();

    });
});