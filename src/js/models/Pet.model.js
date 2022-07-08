import Adoption from "../controllers/adoption.controller.js";

export default class Pet {
  constructor(name, breed, image) {
    this.name = name;
    this.breed = breed;
    this.image = image;
  }

  createCard(idPet) {
    const card = document.createElement("div");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const info = document.createElement("div");
    const h3 = document.createElement("h3");
    const span = document.createElement("span");
    const button = document.createElement("button");

    card.classList.add("card", "petsHome__card");
    figure.classList.add("petsHome__avatar");
    info.classList.add("petsHome__info");
    button.classList.add("button", "button__primary", "button__primary--green");

    img.src = this.image;
    img.alt = this.name;
    h3.innerText = this.name;
    span.innerText = this.breed;
    button.innerText = "Me Adota";
    button.id = idPet;

    console.log(JSON.parse(localStorage.getItem("@kenzie-pets:token")));
    if (JSON.parse(localStorage.getItem("@kenzie-pets:token")) === null) {
      button.addEventListener("click", (event) => {
        const modalLogin = document.querySelector(".modal__login");
        modalLogin.style.display = "flex";
      });
    } else {
      button.addEventListener("click", async (event) => {
        const petId = event.target.id;
        await Adoption.adoptPet(petId);
        window.location.reload(true);
      });
    }

    figure.append(img);
    info.append(h3, span, button);
    card.append(figure, info);

    return card;
  }
}
