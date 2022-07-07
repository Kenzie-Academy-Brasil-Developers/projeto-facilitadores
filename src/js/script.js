import LoginRequest from "./controllers/login.controller.js";
import PetRequests from "./controllers/pets.controller.js";
import UserRequests from './controllers/user.controller.js'

// const login = await LoginRequest.login({
//   "email": "kenzinho@mail.com",
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

// const deleteUser = await UserRequests.deleteUserProfile()

// console.log(user)
// console.log(login)
// console.log(deleteUser)

//PETSREQUESTS

// const pet = await PetRequests.createPet({
//   pet_name: "Elsa",
//   pet_breed: "Khao Manee",
//   pet_avatar:
//     "https://static1.patasdacasa.com.br/articles/5/15/85/@/7582-o-khao-manee-e-uma-verdadeira-graca-e-te-articles_media_desktop-1.jpg",
// });

const pets = await PetRequests.listAllPets();

// console.log(pets);
// const pet = await PetRequests.listPetById(12)

// const petUpdate = await PetRequests.updatePet(15, {
//   "pet_avatar": "https://static1.patasdacasa.com.br/articles/5/15/85/@/7582-o-khao-manee-e-uma-verdadeira-graca-e-te-articles_media_desktop-1.jpg",
// })

// const deletedPet = await PetRequests.deletePet(15)

// console.log(deletedPet)
console.log(pets)