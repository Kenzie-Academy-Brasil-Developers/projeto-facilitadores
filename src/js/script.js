import LoginRequest from "./controllers/login.controller.js";
import UserRequests from './controllers/user.controller.js'

// const login = await LoginRequest.login({
//   "email": "jardel@mail.com",
//   "password": "123456"
// })

// const user = await UserRequests.createUser({
//   "user_name": "Kenzinho",
//   "user_email": "kenzinho@mail.com",
//   "user_password": "123456",
//   "user_avatar": "https://www.google.com/images/kenzinho"
// })

// const users = await UserRequests.listAllUsers()
// const kenzinho = await UserRequests.listUserById(6)
// const updateKenzinho = await UserRequests.updateUserProfile({
//   "user_name": "Kenzier",
//   "user_email": "kenzier@mail.com",
//   "user_avatar": "https://www.google.com/images/kenzier"
// })

const deleteUser = await UserRequests.deleteUserProfile()

console.log(deleteUser)