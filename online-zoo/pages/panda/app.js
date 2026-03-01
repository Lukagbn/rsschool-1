const aside = document.querySelector("aside");
const asideToggle = document.querySelector(".arrow-icon");
const carousel = document.querySelector(".carousel-inner");
const prevBtn = document.querySelector(".carousel button:first-child");
const nextBtn = document.querySelector(".carousel button:last-child");
const carouselItems = document.querySelectorAll(
  ".carousel-inner .carousel-item",
);
asideToggle.addEventListener("click", () => {
  aside.classList.toggle("active");
});

const scrollAmount = carousel.offsetWidth * 0.4;

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
});
carouselItems.forEach((item) => {
  item.addEventListener("click", () => {
    carouselItems.forEach((el) => el.classList.remove("active"));
    item.classList.toggle("active");
  });
});
