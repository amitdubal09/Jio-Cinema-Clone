let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.box');
    if (index >= slides.length-1) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((box, i) => {
        box.style.transform = `translateX(${-currentSlide * 100}%)`;
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initial Call to Show First Slide
showSlide(currentSlide);