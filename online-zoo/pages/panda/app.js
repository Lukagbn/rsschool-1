const aside = document.querySelector("aside");
const asideToggle = document.querySelector(".arrow-icon");

asideToggle.addEventListener("click", () => {
  aside.classList.toggle("active");
});
