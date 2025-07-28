const btn = document.querySelector(".btn");
const notifySection = document.querySelector(".notify-section");

const types = ["info", "error", "success"];
const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

btn.addEventListener("click", () => {
  const notify = document.createElement("div");
  notify.classList.add("notify");
  notify.classList.add(getRandomType());
  notify.innerText = getRandomMessage();

  notifySection.appendChild(notify);

  let t = setTimeout(() => {
    notify.remove();
    clearTimeout(t);
  }, 2000);
});

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
