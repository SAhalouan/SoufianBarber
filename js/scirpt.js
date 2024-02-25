
let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow img');
const slideCount = slides.length;

function showSlide(index) {
slides.forEach((slide) => {
slide.style.display = 'none';
});
slides[index].style.display = 'block';
}

function nextSlide() {
currentSlide = (currentSlide + 1) % slideCount;
showSlide(currentSlide);
}

function startSlideshow() {
setInterval(nextSlide, 3000);
}

showSlide(currentSlide);
startSlideshow();