const signInBtn = document.querySelector(".signin-btn");
const signInForm = document.querySelector(".signin-form");
const textIput = document.getElementById("login");
const passwordIput = document.getElementById("password");
async function logIn(data) {
    try {
        const res = await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (res.ok) {
            const result = await res.json();
            localStorage.setItem("user", result.data.user.login);
            localStorage.setItem("email", result.data.user.email);
            window.location.replace("../landing/index.html");
        }
        else {
            console.log("error");
        }
    }
    catch (error) {
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
textIput?.addEventListener("change", (e) => {
    const formGroup = textIput.closest(".form-group");
    const errorMessage = formGroup?.querySelector(".error");
    const textRegex = /^[a-zA-Z]{3,}$/;
    if (!errorMessage)
        return;
    if (textIput.value.trim().length > 0 && !textRegex.test(textIput.value)) {
        errorMessage.textContent = "Must be at least 3 letters (English only).";
    }
    else {
        errorMessage.textContent = "";
    }
    console.log(e);
});
passwordIput?.addEventListener("change", (e) => {
    const formGroup = passwordIput.closest(".form-group");
    const errorMessage = formGroup?.querySelector(".error");
    const passRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!errorMessage)
        return;
    if (passwordIput.value.trim().length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
    }
    else if (!passRegex.test(passwordIput.value)) {
        errorMessage.textContent = "Include at least 1 special character.";
    }
    else {
        errorMessage.textContent = "";
    }
    console.log(e);
});
signInBtn?.addEventListener("click", () => {
    console.log("hello");
});
const registerForm = document.querySelector(".register-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const rePassInput = document.getElementById("repassword");
async function register(data) {
    try {
        const res = await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await res.json();
        console.log(result);
        if (res.ok) {
            window.location.replace("./index.html");
        }
    }
    catch (error) { }
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
rePassInput?.addEventListener("change", () => {
    const formGroup = rePassInput.closest(".form-group");
    const errorMessage = formGroup?.querySelector(".error");
    if (!errorMessage)
        return;
    if (rePassInput.value.trim() != passwordIput.value.trim()) {
        errorMessage.textContent = "Passwords must match!";
    }
    else {
        errorMessage.textContent = "";
    }
});
nameInput?.addEventListener("change", () => {
    const formGroup = nameInput.closest(".form-group");
    const errorMessage = formGroup?.querySelector(".error");
    const nameRegex = /^[a-zA-Z]{3,}$/;
    if (!errorMessage)
        return;
    if (!nameRegex.test(nameInput.value.trim())) {
        errorMessage.textContent = "Must be at least 3 letters (English only).";
    }
});
emailInput?.addEventListener("change", () => {
    const formGroup = rePassInput.closest(".form-group");
    const errorMessage = formGroup?.querySelector(".error");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!errorMessage)
        return;
    if (!emailRegex.test(emailInput.value.trim())) {
        errorMessage.textContent = "Please enter a valid email address.";
    }
    else {
        errorMessage.textContent = "";
    }
});
export {};
//# sourceMappingURL=app.js.map