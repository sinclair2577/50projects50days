// 读取内容，逐字加入
const text = document.querySelector(".text");
const speed = document.querySelector(".speed");

let content = "We Love Programming!";
let speedValue = 300 / speed.value;
let idx = 0;
let timer = null;

animateText();

function animateText() {
  if (timer) {
    clearInterval(timer);
  }
  idx = 0;
  timer = setInterval(() => {
    idx++;

    text.innerText = content.slice(0, idx);
    // 如果文字播放完毕
    if (index >= content.length - 1) {
      idx = 0;
    }
  }, speedValue);
}

speed.addEventListener("input", (event) => {
  speedValue = 300 / event.target.value;
});
