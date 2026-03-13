// data
// :
// {access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6I…TEyfQ.yn5WgVO6R5M4RanZFN9LDLenqiDP0pq4EIyyE0-UtnY', user: {…}}
// message
// :
// "Login successful"
// [[Prototype]]
// :
// Object
export interface user {
  login: string;
  email: string;
}
export interface userApiResponse {
  data: { user: user };
}
const authDialog = document.getElementById("auth") as HTMLDialogElement;
const userIcon = document.querySelector<HTMLImageElement>(
  ".auth-container img",
);
const loggedInSection =
  authDialog.querySelector<HTMLDivElement>(".logged-in-user");
const loggedOutSection =
  authDialog.querySelector<HTMLDivElement>(".logged-out-user");
const logOUt = document.querySelector<HTMLButtonElement>(
  ".logged-in-user .log-out-btn",
);
const authParagraph =
  document.querySelector<HTMLParagraphElement>(".auth-container p");
const loggedInName =
  document.querySelector<HTMLHeadingElement>(".logged-in-user h3");
const loggedInEmail =
  document.querySelector<HTMLHeadingElement>(".logged-in-user h4");
const closeModal = document.querySelector<HTMLSpanElement>(".close-modal");
closeModal?.addEventListener("click", () => {
  authDialog?.close();
});
userIcon?.addEventListener("click", () => {
  authDialog?.showModal();
});
logOUt?.addEventListener("click", () => {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  window.location.reload();
});
export default function checkUser() {
  const user = localStorage.getItem("user") || sessionStorage.getItem("user");
  const userEmail =
    localStorage.getItem("email") || sessionStorage.getItem("email");
  if (user && userEmail && authParagraph && loggedInName && loggedInEmail) {
    authParagraph.innerHTML = user;
    loggedInName.innerHTML += " " + user;
    loggedInEmail.innerHTML += " " + userEmail;
    loggedInSection?.classList.add("active");
    loggedOutSection?.classList.remove("active");
  } else {
    authParagraph?.classList.remove("active");
    loggedInSection?.classList.remove("active");
    loggedOutSection?.classList.add("active");
  }
}
