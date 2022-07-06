export default class LoginRequest {
  static base_url = 'https://kenzie-pet-adopt.herokuapp.com/api/login'

  static async login(loginData) {
    return await fetch(this.base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    })
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      localStorage.setItem("@kenzie-pets:user", JSON.stringify(res.response))
      localStorage.setItem("@kenzie-pets:token", JSON.stringify(res.token))
      return res
    })
    .catch(err => console.log(err))
  }
}