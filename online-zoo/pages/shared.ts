// Burger
const burger = document.querySelector<HTMLDivElement>(".burger");
const navList = document.querySelector<HTMLUListElement>(".nav-list");

burger?.addEventListener("click", () => {
  navList?.classList.toggle("active");
  burger.classList.toggle("active");
});

// Together popup — footer, every page
const togetherCare = document.getElementById("together") as HTMLDialogElement;
const donateVolunteers =
  document.querySelectorAll<HTMLButtonElement>(".donate-volunteers");
const cross = document.querySelector<HTMLSpanElement>(".cross");
const body = document.querySelector<HTMLBodyElement>("body");

donateVolunteers.forEach((btn) => {
  btn.addEventListener("click", () => {
    body?.classList.add("overflow-hidden");
    togetherCare?.showModal();
  });
});
cross?.addEventListener("click", () => {
  body?.classList.remove("overflow-hidden");
  togetherCare.close();
});

// Donation popup — landing + zoos
const donationBtn = document.querySelector<HTMLButtonElement>(
  ".donations .donation-action button",
);
const makeYourDonation = document.getElementById("donate") as HTMLDialogElement;
const donateNextBtn = document.querySelector<HTMLButtonElement>(".next");
const donateBackBtn = document.querySelector<HTMLButtonElement>(".back");
const stepperDots =
  document.querySelectorAll<HTMLDivElement>(".stepper-dots .dot");
const steps = document.querySelectorAll<HTMLDivElement>(
  ".step-container .step",
);
const donatePopUpTitles =
  document.querySelectorAll<HTMLHeadingElement>(".popup-title h3");
const donateCompleteBtn =
  document.querySelector<HTMLButtonElement>(".complete");

// if (donationBtn && makeYourDonation) {
//   let activeIndex = 0;

//   const updateNavigation = () => {
//     donateNextBtn?.classList.remove("active");
//     donateBackBtn?.classList.remove("active");
//     donateCompleteBtn?.classList.remove("active");

//     if (activeIndex === 0) donateNextBtn?.classList.add("active");
//     else if (activeIndex === 1) {
//       donateNextBtn?.classList.add("active");
//       donateBackBtn?.classList.add("active");
//     } else if (activeIndex === 2) {
//       donateBackBtn?.classList.add("active");
//       donateCompleteBtn?.classList.add("active");
//     }
//   };
//   updateNavigation();

//   donationBtn.addEventListener("click", () => {
//     makeYourDonation.showModal();
//     body?.classList.add("overflow-hidden");
//   });

//   donateCompleteBtn?.addEventListener("click", () => {
//     makeYourDonation.close();
//     body?.classList.remove("overflow-hidden");
//   });

//   donateNextBtn?.addEventListener("click", () => {
//     if (activeIndex > 1) return;
//     donatePopUpTitles[activeIndex].classList.remove("active");
//     steps[activeIndex].classList.remove("active");
//     activeIndex++;
//     donatePopUpTitles[activeIndex].classList.add("active");
//     steps[activeIndex].classList.add("active");
//     stepperDots[activeIndex].classList.add("active");
//     updateNavigation();
//   });

//   donateBackBtn?.addEventListener("click", () => {
//     if (activeIndex < 1) return;
//     donatePopUpTitles[activeIndex].classList.remove("active");
//     steps[activeIndex].classList.remove("active");
//     stepperDots[activeIndex].classList.remove("active");
//     activeIndex--;
//     donatePopUpTitles[activeIndex].classList.add("active");
//     steps[activeIndex].classList.add("active");
//     stepperDots[activeIndex].classList.add("active");
//     updateNavigation();
//   });
// }
// const allDropDowns = document.querySelectorAll<HTMLElement>(".drop-down");

// allDropDowns.forEach((container) => {
//   const selectedText = container.querySelector<HTMLElement>(".selected");
//   const items = container.querySelectorAll<HTMLElement>(".drop-down-list li");
//   container.addEventListener("click", (e) => {
//     if ((e.target as HTMLElement).closest(".drop-down-list")) return;
//     allDropDowns.forEach((other) => {
//       if (other !== container) other.classList.remove("active");
//     });
//     container.classList.toggle("active");
//   });
//   items.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       const list = (e.target as HTMLElement).innerText;
//       if (list) {
//         dropDown(true);
//       }
//       e.stopPropagation();
//       if (selectedText) selectedText.innerText = item.innerText;
//       container.classList.remove("active");
//     });
//   });
// });
const stepBtnWrapper = document.querySelectorAll<HTMLButtonElement>(
  ".btn-wrapper button",
);
const btnWrapperInput =
  document.querySelector<HTMLInputElement>(".btn-wrapper input");
// if (donateNextBtn && btnWrapperInput) {
//   donateNextBtn.disabled = true;
//   stepBtnWrapper.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       btnField(true);
//       donateNextBtn.disabled = false;
//       stepBtnWrapper.forEach((btn) => btn.classList.remove("active"));
//       btn.classList.add("active");
//       const text = (e.target as HTMLElement).innerText;
//       if (btn.className.includes("other")) {
//         btnWrapperInput.value = "";
//       } else {
//         btnWrapperInput.value = text.replace("$", "");
//       }
//     });
//   });
// }
// const user = sessionStorage.getItem("user");
// const email = sessionStorage.getItem("email");
// const secondForm =
//   document.querySelectorAll<HTMLInputElement>(".second-form input");

// const nameInput = document.getElementById("name") as HTMLInputElement;
// const emailInput = document.getElementById("email") as HTMLInputElement;

// nameInput.value = user ?? "";
// emailInput.value = email ?? "";
// if (!nameInput && !emailInput) {
//   donateNextBtn.disabled = true;
// } else {
//   donateNextBtn.disabled = false;
// }
// const btnField = (btn) => {
//   console.log(btn);
// };
// const dropDown = (list) => {
//   console.log(list);
// };

const donationState = {
  amountSelected: false,
  petSelected: false,
};

const validateStep1 = () => {
  if (donateNextBtn) {
    donateNextBtn.disabled = !(
      donationState.amountSelected && donationState.petSelected
    );
  }
};
//Dropdowns
const allDropDowns = document.querySelectorAll<HTMLElement>(".drop-down");
const stepError = document.querySelector<HTMLSpanElement>(".stepError");
allDropDowns.forEach((container) => {
  const selectedText = container.querySelector<HTMLElement>(".selected");
  const items = container.querySelectorAll<HTMLElement>(".drop-down-list li");
  container.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).closest(".drop-down-list")) return;
    allDropDowns.forEach((other) => {
      if (other !== container) other.classList.remove("active");
    });
    container.classList.toggle("active");
  });
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      if (selectedText) selectedText.innerText = item.innerText;
      container.classList.remove("active");
      donationState.petSelected = true;
      validateStep1();
    });
  });
});

//Amount buttons
if (donateNextBtn && btnWrapperInput && stepBtnWrapper.length > 0) {
  donateNextBtn.disabled = true;

  stepBtnWrapper.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      stepBtnWrapper.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const text = (e.target as HTMLElement).innerText;
      if (btn.className.includes("other")) {
        btnWrapperInput.value = "";
        donationState.amountSelected = false;
      } else {
        btnWrapperInput.value = text.replace("$", "");
        donationState.amountSelected = true;
      }
      validateStep1();
    });
  });

  btnWrapperInput.addEventListener("input", (e) => {
    if (!stepError) return;
    const val = (e.target as HTMLInputElement).value;
    if (val == "") {
      stepError.innerText = "Value must not contain 'e'";
      donationState.amountSelected = false;
    } else if (val <= "0") {
      stepError.innerText = "You must enter greater value than 0";
      donationState.amountSelected = false;
    } else {
      stepError.innerText = "";
      donationState.amountSelected = true;
    }
    validateStep1();
  });
}

//Donation popup
if (donationBtn && makeYourDonation) {
  let activeIndex = 0;
  const updateNavigation = () => {
    donateNextBtn?.classList.remove("active");
    donateBackBtn?.classList.remove("active");
    donateCompleteBtn?.classList.remove("active");
    if (activeIndex === 0) donateNextBtn?.classList.add("active");
    else if (activeIndex === 1) {
      donateNextBtn?.classList.add("active");
      donateBackBtn?.classList.add("active");
    } else if (activeIndex === 2) {
      donateBackBtn?.classList.add("active");
      donateCompleteBtn?.classList.add("active");
    }
  };
  updateNavigation();
  donationBtn.addEventListener("click", () => {
    makeYourDonation.showModal();
    body?.classList.add("overflow-hidden");
  });
  donateCompleteBtn?.addEventListener("click", () => {
    makeYourDonation.close();
    body?.classList.remove("overflow-hidden");
  });
  donateNextBtn?.addEventListener("click", () => {
    if (activeIndex > 1) return;
    donatePopUpTitles[activeIndex].classList.remove("active");
    steps[activeIndex].classList.remove("active");
    activeIndex++;
    donatePopUpTitles[activeIndex].classList.add("active");
    steps[activeIndex].classList.add("active");
    stepperDots[activeIndex].classList.add("active");
    updateNavigation();
  });
  donateBackBtn?.addEventListener("click", () => {
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

//Step 2 validation
const nameInput = document.getElementById("name") as HTMLInputElement | null;
const emailInput = document.getElementById("email") as HTMLInputElement | null;

// if (nameInput && emailInput && donateNextBtn) {
//   nameInput.value = sessionStorage.getItem("user") ?? "";
//   emailInput.value = sessionStorage.getItem("email") ?? "";

//   const validateStep2 = () => {
//     if (donateNextBtn) {
//       donateNextBtn.disabled =
//         !nameInput.value.trim() || !emailInput.value.trim();
//     }
//   };
//   validateStep2();
//   nameInput.addEventListener("input", validateStep2);
//   emailInput.addEventListener("input", validateStep2);
// }
