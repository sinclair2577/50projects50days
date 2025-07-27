const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

getJoke();

jokeBtn.addEventListener("click", getJoke());
const config = {};

async function getJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  joke.innerText = data.joke;
}
