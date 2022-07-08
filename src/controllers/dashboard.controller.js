import Adoptions from '../controllers/adoption.controller.js'
import Modal from './modalDashboard.controller.js';

export default class DashBoardComponents {
    static body = document.querySelector("body");

    static main = document.querySelector("main");

    static user = JSON.parse(localStorage.getItem("@kenzie-pets:user"))

    static profile() {
        const section = document.createElement("section")
        section.classList.add("userSection")
        
        section.insertAdjacentHTML("afterbegin", `
            <section class="userAvatar">
            <div class="container">
                <figure>
                    <img src=${this.user.user_avatar}>
                </figure>
            </div>
            </section>

            <section class="userInfo">
                <div class="container">
                    <div class="card userInfo__card">
                        <h2>Dados Pessoais</h2>

                        <ul>
                            <li>
                                <p>Nome: <span class="userName">${this.user.user_name}</span></p>
                            </li>

                            <li>
                                <p>E-mail: <span class="userEmail">${this.user.user_email}</span></p>
                            </li>
                        </ul>

                        <nav>
                            <button type="button" class="button button__primary button__primary--purple">Atualizar informações</button>
                            <button type="button" class="button button__secondary button__secondary--red">Deletar conta</button>
                        </nav>
                    </div>
                </div>
            </section> 
        `)

        this.main.appendChild(section)
    }

    static async filtersDashboard() {
        const section = document.createElement('section')
       section.classList.add("filter", "dashboard")

       const cadastrarPetButton = document.createElement("button")
       cadastrarPetButton.classList.add(
        "button", 
        "button__primary", 
        "button__primary--green"
        )
        cadastrarPetButton.type = "button"
        cadastrarPetButton.innerText = "Cadastrar novo pet"

        cadastrarPetButton.addEventListener("click", () => {
            let bodyModal = Modal.bodyModalCadastrarPet()
            Modal.modalDashboard(bodyModal, "Cadastrar pet")
        })

        const form = document.createElement("form")
        form.classList.add("filter_form")

        const select = document.createElement("select")
        select.name = "search"
        select.id = "search"

        const userAdoptions = await Adoptions.getUserAdoptions()
        userAdoptions.forEach((pet) => {
            const option = document.createElement("option")
            option.value = pet.adoption_pet.pet_breed
            option.innerText = pet.adoption_pet.pet_breed
            select.appendChild(option)
        })

        const searchButton = document.createElement("button")
        searchButton.classList.add(
            "button", 
            "button__primary", 
            "button__primary--purple"
        )

        searchButton.type = "button"
        searchButton.innerText = "Buscar"

        form.append(select, searchButton)
        section.append(cadastrarPetButton, form)

        this.main.appendChild(section)
    }

    static cardPetDashboard(pet) {
        const div = document.createElement('div')
        div.classList.add("card", "petsDashboard__card")

        const figure = document.createElement("figure")
        figure.classList.add("petsDashboard__avatar")

        figure.insertAdjacentHTML("afterbegin", `
            <img src=${pet.adoption_pet.pet_avatar} alt="${pet.adoption_pet.pet_name}">`)

        const divInfo = document.createElement("div")
        divInfo.classList.add("petsDashboard__info")

        const ul = document.createElement("ul")
        ul.insertAdjacentHTML("afterbegin", `
            <li>
                <p>Nome: <span class="petName">${pet.adoption_pet.pet_name}</span></p>
            </li>

            <li>
                <p>Raça: <span class="petBreed">${pet.adoption_pet.pet_breed}</span></p>
            </li>

            <li>
                <p>Adotável: <span class="petAdoptable">${pet.adoption_pet.pet_adoptable}</span></p>
            </li>
        `)
        
        const button = document.createElement("button")
        button.type = "button"
        button.innerText = "Atualizar"
        button.classList.add(
            "button", 
            "button__primary", 
            "button__primary--purple"
        )
        button.id = pet.adoption_pet.pet_id

        button.addEventListener("click", () => {
            let body = Modal.bodyModalAtualizarPet(button.id)
            Modal.modalDashboard(body, "Atualizar pet")

        })

        divInfo.append(ul, button)
        div.append(figure, divInfo)

        return div
    }

    static async renderAdoptedPets() {
        const pets = await Adoptions.getUserAdoptions()

        const section = document.createElement("section")
        section.classList.add("petsDashboard")

        pets.forEach((pet) => {
            const petCard = this.cardPetDashboard(pet)
            section.appendChild(petCard)
        })

        this.main.appendChild(section)
    }
}