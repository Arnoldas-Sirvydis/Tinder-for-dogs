import {dogs} from "./data.js"
import {getRandomDog} from "./utils.js"
import {Dog} from "./classes.js"




const dog = new Dog(getRandomDog())

function getDogHtml(dog) {
    return `
    <img class="profile-pic" src="${dog.avatar}" alt="dog-picture">
    <div class="dog-name-age">${dog.name}, ${dog.age}<div>
    <div class="bio">${dog.bio}<div>
    `
}