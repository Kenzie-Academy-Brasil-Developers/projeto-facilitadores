export default class Adoption {
  static base_url = "https://kenzie-pet-adopt.herokuapp.com/api/adoption"
  static token = JSON.parse(localStorage.getItem("@kenzie-pets:token"))
  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`
  }

  static async adoptPet(pet_id) {
    return await fetch(`${this.base_url}/${pet_id}`, {
      method: "POST",
      headers: this.headers
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static async getAllAdoptions() {
    return await fetch(this.base_url, {
      method: "GET",
      headers: this.headers
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static async getUserAdoptions() {
    const user = JSON.parse(localStorage.getItem("@kenzie-pets:user"))

    const adoptions = await this.getAllAdoptions()

    const userAdoptions = adoptions.filter((elem) => elem.adoption_user.user_id === user.user_id)

    return userAdoptions
  }
}