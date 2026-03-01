const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");
const togetherCare = document.getElementById("together");
const donateVolunteers = document.querySelectorAll(".donate-volunteers");
const cross = document.querySelector(".cross");
const body = document.querySelector("body");
const donationBtn = document.querySelector(
  ".donations .donation-action button",
);
const makeYourDonation = document.getElementById("donate");
const donateNextBtn = document.querySelector(".next");
const donateBackBtn = document.querySelector(".back");
const stepperDots = document.querySelectorAll(".stepper-dots .dot");
const steps = document.querySelectorAll(".step-container .step");
const donatePopUpTitles = document.querySelectorAll(".popup-title h3");
const donateCompleteBtn = document.querySelector(".complete");
const petsSliderLeftBtn = document.querySelector(".left-arrow-btn");
const petsSliderRightBtn = document.querySelector(".right-arrow-btn");
const petsCardContainer = document.querySelector(".pets-card-container");
const testiLeftBtn = document.querySelector(".testi-left-btn");
const testiRightBtn = document.querySelector(".testi-right-btn");
const testimonialsContainer = document.querySelector(
  ".testimonials-cards-wrapper",
);

let activeIndex = 0;

const updateNavigation = () => {
  donateNextBtn.classList.remove("active");
  donateBackBtn.classList.remove("active");
  donateCompleteBtn.classList.remove("active");

  if (activeIndex === 0) {
    donateNextBtn.classList.add("active");
  } else if (activeIndex === 1) {
    donateNextBtn.classList.add("active");
    donateBackBtn.classList.add("active");
  } else if (activeIndex === 2) {
    donateBackBtn.classList.add("active");
    donateCompleteBtn.classList.add("active");
  }
};
updateNavigation();

burger.addEventListener("click", () => {
  navList.classList.toggle("active");
  burger.classList.toggle("active");
});

donateVolunteers.forEach((btn) => {
  btn.addEventListener("click", () => {
    body.classList.add("overflow-hidden");
    togetherCare.showModal();
  });
});
cross.addEventListener("click", () => {
  body.classList.remove("overflow-hidden");
  togetherCare.close();
});

donationBtn.addEventListener("click", () => {
  makeYourDonation.showModal();
  body.classList.add("overflow-hidden");
});
donateCompleteBtn.addEventListener("click", () => {
  makeYourDonation.close();
  body.classList.remove("overflow-hidden");
});
donateNextBtn.addEventListener("click", () => {
  if (activeIndex > 1) return;
  donatePopUpTitles[activeIndex].classList.remove("active");
  steps[activeIndex].classList.remove("active");
  activeIndex++;
  donatePopUpTitles[activeIndex].classList.add("active");
  steps[activeIndex].classList.add("active");
  stepperDots[activeIndex].classList.add("active");
  updateNavigation();
});
donateBackBtn.addEventListener("click", () => {
  if (activeIndex < 1) return;
  donatePopUpTitles[activeIndex].classList.remove("active");
  steps[activeIndex].classList.remove("active");
  stepperDots[activeIndex].classList.remove("active");
  activeIndex--;
  donatePopUpTitles[activeIndex].classList.add("active");
  steps[activeIndex].classList.add("active");
  stepperDots[activeIndex].classList.add("active");
  updateNavigation();
});
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
