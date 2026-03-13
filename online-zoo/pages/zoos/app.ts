const aside = document.querySelector<HTMLElement>("aside");
const asideToggle = document.querySelector<HTMLElement>(".arrow-icon");
const carousel = document.querySelector<HTMLElement>(".carousel-inner");
const prevBtn = document.querySelector<HTMLButtonElement>(
  ".carousel button:first-child",
);
const nextBtn = document.querySelector<HTMLButtonElement>(
  ".carousel button:last-child",
);
const carouselItems = document.querySelectorAll<HTMLElement>(
  ".carousel-inner .carousel-item",
);
asideToggle?.addEventListener("click", () => {
  aside?.classList.toggle("active");
});

prevBtn?.addEventListener("click", () => {
  if (carousel) {
    const scrollAmount = carousel.offsetWidth * 0.4;
    carousel?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
});
nextBtn?.addEventListener("click", () => {
  if (carousel) {
    const scrollAmount = carousel.offsetWidth * 0.4;
    carousel?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
});
carouselItems.forEach((item) => {
  item.addEventListener("click", () => {
    carouselItems.forEach((el) => el.classList.remove("active"));
    item.classList.toggle("active");
  });
});

const animalBioText = document.querySelectorAll<HTMLElement>(
  ".animal-bio-text .text-box",
);
const asidePanel = aside?.querySelectorAll<HTMLAnchorElement>("a");
const animalBioDescription = document.querySelector<HTMLParagraphElement>(
  ".animal-bio-intro p",
);
const animalBioImage =
  document.querySelector<HTMLImageElement>(".animal-bio img");
const didYouKnowParagraph =
  document.querySelector<HTMLParagraphElement>(".did-you-know p");
const liveAnimalHeader = document.querySelector<HTMLHeadingElement>(
  ".live-animal-header-wrapper h2",
);
interface animalBio {
  id: number;
  commonName: string;
  scientificName: string;
  type: string;
  size: string;
  diet: string;
  habitat: string;
  range: string;
  latitude: string;
  longitude: string;
  description: string;
  detailedDescription: string;
}
interface animalBioApiResponse {
  data: animalBio;
}

interface petImages {
  id: number;
  img: string;
}
interface petCamera {
  id: number;
  petId: number;
  text: string;
}
interface petCameraApiResponse {
  data: petCamera[];
}
const petImagesArray: petImages[] = [
  {
    id: 1,
    img: "../../assets/images/pandabio.png",
  },
  {
    id: 10,
    img: "../../assets/images/gorillabio.png",
  },
  {
    id: 2,
    img: "../../assets/images/lemurbio.png",
  },
  {
    id: 5,
    img: "../../assets/images/eaglebio.png",
  },
];

async function fetchAnimals(id: string, petImagesArray: petImages[]) {
  try {
    const res = await fetch(
      `https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets/${id}`,
    );
    const result: animalBioApiResponse = await res.json();
    animalBioText.forEach((item) => {
      const paragraph = item.querySelector("p");
      if (!paragraph) return;
      if (!animalBioImage) return;
      if (!didYouKnowParagraph) return;
      if (!res.ok) {
        paragraph.innerText = "error";
      }
      const petImage = petImagesArray.find((image) => image.id === Number(id));
      if (animalBioImage && petImage) {
        animalBioImage.src = petImage.img;
      }
      didYouKnowParagraph.innerText = `${result.data.description}`;
      const key = item.dataset.value as keyof animalBio;
      if (key && result.data[key] !== undefined) {
        paragraph.innerText = String(result.data[key]);
      }
    });
    if (!animalBioDescription) return;
    animalBioDescription.innerText = `${result.data.detailedDescription}`;
  } catch (error) {
    console.log(error);
  }
}
async function fetchCameras(id: string) {
  const res = await fetch(
    "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/cameras",
  );
  const result: petCameraApiResponse = await res.json();
  const filtered = result.data.filter((item) => item.petId == Number(id));
  console.log(filtered[0]);
  if (liveAnimalHeader) {
    liveAnimalHeader.innerText = filtered[0].text;
  }
}
asidePanel?.forEach((item) => {
  const id = item.dataset.id;
  item.addEventListener("click", () => {
    fetchAnimals(id ?? "1", petImagesArray);
    fetchCameras(id ?? "1");
  });
});
fetchAnimals("1", petImagesArray);
fetchCameras("1");
