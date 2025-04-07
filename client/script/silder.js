document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const slides = section.querySelectorAll(".slider > div");
        let currentIndex = 0;

        slides.forEach(slide => slide.classList.add("slide"));
        slides[currentIndex].classList.add("active");

        const prevBtn = section.querySelector(".prev");
        const nextBtn = section.querySelector(".next");

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove("active"));
            slides[index].classList.add("active");
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);
    });
});