// script.js

document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide-container');
    let isTransitioning = false;

    function showSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;

        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'flex';
                slide.offsetWidth; // Trigger reflow
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
                setTimeout(() => {
                    slide.style.display = 'none';
                }, 1000); // Match the transition duration
            }
        });

        document.body.style.backgroundImage = `url('${slides[index].dataset.background}')`;

        setTimeout(() => {
            isTransitioning = false;
        }, 1000); // Match the transition duration
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        } else if (event.key === 'ArrowLeft') {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
    });

    showSlide(currentSlide);
});
