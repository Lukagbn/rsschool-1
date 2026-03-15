const authDialog = document.getElementById("auth");
const userIcon = document.querySelectorAll(".auth-container img");
const loggedInSection = authDialog.querySelector(".logged-in-user");
const loggedOutSection = authDialog.querySelector(".logged-out-user");
const logOUt = document.querySelector(".logged-in-user .log-out-btn");
const authParagraph = document.querySelectorAll(".auth-container p");
const loggedInName = document.querySelector(".logged-in-user h3");
const loggedInEmail = document.querySelector(".logged-in-user h4");
const closeModal = document.querySelector(".close-modal");
closeModal?.addEventListener("click", () => {
    authDialog?.close();
});
userIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
        authDialog?.showModal();
    });
});
logOUt?.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
});
export default function checkUser() {
    const user = localStorage.getItem("user") || sessionStorage.getItem("user");
    const userEmail = localStorage.getItem("email") || sessionStorage.getItem("email");
    if (user && userEmail && authParagraph && loggedInName && loggedInEmail) {
        authParagraph.forEach((p) => (p.innerHTML = user));
        loggedInName.innerHTML += " " + user;
        loggedInEmail.innerHTML += " " + userEmail;
        loggedInSection?.classList.add("active");
        loggedOutSection?.classList.remove("active");
    }
    else {
        authParagraph.forEach((p) => p.classList.remove("active"));
        loggedInSection?.classList.remove("active");
        loggedOutSection?.classList.add("active");
    }
}
//# sourceMappingURL=checkUser.js.map