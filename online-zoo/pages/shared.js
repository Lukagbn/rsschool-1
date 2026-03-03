// Burger
const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  navList.classList.toggle("active");
  burger.classList.toggle("active");
});

// Together popup — footer, every page
const togetherCare = document.getElementById("together");
const donateVolunteers = document.querySelectorAll(".donate-volunteers");
const cross = document.querySelector(".cross");
const body = document.querySelector("body");

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

// Donation popup — landing + zoos
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

if (donationBtn && makeYourDonation) {
  let activeIndex = 0;

  const updateNavigation = () => {
    donateNextBtn.classList.remove("active");
    donateBackBtn.classList.remove("active");
    donateCompleteBtn.classList.remove("active");

    if (activeIndex === 0) donateNextBtn.classList.add("active");
    else if (activeIndex === 1) {
      donateNextBtn.classList.add("active");
      donateBackBtn.classList.add("active");
    } else if (activeIndex === 2) {
      donateBackBtn.classList.add("active");
      donateCompleteBtn.classList.add("active");
    }
  };
  updateNavigation();

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
}
// dropdown logic
const allDropDowns = document.querySelectorAll(".drop-down");

allDropDowns.forEach((container) => {
  const selectedText = container.querySelector(".selected");
  const items = container.querySelectorAll(".drop-down-list li");

  container.addEventListener("click", (e) => {
    if (e.target.closest(".drop-down-list")) return;
    allDropDowns.forEach((other) => {
      if (other !== container) other.classList.remove("active");
    });

    container.classList.toggle("active");
  });

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedText.innerText = item.innerText;
      container.classList.remove("active");
    });
  });
});
