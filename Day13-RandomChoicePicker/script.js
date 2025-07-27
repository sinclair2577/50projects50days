const textarea = document.getElementById("textarea");
const tagsEl = document.getElementById("tags");

textarea.addEventListener("keyup", (event) => {
  const text = event.target.value;
  const tags = text
    .split(",")
    .filter((f) => f.trim() !== "")
    .map((val) => val.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const el = document.createElement("span");
    el.classList.add("tag");
    el.innerText = tag;
    tagsEl.append(el);
  });

  if (event.key == "Enter") {
    setTimeout(() => {
      event.target.value = "";
    });
    randomSelect();
  }
});

function randomSelect() {
  const int = 100;
  const times = 30;

  const interval = setInterval(() => {
    const hT = pickRandomTag();
    highlightTag(hT);
    setTimeout(() => {
      unhighlightTag(hT);
    }, int);
  }, int);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const hT = pickRandomTag();
      highlightTag(hT);
    }, int);
  }, int * times);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unhighlightTag(tag) {
  tag.classList.remove("highlight");
}
