document.addEventListener("DOMContentLoaded", function () {
    const sliderContainers = document.querySelectorAll(".slider-container");
  
    sliderContainers.forEach(container => {
      const slides = container.querySelectorAll(".slide");
      let currentIndex = 0;
  

      function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none"); // Hide all slides
        slides[index].style.display = "block"; 
      }
  
      showSlide(currentIndex);

      const prevBtn = container.querySelector(".prev");
      const nextBtn = container.querySelector(".next");

      nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
        showSlide(currentIndex);
      });

      prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to the last slide if at the beginning
        showSlide(currentIndex);
      });
    });
  });
  