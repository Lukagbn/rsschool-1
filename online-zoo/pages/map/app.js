const pins = document.querySelectorAll(".map svg");
const eagle = document.querySelector(".eagle");
eagle.classList.add("active");

pins.forEach((pin) => {
  pin.addEventListener("click", () => {
    pins.forEach((item) => item.classList.remove("active"));
    pin.classList.add("active");
  });
});
