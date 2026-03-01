const pins = document.querySelectorAll(".map svg");
const eagle = document.querySelector(".eagle");
eagle.classList.add("active");

pins.forEach((pin) => {
  pin.addEventListener("click", () => {
    pin.classList.toggle("active");
  });
});
