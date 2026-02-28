const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");
const aside = document.querySelector("aside");
const asideToggle = document.querySelector(".arrow-icon");
burger.addEventListener("click", () => {
  navList.classList.toggle("active");
  burger.classList.toggle("active");
});
asideToggle.addEventListener("click", () => {
  aside.classList.toggle("active");
});
