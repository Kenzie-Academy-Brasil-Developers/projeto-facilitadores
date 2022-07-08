export default class UserRequests {
  static base_url = "https://kenzie-pet-adopt.herokuapp.com/api/user"
  static token = JSON.parse(localStorage.getItem("@kenzie-pets:token"))
  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`
  }

  static async createUser(createUserData) {
    return await fetch(this.base_url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(createUserData)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static async listAllUsers() {
    // const token = JSON.parse(localStorage.getItem("@kenzie-pets:token"))

    return await fetch(this.base_url, {
      method: "GET",
      headers: this.headers
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static async listUserById(user_id) {
    return await fetch(`${this.base_url}/${user_id}`, {
      method: "GET",
      headers: this.headers
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static async updateUserProfile(updateData) {
    return await fetch(`${this.base_url}/profile`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(updateData)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static async deleteUserProfile() {
    return await fetch(`${this.base_url}/profile`, {
      method: "DELETE",
      headers: this.headers,
    })
    .then(res => res.json())
    .then(res => {
      localStorage.removeItem("@kenzie-pets:user")
      localStorage.removeItem("@kenzie-pets:token")
      return res
    })
    .catch(err => console.log(err))
  }
}