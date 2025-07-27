const cardCover = document.querySelector(".card-cover");
const contentTitle = document.querySelector(".content-title");
const contentDesc = document.querySelector(".content-desc");
const avatar = document.querySelector(".avatar");
const username = document.querySelector(".name");
const userdate = document.querySelector(".date");
const skeletons = document.querySelectorAll(".skeleton");

setTimeout(() => {
  getData();
}, 3000);

function getData() {
  cardCover.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80">`;
  contentTitle.innerHTML = "Lorem ipsum dolor sit amet";
  contentDesc.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  avatar.innerHTML = `<img src="https://randomuser.me/api/portraits/men/1.jpg" alt="">`;
  username.innerHTML = "John Doe";
  userdate.innerHTML = "Oct 08, 2020";
  skeletons.forEach((s) => s.classList.add("loaded"));
}
