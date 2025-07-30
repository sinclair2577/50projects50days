const times = document.querySelector(".times");
const loveMe = document.querySelector(".love-me");

let clickTimes = 0;

loveMe.addEventListener("click", (event) => {
  if (clickTimes == 0) {
    clickTimes = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTimes < 800) {
      createLove(event);
      clickTimes = 0;
    } else {
      clickTimes = new Date().getTime();
    }
  }
});

function createLove(event) {
  event.preventDefault();

  //   添加点赞DOM元素
  const love = document.createElement("i");
  love.className = "fas fa-heart love";
  let x = event.clientX;
  let y = event.clientY;
  love.style.top = `${y}px`;
  love.style.left = `${x}px`;
  document.body.appendChild(love);
  times.innerText = Number(times.innerText) + 1;
  setTimeout(() => {
    love.remove();
  }, 1000);
}
