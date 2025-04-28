document.addEventListener("DOMContentLoaded", function () {
  const sliderContainers = document.querySelectorAll(".slider-container");

  sliderContainers.forEach((container) => {
      const slides = container.querySelectorAll(".slide");
      let currentIndex = 0;

      function showSlide(index) {
          slides.forEach((slide) => slide.style.display = "none"); 
          slides[index].style.display = "block"; 
      }

      showSlide(currentIndex);

      const prevBtn = container.querySelector(".prev");
      const nextBtn = container.querySelector(".next");

      

      // Auto-play functionality
      setInterval(function () {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
      }, 3000); // Change slide every 3 seconds
  });
});