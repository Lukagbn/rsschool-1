import checkUser from "../utils/checkUser.js";

const burger = document.querySelector<HTMLDivElement>(".burger");
const navList = document.querySelector<HTMLUListElement>(".nav-list");

burger?.addEventListener("click", () => {
  navList?.classList.toggle("active");
  burger.classList.toggle("active");
});

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
const stepBtnWrapper = document.querySelectorAll<HTMLButtonElement>(
  ".btn-wrapper button",
);
const btnWrapperInput =
  document.querySelector<HTMLInputElement>(".btn-wrapper input");
const creditInput = document.getElementById(
  "creditnumber",
) as HTMLInputElement | null;
const cvvInput = document.getElementById("cvv") as HTMLInputElement | null;
const nameInput = document.getElementById("name") as HTMLInputElement | null;
const emailInput = document.getElementById("email") as HTMLInputElement | null;

const donationState = {
  amountSelected: false,
  petSelected: false,
  petId: 0,
};
const inputState = { name: false, email: false };
const cardState = {
  creditNumber: false,
  cvv: false,
  month: false,
  year: false,
};

const validateStep1 = () => {
  if (donateNextBtn) {
    donateNextBtn.disabled = !(
      donationState.amountSelected && donationState.petSelected
    );
  }
};
const validateStep2 = () => {
  if (donateNextBtn) {
    donateNextBtn.disabled = !(inputState.email && inputState.name);
  }
};
const validateStep3 = () => {
  if (donateCompleteBtn) {
    donateCompleteBtn.disabled = !(
      cardState.creditNumber &&
      cardState.cvv &&
      cardState.month &&
      cardState.year
    );
  }
};

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

      const isInStep1 = container.closest(".step:first-child");
      if (isInStep1) {
        console.log("item dataset:", item.dataset.id);
        donationState.petSelected = true;
        donationState.petId = Number(item.dataset.id);
        validateStep1();
        return;
      }

      const isMonthDropdown = container.closest(
        ".date-container .form-group:first-child",
      );
      if (isMonthDropdown) {
        cardState.month = true;
        validateStep3();
        return;
      }

      const isYearDropdown = container.closest(".form-group.year");
      if (isYearDropdown) {
        const selectedYear = Number(item.innerText);
        cardState.year = selectedYear >= new Date().getFullYear();
        const activeStepError = document.querySelector<HTMLSpanElement>(
          ".step.active .stepError",
        );
        if (!cardState.year) {
          if (activeStepError)
            activeStepError.innerText = "Please select a valid future year.";
        } else {
          if (activeStepError) activeStepError.innerText = "";
        }
        validateStep3();
      }
    });
  });
});

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
    if (val === "") {
      stepError.innerText = "Value must not contain 'e'";
      donationState.amountSelected = false;
    } else if (Number(val) <= 0) {
      stepError.innerText = "You must enter greater value than 0";
      donationState.amountSelected = false;
    } else {
      stepError.innerText = "";
      donationState.amountSelected = true;
    }
    validateStep1();
  });
}

if (nameInput && emailInput && donateNextBtn) {
  nameInput.value =
    (sessionStorage.getItem("user") || localStorage.getItem("user")) ?? "";
  emailInput.value =
    (sessionStorage.getItem("email") || localStorage.getItem("email")) ?? "";
  inputState.name =
    /^[a-zA-Z\s]+$/.test(nameInput.value.trim()) &&
    nameInput.value.trim().length > 0;
  inputState.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
  validateStep2();

  nameInput.addEventListener("input", () => {
    const val = nameInput.value.trim();
    const activeStepError = document.querySelector<HTMLSpanElement>(
      ".step.active .stepError",
    );
    if (val.length === 0) {
      if (activeStepError) activeStepError.innerText = "Name is required.";
      inputState.name = false;
    } else if (!/^[a-zA-Z\s]+$/.test(val)) {
      if (activeStepError)
        activeStepError.innerText = "Name can only contain letters and spaces.";
      inputState.name = false;
    } else {
      if (activeStepError) activeStepError.innerText = "";
      inputState.name = true;
    }
    validateStep2();
  });

  emailInput.addEventListener("input", () => {
    const val = emailInput.value.trim();
    const activeStepError = document.querySelector<HTMLSpanElement>(
      ".step.active .stepError",
    );
    if (val.length === 0) {
      if (activeStepError) activeStepError.innerText = "Email is required.";
      inputState.email = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      if (activeStepError)
        activeStepError.innerText = "Please enter a valid email address.";
      inputState.email = false;
    } else {
      if (activeStepError) activeStepError.innerText = "";
      inputState.email = true;
    }
    validateStep2();
  });
}

if (creditInput && cvvInput) {
  donateCompleteBtn && (donateCompleteBtn.disabled = true);

  creditInput.addEventListener("keydown", (e) => {
    const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
    if (allowed.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
    if (creditInput.value.length >= 16) e.preventDefault();
  });

  creditInput.addEventListener("input", () => {
    const val = creditInput.value.trim();
    const activeStepError = document.querySelector<HTMLSpanElement>(
      ".step.active .stepError",
    );
    if (val.length === 0) {
      if (activeStepError)
        activeStepError.innerText = "Card number is required.";
      cardState.creditNumber = false;
    } else if (val.length < 16) {
      if (activeStepError)
        activeStepError.innerText = `Card number must be 16 digits (${val.length}/16).`;
      cardState.creditNumber = false;
    } else {
      if (activeStepError) activeStepError.innerText = "";
      cardState.creditNumber = true;
    }
    validateStep3();
  });

  cvvInput.addEventListener("keydown", (e) => {
    const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
    if (allowed.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
    if (cvvInput.value.length >= 3) e.preventDefault();
  });

  cvvInput.addEventListener("input", () => {
    const val = cvvInput.value.trim();
    const activeStepError = document.querySelector<HTMLSpanElement>(
      ".step.active .stepError",
    );
    if (val.length === 0) {
      if (activeStepError) activeStepError.innerText = "CVV is required.";
      cardState.cvv = false;
    } else if (val.length < 3) {
      if (activeStepError)
        activeStepError.innerText = `CVV must be 3 digits (${val.length}/3).`;
      cardState.cvv = false;
    } else {
      if (activeStepError) activeStepError.innerText = "";
      cardState.cvv = true;
    }
    validateStep3();
  });
}

if (donationBtn && makeYourDonation) {
  let activeIndex = 0;

  const updateNavigation = () => {
    donateNextBtn?.classList.remove("active");
    donateBackBtn?.classList.remove("active");
    donateCompleteBtn?.classList.remove("active");
    if (activeIndex === 0) {
      donateNextBtn?.classList.add("active");
      validateStep1();
    } else if (activeIndex === 1) {
      donateNextBtn?.classList.add("active");
      donateBackBtn?.classList.add("active");
      validateStep2();
    } else if (activeIndex === 2) {
      donateBackBtn?.classList.add("active");
      donateCompleteBtn?.classList.add("active");
      if (donateCompleteBtn) donateCompleteBtn.disabled = true;
      validateStep3();
    }
  };

  updateNavigation();

  donationBtn.addEventListener("click", () => {
    makeYourDonation.showModal();
    body?.classList.add("overflow-hidden");
  });

  donateCompleteBtn?.addEventListener("click", async () => {
    await donationsPost({
      name: nameInput?.value ?? "",
      email: emailInput?.value ?? "",
      amount: Number(btnWrapperInput?.value ?? 0),
      petId: donationState.petId,
    });
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

checkUser();

type donationData = {
  name: string;
  email: string;
  amount: number;
  petId: number;
};

async function donationsPost(data: donationData) {
  try {
    console.log("Sending data:", JSON.stringify(data));
    const res = await fetch(
      "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/donations",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );
    const result = await res.json();
    console.log("Response:", result);
    if (!res.ok) {
      alert("Error! Please refresh the page and try again.");
      return;
    }
    alert("Donation successful! Thank you for your support.");
  } catch (error) {
    alert("Error! Please refresh the page and try again.");
    console.log(error);
  }
}
