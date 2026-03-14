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
const didYouKnowSection = document.querySelector<HTMLElement>(".did-you-know");
const didYouKnowParagraph =
  document.querySelector<HTMLParagraphElement>(".did-you-know p");
const liveAnimalHeaderWrapper = document.querySelector<HTMLHeadingElement>(
  ".live-animal-header-wrapper",
);
const animalBioSection = document.querySelector<HTMLElement>(".animal-bio");
const viewMapBtn = document.querySelector<HTMLButtonElement>(".view-map");
const mapDialog = document.getElementById("animal-map") as HTMLDialogElement;
const mapIframe = document.getElementById(
  "animal-map-iframe",
) as HTMLIFrameElement;
const mapDialogeClose = mapDialog.querySelector<HTMLSpanElement>("span");
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
function petBioLoader() {
  const loader = `<div class="pet-bio-loader"></div>`;
  return Array(1).fill(loader).join("");
}
function didYouKnowLoader() {
  const loader = `<div class="did-you-know-loader"></div>`;
  return Array(1).fill(loader).join("");
}
function animalBioIntroLoader() {
  const loader = `<div class="animal-bio-intro-loader"></div>`;
  return Array(1).fill(loader).join("");
}
function liveCamHeaderLoader() {
  const loader = `<div class="live-animal-camera-header"></div>`;
  return Array(1).fill(loader).join("");
}
async function fetchAnimals(id: string, petImagesArray: petImages[]) {
  try {
    if (!animalBioSection) return;
    if (!didYouKnowSection) return;
    if (!didYouKnowParagraph) return;
    if (!animalBioDescription) return;
    const originalContent = animalBioSection.innerHTML;
    animalBioSection.innerHTML = petBioLoader();
    didYouKnowParagraph.innerHTML = didYouKnowLoader();
    animalBioDescription.innerHTML = animalBioIntroLoader();
    const res = await fetch(
      `https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets/${id}`,
    );
    const result: animalBioApiResponse = await res.json();
    animalBioSection.innerHTML = originalContent;
    const freshViewMapBtn =
      animalBioSection.querySelector<HTMLAnchorElement>(".view-map");
    freshViewMapBtn?.addEventListener("click", () => {
      mapDialog.showModal();
    });
    if (!res.ok) {
      animalBioSection.innerHTML = `<p class="error">Something went wrong. Please, refresh the page</p>`;
      didYouKnowParagraph.innerText =
        "Something went wrong. Please, refresh the page";
      animalBioDescription.innerHTML = `<p class="error">Something went wrong. Please, refresh the page</p>`;
    }
    const freshImages = animalBioSection.querySelector<HTMLImageElement>("img");
    const freshTextBoxes =
      animalBioSection.querySelectorAll<HTMLElement>(".text-box");
    const petImage = petImagesArray.find((image) => image.id === Number(id));
    if (freshImages && petImage) {
      freshImages.src = petImage.img;
    }
    didYouKnowParagraph.innerText = result.data.description;
    freshTextBoxes.forEach((item) => {
      const paragraph = item.querySelector("p");
      if (!paragraph) return;
      const key = item.dataset.value as keyof animalBio;
      if (key && result.data[key] !== undefined) {
        paragraph.innerText = String(result.data[key]);
        mapIframe.src = `https://maps.google.com/maps?q=${result.data.latitude},${result.data.longitude}&z=5&output=embed`;
      }
    });
    animalBioDescription.innerText = result.data.detailedDescription;
  } catch (error) {
    console.log(error);
  }
}
async function fetchCameras(id: string) {
  if (!liveAnimalHeaderWrapper) return;
  const original = liveAnimalHeaderWrapper.innerHTML;
  liveAnimalHeaderWrapper.innerHTML = liveCamHeaderLoader();
  const res = await fetch(
    "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/cameras",
  );
  const result: petCameraApiResponse = await res.json();
  liveAnimalHeaderWrapper.innerHTML = original;
  const WrapperHeader =
    liveAnimalHeaderWrapper.querySelector<HTMLHeadingElement>(
      ".live-animal-header-wrapper h2",
    );
  if (!WrapperHeader) return;
  if (!res.ok) {
    WrapperHeader.innerText = `Something went wrong. Please, refresh the page`;
    return;
  }
  const filtered = result.data.filter((item) => item.petId == Number(id));
  WrapperHeader.innerText = filtered[0].text;
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
mapDialogeClose?.addEventListener("click", () => {
  mapDialog.close();
});
mapDialog?.addEventListener("click", (e) => {
  if (e.target === mapDialog) {
    mapDialog.close();
  }
});
