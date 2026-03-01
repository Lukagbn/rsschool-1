const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");
const togetherCare = document.getElementById("together");
const donateVolunteers = document.querySelector(".donate-volunteers");
const cross = document.querySelector(".cross");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  navList.classList.toggle("active");
  burger.classList.toggle("active");
});
donateVolunteers.addEventListener("click", () => {
  body.classList.add("overflow-hidden");
  togetherCare.showModal();
});
cross.addEventListener("click", (e) => {
  body.classList.remove("overflow-hidden");
  togetherCare.close();
});
