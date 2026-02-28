const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

const body = document.querySelector("body");
const donationPopUp = document.getElementById("donation-popup");

const forSpecialPetsBtn = document.querySelector(".for-special-pets");
const btnContainer = donationPopUp.querySelectorAll(".btn-container button");

const input = document.querySelector(".btn-container input");
const donateNow = document.querySelector(".feed-card button");
const btnWrapper = document.querySelectorAll(".btn-wrapper");

const progressionDot = document.querySelectorAll(".progression-dots .dot");
const progressionStep = document.querySelectorAll(".steps .step");
const popUpHeaders = document.querySelectorAll(".donation-popup-info h3");
const chooseDonationTitle = document.querySelector(".choose-donation-title");

let activeIndex = 0;

burger.addEventListener("click", () => {
  navList.classList.toggle("active");
  burger.classList.toggle("active");
});
// btnContainer.forEach((e) => {
//   input.classList.add("active");
//   e.addEventListener("click", () => {
//     btnContainer.forEach((btn) => btn.classList.remove("active"));
//     if (e.innerText.toLowerCase() === "other") {
//       input.classList.add("active");
//     } else {
//       input.classList.remove("active");
//     }
//     e.classList.toggle("active");
//   });
// });
// btnWrapper.forEach((btn) => {
//   const next = btn.querySelector(".next");
//   const back = btn.querySelector(".back");

//   next.addEventListener("click", () => {
//     if (activeIndex < progressionDot.length - 1) {
//       popUpHeaders[activeIndex].classList.remove("active");
//       chooseDonationTitle.style.display = "none";
//       progressionStep[activeIndex].classList.remove("active");
//       activeIndex++;
//       popUpHeaders[activeIndex].classList.add("active");
//       progressionStep[activeIndex].classList.add("active");
//       progressionDot[activeIndex].classList.add("active");
//       back.classList.add("active");
//       if (activeIndex == 2) {
//         next.classList.remove("next");
//         next.classList.add("d-none");
//       } else {
//         next.classList.add("next");
//       }
//     }
//   });
//   back.addEventListener("click", () => {
//     if (activeIndex > 0) {
//       popUpHeaders[activeIndex].classList.remove("active");
//       progressionStep[activeIndex].classList.remove("active");
//       progressionDot[activeIndex].classList.remove("active");
//       activeIndex--;
//       popUpHeaders[activeIndex].classList.add("active");
//       progressionStep[activeIndex].classList.add("active");
//       next.classList.add("next");
//       next.classList.remove("d-none");
//       if (activeIndex === 0) {
//         chooseDonationTitle.style.display = "block";
//         back.classList.remove("active");
//       }
//     }
//   });
// });
// forSpecialPetsBtn.addEventListener("click", () => {
//   forSpecialPetsBtn.classList.toggle("active");
// });
// donateNow.addEventListener("click", () => {
//   donationPopUp.showModal();
//   body.classList.add("overflow-none");
// });
console.log("here", activeIndex);
