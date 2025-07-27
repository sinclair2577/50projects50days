const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let time = setInterval(update, 30);
let val = 0;
function update() {
  val++;
  if (val > 99) {
    clearInterval(time);
  }
  loadingText.innerText = `${val}%`;
  loadingText.style.opacity = scale(val, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(val, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
