import checkUser from "../../utils/checkUser.js";
const petsSliderLeftBtn =
  document.querySelector<HTMLButtonElement>(".left-arrow-btn");
const petsSliderRightBtn =
  document.querySelector<HTMLButtonElement>(".right-arrow-btn");
const petsCardContainer = document.querySelector<HTMLElement>(
  ".pets-card-container",
);
const testiLeftBtn =
  document.querySelector<HTMLButtonElement>(".testi-left-btn");
const testiRightBtn =
  document.querySelector<HTMLButtonElement>(".testi-right-btn");
const testimonialsContainer = document.querySelector<HTMLElement>(
  ".testimonials-cards-wrapper",
);
function slider(
  container: HTMLElement | null,
  leftBtn: HTMLElement | null,
  rightBtn: HTMLElement | null,
) {
  if (container && leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      const isAtStart = container.scrollLeft === 0;
      if (isAtStart) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: -container.offsetWidth * 0.5,
          behavior: "smooth",
        });
      }
    });
    rightBtn.addEventListener("click", () => {
      const isAtEnd =
        container.scrollLeft + container.offsetWidth >= container.scrollWidth;
      if (isAtEnd) {
        container.scrollTo({
          left: -container.scrollWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: container.offsetWidth * 0.5,
          behavior: "smooth",
        });
      }
    });
  }
}
slider(testimonialsContainer, testiLeftBtn, testiRightBtn);
slider(petsCardContainer, petsSliderLeftBtn, petsSliderRightBtn);

const petImges = [
  {
    img: "../../assets/images/sam&lora.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
  {
    img: "../../assets/images/senja.png",
  },
];

interface pet {
  id: number;
  name: string;
  commonName: string;
  description: string;
}
interface petApiResponse {
  data: pet[];
}
async function fetchPets() {
  try {
    if (!petsCardContainer) return;
    petsCardContainer.innerHTML = cardsLoader();
    const res = await fetch(
      "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets",
    );
    if (!res.ok) {
      petsCardContainer.innerHTML = `<p class="loader">Something went wrong. Please, refresh the page</p>`;
      return;
    }
    const result: petApiResponse = await res.json();
    const pets = result.data
      .map(
        (pet, index) =>
          `     <div class="pet-card">
            <a href="../../pages/zoos/eagles.html"></a>
            <div class="card-header">
              <img
               src="${petImges[index]?.img}"
                alt="${pet.commonName}"
              />
              <p>${pet.name}</p>
            </div>
            <div class="card-body">
              <h3>${pet.commonName}</h3>
              <p>
                ${pet.description}
              </p>
              <button class="btn-live">
                VIEW LIVE CAM
                <svg
                  width="25"
                  height="22"
                  viewBox="0 0 25 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>`,
      )
      .join("");
    petsCardContainer.innerHTML = pets;
  } catch (error) {
    if (!petsCardContainer) return;
    petsCardContainer.innerHTML = `<p class="loader">Internal server error</p>`;
    console.log("error", error);
  }
}
function cardsLoader() {
  const card = `<div class="card-loader"><div class="card-header card-loader-img"></div></div>`;
  return Array(9).fill(card).join("");
}
interface feedback {
  city: string;
  id: number;
  month: string;
  name: string;
  text: string;
  year: number;
}
interface feedbackApiResponse {
  data: feedback[];
}
function feedbackLoader() {
  const feedback = `<div class="feedback-loader"><div class="feedback-header"></div></div>`;
  return Array(9).fill(feedback).join("");
}
async function fetchReviews() {
  try {
    if (!testimonialsContainer) return;
    testimonialsContainer.innerHTML = feedbackLoader();
    const res = await fetch(
      "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/feedback",
    );
    if (!res.ok) {
      testimonialsContainer.innerHTML = `<p class="loader">Something went wrong. Please, refresh the page</p>`;
      return;
    }
    const result: feedbackApiResponse = await res.json();
    const feedback = result.data
      .map((card) => {
        return `            <div class="testimonial-card">
              <div class="card-head">
                <img src="../../assets/images/backticks.png" alt="backticks" />
                <h3>${card.city}, ${card.month} ${card.year}</h3>
              </div>
              <div class="card-body">
                <p>
                 ${card.text}
                </p>
                <h4>${card.name}</h4>
              </div>
            </div>`;
      })
      .join("");
    testimonialsContainer.innerHTML = feedback;
  } catch (error) {
    if (!testimonialsContainer) return;
    testimonialsContainer.innerHTML = `<p class="loader">Internal server error</p>`;
    console.log("error", error);
  }
}
fetchReviews();
checkUser();
fetchPets();
