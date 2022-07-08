import PetRequests from "./pets.controller.js";

export default class Modal {
    static body = document.querySelector("body");

    static main = document.querySelector("main");

    static modalDashboard(elem, title) {
        const modal = document.createElement("div");
        const container = document.createElement("div");
        const modalInner = document.createElement("div");

        const buttonClose = document.createElement("button");
        const figure = document.createElement("figure");
        const img = document.createElement("img");

        const h2 = document.createElement("h2");
        
        modal.classList.add("modal", "modal__login");
        container.classList.add("container");
        modalInner.classList.add("modal__inner");

        buttonClose.classList.add("modal__close");

        buttonClose.type = "button";
        buttonClose.addEventListener("click", () => {
            modal.style.display = "none";
        });

        img.src = "../../src/assets/img/close-button.svg";
        img.alt = "Fechar";

        h2.innerText = title;

        figure.append(img);
        buttonClose.append(figure);
        modalInner.append(buttonClose, h2, elem);
        container.append(modalInner);
        modal.append(container);
        this.body.append(modal);

        // modal.style.display = "none";
    }

    static bodyModalCadastrarPet() {
        const form = document.createElement("form");
        const inputNome = document.createElement("input");
        const inputRaca = document.createElement("input");
        const inputAvatar = document.createElement("input");
        const formButton = document.createElement("button");

        form.classList.add("modal__form");
        formButton.classList.add(
          "button",
          "button__primary",
          "button__primary--purple"
        );
        
        inputNome.type = "text";
        inputNome.name = "pet_name";
        inputNome.id = "pet_name";
        inputNome.placeholder = "Nome";
    
        inputRaca.type = "text";
        inputRaca.name = "pet_breed";
        inputRaca.id = "pet_breed";
        inputRaca.placeholder = "Raça";
    
        inputAvatar.type = "text";
        inputAvatar.name = "pet_avatar";
        inputAvatar.id = "pet_avatar";
        inputAvatar.placeholder = "Avatar";

        formButton.innerText = "Cadastrar";
        formButton.addEventListener("click", async (event) => {
            event.preventDefault();
            const data = {};
            const formValues = [...event.target.form];
            formValues.forEach((input) => {
              if (input.value !== "") {
                data[input.name] = input.value;
              }
            });
            await PetRequests.createPet(data);
          });
        
          formButton.type = "button"

        form.append(inputNome, inputRaca, inputAvatar, formButton)

        return form        
    }

    static bodyModalAtualizarPet(pet_id) {
        const form = document.createElement("form");
        const inputAvatar = document.createElement("input");
        const formButton = document.createElement("button");
    
        form.classList.add("modal__form");
        formButton.classList.add(
          "button",
          "button__primary",
          "button__primary--purple"
        );

        inputAvatar.type = "text";
        inputAvatar.name = "pet_avatar";
        inputAvatar.id = "pet_avatar";
        inputAvatar.placeholder = "Avatar";

        formButton.type = "button";

        formButton.innerText = "Atualizar";
        formButton.addEventListener("click", async (event) => {
          event.preventDefault();
          const avatarUrl = inputAvatar.value
          const data = {pet_avatar: avatarUrl}
          await PetRequests.updatePet(pet_id, data);
        });
    
        form.append(inputAvatar, formButton);

        return form
    }
}