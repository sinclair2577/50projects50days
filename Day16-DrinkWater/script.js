const smallCups = document.querySelectorAll(".small-cup");
const litres = document.getElementById("litres");
const remaided = document.getElementById("remaided");
const percentage = document.getElementById("percentage");

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    hightLightCups(index);
  });
});

function hightLightCups(idx) {
  if (idx === 7 && smallCups[idx].classList.contains("full")) {
    idx--;
  }
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateLitres();
}

function updateLitres() {
  const fullCupsLength = document.querySelectorAll(".small-cup.full").length;
  const smallCupsLength = smallCups.length;

  if (fullCupsLength === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCupsLength / smallCupsLength) * 330}px`;
    percentage.innerText = `${(fullCupsLength / smallCupsLength) * 100}%`;
  }

  if (fullCupsLength === smallCupsLength) {
    remaided.style.visibility = "hidden";
    remaided.style.height = 0;
  } else {
    remaided.style.visibility = "visible";
    litres.innerText = `${(250 * fullCupsLength) / 1000}L`;
  }
}
