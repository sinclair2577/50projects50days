const API_KEY = "api_key=fc1f3dd1d262b208edb05dbc1aa3e7ca";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL =
  BASE_URL +
  "/discover/movie?include_adult=true&include_video=true&language=en-US&page=3&sort_by=popularity.desc&" +
  API_KEY;
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(searchURL + "&query=" + searchTerm);
  }
});

async function getMovies(url) {
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.results);
      showMovies(res.results);
    });
}

function showMovies(res) {
  main.innerHTML = "";
  res.forEach((movie) => {
    const { title, vote_average, poster_path, overview } = movie;
    const mvElement = document.createElement("div");
    mvElement.classList.add("movie");
    mvElement.innerHTML = `
            <img src="${IMG_URL + poster_path}"
                alt="Image">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(
                  vote_average
                )}">${vote_average.toPrecision(2)}</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
    `;
    main.appendChild(mvElement);
  });
}

function getColor(vote) {
  return vote >= 8 ? "green" : vote >= 5 ? "orange" : "red";
}
