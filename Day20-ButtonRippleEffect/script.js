const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.left = e.offsetX + "px";
  ripple.style.top = e.offsetY + "px";
  btn.append(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 500);
});
