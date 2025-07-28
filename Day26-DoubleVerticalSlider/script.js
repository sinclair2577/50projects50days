const sliders = document.querySelector(".sliders");
const images = document.querySelector(".images");
const slidesLength = sliders.querySelectorAll("div").length;

const btnDown = document.querySelector(".btn-down");
const btnUp = document.querySelector(".btn-up");

let activeIdx = 0;
sliders.style.transform = `translateY(-${(slidesLength - 1) * 100}%)`;

// 向下切换标题，图片逆序切换
btnDown.addEventListener("click", () => sliderChange("down"));
// 向上切换标题，图片逆序切换
btnUp.addEventListener("click", () => sliderChange("up"));

function sliderChange(direction) {
  if (direction === "up") {
    activeIdx = (activeIdx + 1) % slidesLength;
  } else if (direction === "down") {
    activeIdx = (activeIdx - 1 + slidesLength) % slidesLength;
  }

  sliders.style.transform = `translateY(-${
    (slidesLength - 1 - activeIdx) * 100
  }%)`;
  images.style.transform = `translateY(-${activeIdx * 100}%)`;
}
