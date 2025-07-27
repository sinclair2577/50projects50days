const drag = document.querySelector(".drag");
const drops = document.querySelectorAll(".drop");
const body = document.body;

body.addEventListener("dragstart", (e) => {
  if (!e.target.classList.contains("drag")) {
    return;
  }
  drag.className += " hold";
  setTimeout(() => (drag.className = "invisible"), 0);
});

body.addEventListener("dragend", (e) => {
  drag.className = "drag";
});

drops.forEach((drop) => {
  drop.addEventListener("dragenter", (e) => {
    e.preventDefault();
    drop.className += " hovered";
  });

  drop.addEventListener("dragleave", (e) => {
    drop.className = "drop";
  });

  drop.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  drop.addEventListener("drop", (e) => {
    drop.className = "drop";
    drop.append(drag);
  });
});
