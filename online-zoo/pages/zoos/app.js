"use strict";
const aside = document.querySelector("aside");
const asideToggle = document.querySelector(".arrow-icon");
const carousel = document.querySelector(".carousel-inner");
const prevBtn = document.querySelector(".carousel button:first-child");
const nextBtn = document.querySelector(".carousel button:last-child");
const carouselItems = document.querySelectorAll(".carousel-inner .carousel-item");
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
const animalBioText = document.querySelectorAll(".animal-bio-text .text-box");
const asidePanel = aside?.querySelectorAll("a");
const animalBioDescription = document.querySelector(".animal-bio-intro p");
const animalBioImage = document.querySelector(".animal-bio img");
const didYouKnowParagraph = document.querySelector(".did-you-know p");
const liveAnimalHeader = document.querySelector(".live-animal-header-wrapper h2");
const petImagesArray = [
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
async function fetchAnimals(id, petImagesArray) {
    try {
        const res = await fetch(`https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets/${id}`);
        const result = await res.json();
        animalBioText.forEach((item) => {
            const paragraph = item.querySelector("p");
            if (!paragraph)
                return;
            if (!animalBioImage)
                return;
            if (!didYouKnowParagraph)
                return;
            if (!res.ok) {
                paragraph.innerText = "error";
            }
            const petImage = petImagesArray.find((image) => image.id === Number(id));
            if (animalBioImage && petImage) {
                animalBioImage.src = petImage.img;
            }
            didYouKnowParagraph.innerText = `${result.data.description}`;
            const key = item.dataset.value;
            if (key && result.data[key] !== undefined) {
                paragraph.innerText = String(result.data[key]);
            }
        });
        if (!animalBioDescription)
            return;
        animalBioDescription.innerText = `${result.data.detailedDescription}`;
    }
    catch (error) {
        console.log(error);
    }
}
async function fetchCameras(id) {
    const res = await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/cameras");
    const result = await res.json();
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
//# sourceMappingURL=app.js.map