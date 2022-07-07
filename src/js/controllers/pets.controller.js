export default class PetRequests {
  static base_url = "https://kenzie-pet-adopt.herokuapp.com/api/pets"
  static token = JSON.parse(localStorage.getItem("@kenzie-pets:token"))
  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`
  }

  static async createPet(createPetData) {
    return await fetch(this.base_url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(createPetData)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static async listAllPets() {
    return await fetch(this.base_url, {
      method: "GET",
      headers: this.headers
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static async listPetById(pet_id) {
    return await fetch(`${this.base_url}/${pet_id}`, {
      method: "GET",
      headers: this.headers
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static async updatePet(pet_id, updatePetData) {
    return await fetch(`${this.base_url}/${pet_id}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(updatePetData)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static async deletePet(pet_id) {
    return await fetch(`${this.base_url}/${pet_id}`, {
      method: "DELETE",
      headers: this.headers
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }
}

