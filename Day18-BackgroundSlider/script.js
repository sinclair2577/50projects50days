const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlideIndex = 0;

rightBtn.addEventListener("click", () => {
  activeSlideIndex++;

  if (activeSlideIndex > slides.length - 1) {
    activeSlideIndex = 0;
  }

  setBodyBackground();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlideIndex--;

  if (activeSlideIndex < 0) {
    activeSlideIndex = slides.length - 1;
  }

  setBodyBackground();
  setActiveSlide();
});

setBodyBackground();

function setBodyBackground() {
  body.style.backgroundImage = slides[activeSlideIndex].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[activeSlideIndex].classList.add("active");
}
