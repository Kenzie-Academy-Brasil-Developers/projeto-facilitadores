import Pet from "../models/Pet.model.js";
import LoginRequest from "./login.controller.js";
import PetRequests from "./pets.controller.js";

export default class ComponentsDom {
  static body = document.querySelector("body");
  static header() {
    const header = document.createElement("header");
    const div = document.createElement("div");
    const figure = document.createElement("figure");
    const divButton = document.createElement("div");
    const img = document.createElement("img");
    const button = document.createElement("button");
    const buttonAdmin = document.createElement("button");

    header.classList.add("header");
    div.classList.add("container");
    divButton.classList.add("header__buttons");
    button.classList.add(
      "button",
      "button__primary",
      "button__primary--purple",
      "login__button"
    );
    buttonAdmin.classList.add(
      "button",
      "button__primary",
      "button__primary--purple"
    );

    img.src = "../../src/assets/img/logo.svg";
    img.alt = "KenziePets";

    button.type = "button";
    buttonAdmin.type = "button";
    buttonAdmin.innerText = "Admin";
    if (window.location.href.includes("index")) {
      buttonAdmin.addEventListener("click", (event) => {
        window.location.href = "../../src/js/views/dashboard.html";
      });
    } else {
      buttonAdmin.addEventListener("click", (event) => {
        window.location.href = "../../index.html";
      });
    }

    if (JSON.parse(localStorage.getItem("@kenzie-pets:user")) === null) {
      button.innerText = "Login";
      button.addEventListener("click", (event) => {
        const modal = document.querySelector(".modal__login");
        modal.style.display = "flex";
      });
      buttonAdmin.style.display = "none";
    } else {
      button.innerText = "Logout";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.removeItem("@kenzie-pets:user");
        localStorage.removeItem("@kenzie-pets:token");
        window.location.reload(true);
      });
      buttonAdmin.style.display = "flex";
    }

    divButton.append(button, buttonAdmin);
    figure.append(img);
    div.append(figure, divButton);
    header.append(div);
    this.body.append(header);
  }

  static modal() {
    const modal = document.createElement("div");
    const container = document.createElement("div");
    const modalInner = document.createElement("div");

    const buttonClose = document.createElement("button");
    const figure = document.createElement("figure");
    const img = document.createElement("img");

    const h2 = document.createElement("h2");

    const form = document.createElement("form");
    const inputEmail = document.createElement("input");
    const inputPassword = document.createElement("input");
    const formButton = document.createElement("button");

    const p = document.createElement("p");

    modal.classList.add("modal", "modal__login");
    container.classList.add("container");
    modalInner.classList.add("modal__inner");

    buttonClose.classList.add("modal__close");

    form.classList.add("modal__form");
    formButton.classList.add(
      "button",
      "button__primary",
      "button__primary--purple"
    );

    buttonClose.type = "button";
    buttonClose.addEventListener("click", (event) => {
      modal.style.display = "none";
    });

    img.src = "../../src/assets/img/close-button.svg";
    img.alt = "Fechar";

    h2.innerText = "Login";
    formButton.innerText = "Entrar";
    formButton.addEventListener("click", async (event) => {
      event.preventDefault();
      const data = {};
      const formValues = [...event.srcElement.form];
      formValues.forEach((input) => {
        if (input.value !== "") {
          data[input.name] = input.value;
        }
      });
      await LoginRequest.login(data);
    });

    inputEmail.type = "email";
    inputEmail.name = "email";
    inputEmail.id = "email";
    inputEmail.placeholder = "E-mail";

    inputPassword.type = "password";
    inputPassword.name = "password";
    inputPassword.id = "password";
    inputPassword.placeholder = "Senha";

    formButton.type = "button";

    p.innerHTML = `Não tem cadastro? <a href="#">Clique aqui</a> para se cadastrar.`;

    figure.append(img);
    form.append(inputEmail, inputPassword, formButton);
    buttonClose.append(figure);
    modalInner.append(buttonClose, h2, form);
    container.append(modalInner);
    modal.append(container);
    this.body.append(modal);

    modal.style.display = "none";
  }

  static async petsSection() {
    const main = document.createElement("main");
    const container = document.createElement("container");
    const section = document.createElement("section");
    const form = document.createElement("form");
    const select = document.createElement("select");
    const firstOption = document.createElement("option");
    const button = document.createElement("button");

    main.classList.add("home");
    container.classList.add("container");
    section.classList.add("filter");
    button.classList.add(
      "button",
      "button__primary",
      "button__primary--purple"
    );

    select.name = "breed";
    select.id = "breed";

    button.type = "button";
    button.innerText = "Buscar";

    select.append(firstOption);
    form.append(select, button);
    section.append(form);
    container.append(section);

    const pets = await PetRequests.listAllPets();
    console.log(pets);

    const sectionPets = document.createElement("section");
    sectionPets.classList.add("petsHome");

    const petsNotAdoptable = pets.filter((pet) => {
      return pet.pet_adoptable;
    });

    petsNotAdoptable.forEach((pet) => {
      const newPet = new Pet(pet.pet_name, pet.pet_breed, pet.pet_avatar);
      const cardPet = newPet.createCard(pet.pet_id);
      sectionPets.append(cardPet);
    });

    container.append(sectionPets);
    main.append(container);

    this.body.append(main);
  }

  static footer() {
    const footer = document.createElement("footer");
    const container = document.createElement("div");
    const span = document.createElement("span");

    footer.classList.add("footer");
    container.classList.add("container");

    span.innerText = "KenziePets | Todos os Direitos Reservados";

    container.append(span);
    footer.append(container);
    this.body.append(footer);
  }
}
