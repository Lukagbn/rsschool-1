import { userApiResponse } from "../../utils/checkUser";

interface logIn {
  login: string;
  password: string;
}
interface register {
  login: string;
  password: string;
  name: string;
  email: string;
}

const signInForm = document.querySelector<HTMLFormElement>(".signin-form");

const textIput = document.getElementById("login") as HTMLInputElement;
const passwordIput = document.getElementById("password") as HTMLInputElement;
const checkboxInput = document.getElementById("checkbox") as HTMLInputElement;
const formSubmitError = document.querySelector(
  ".form-submit-error",
) as HTMLParagraphElement;
async function logIn(data: logIn) {
  try {
    const res = await fetch(
      "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const result: userApiResponse = await res.json();
    if (res.ok && checkboxInput.checked) {
      localStorage.setItem("user", result.data.user.login);
      localStorage.setItem("email", result.data.user.email);
      window.location.replace("../landing/index.html");
    } else if (res.ok && !checkboxInput.checked) {
      sessionStorage.setItem("user", result.data.user.login);
      sessionStorage.setItem("email", result.data.user.email);
      window.location.replace("../landing/index.html");
    } else {
      if (!formSubmitError) return;
      formSubmitError.textContent = "Incorrect login or password!";
    }
  } catch (error) {
    console.log(error);
  }
}
signInForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  logIn({
    login: textIput.value,
    password: passwordIput.value,
  });
});
textIput?.addEventListener("input", (e) => {
  const formGroup = textIput.closest(".form-group");
  const errorMessage = formGroup?.querySelector(".error");
  const textRegex = /^[a-zA-Z]{3,}$/;
  if (!errorMessage) return;
  if (textIput.value.trim().length > 0 && !textRegex.test(textIput.value)) {
    textIput.style.borderColor = "red";
    errorMessage.textContent = "Must be at least 3 letters (English only).";
  } else {
    textIput.style.borderColor = "black";
    errorMessage.textContent = "";
  }
});
passwordIput?.addEventListener("input", (e) => {
  const formGroup = passwordIput.closest(".form-group");
  const errorMessage = formGroup?.querySelector(".error");
  const passRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (!errorMessage) return;
  if (passwordIput.value.length === 0) {
    passwordIput.style.borderColor = "black";
    errorMessage.textContent = "";
  } else if (passwordIput.value.trim().length < 6) {
    passwordIput.style.borderColor = "red";
    errorMessage.textContent = "Password must be at least 6 characters.";
  } else if (!passRegex.test(passwordIput.value)) {
    passwordIput.style.borderColor = "red";
    errorMessage.textContent = "Include at least 1 special character.";
  } else {
    passwordIput.style.borderColor = "black";
    errorMessage.textContent = "";
  }
});

const registerForm = document.querySelector(".register-form");
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const rePassInput = document.getElementById("repassword") as HTMLInputElement;
const registerBtn = registerForm?.querySelector("button") as HTMLButtonElement;
async function register(data: register) {
  try {
    const res = await fetch(
      "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const result = await res.json();
    console.log(result);
    if (res.ok) {
      window.location.replace("./index.html");
    } else {
      formSubmitError.textContent = "Please fill up the form!";
    }
  } catch (error) {}
}

registerForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  register({
    login: textIput.value,
    email: emailInput.value,
    password: passwordIput.value,
    name: nameInput.value,
  });
});
rePassInput?.addEventListener("input", () => {
  const formGroup = rePassInput.closest(".form-group");
  const errorMessage = formGroup?.querySelector(".error");
  if (!errorMessage) return;
  if (rePassInput.value.trim() != passwordIput.value.trim()) {
    rePassInput.style.borderColor = "red";
    errorMessage.textContent = "Passwords must match!";
  } else {
    rePassInput.style.borderColor = "black";
    errorMessage.textContent = "";
  }
});
nameInput?.addEventListener("input", () => {
  const formGroup = nameInput.closest(".form-group");
  const errorMessage = formGroup?.querySelector(".error");
  const nameRegex = /^[a-zA-Z]{3,}$/;
  if (!errorMessage) return;
  if (nameInput.value.length === 0) {
    nameInput.style.borderColor = "black";
    errorMessage.textContent = "";
  } else if (!nameRegex.test(nameInput.value.trim())) {
    nameInput.style.borderColor = "red";
    errorMessage.textContent = "Must be at least 3 letters (English only).";
  }
});
emailInput?.addEventListener("input", () => {
  const formGroup = emailInput.closest(".form-group");
  const errorMessage = formGroup?.querySelector(".error");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!errorMessage) return;
  if (emailInput.value.length === 0) {
    emailInput.style.borderColor = "black";
    errorMessage.textContent = "";
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.style.borderColor = "red";
    errorMessage.textContent = "Please enter a valid email address.";
  } else {
    emailInput.style.borderColor = "black";
    errorMessage.textContent = "";
  }
});
const signInBtn = signInForm?.querySelector("button") as HTMLButtonElement;

signInBtn.disabled = true;
const checkForm = () => {
  const loginFilled = textIput.value.trim().length >= 3;
  const passwordFilled = passwordIput.value.trim().length >= 6;
  const passRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const passwordValid = passRegex.test(passwordIput.value);

  signInBtn.disabled = !(loginFilled && passwordFilled && passwordValid);
};
textIput.addEventListener("input", checkForm);
passwordIput.addEventListener("input", checkForm);
