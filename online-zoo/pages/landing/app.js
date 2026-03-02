const petsSliderLeftBtn = document.querySelector(".left-arrow-btn");
const petsSliderRightBtn = document.querySelector(".right-arrow-btn");
const petsCardContainer = document.querySelector(".pets-card-container");
const testiLeftBtn = document.querySelector(".testi-left-btn");
const testiRightBtn = document.querySelector(".testi-right-btn");
const testimonialsContainer = document.querySelector(
  ".testimonials-cards-wrapper",
);

let activeIndex = 0;

petsSliderLeftBtn.addEventListener("click", () => {
  const scrollAmount = petsCardContainer.offsetWidth * 0.4;
  petsCardContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
petsSliderRightBtn.addEventListener("click", () => {
  const scrollAmount = petsCardContainer.offsetWidth * 0.4;
  petsCardContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});
testiLeftBtn.addEventListener("click", () => {
  const scrollAmount = testimonialsContainer.offsetWidth * 0.5;
  testimonialsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
testiRightBtn.addEventListener("click", () => {
  const scrollAmount = testimonialsContainer.offsetWidth * 0.5;
  testimonialsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});
