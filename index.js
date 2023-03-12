import {dogs} from "./data.js"
import {getRandomNumber} from "./utils.js"
import {Dog} from "./classes.js"


const dog = new Dog(dogs[getRandomNumber()])

function getDogHtml(dog) {
    return `
    <div class="container">
        <img class="profile-pic" src="${dog.avatar}" alt="dog-picture">
        <div class="dog-name-age">${dog.name}, ${dog.age}<span class="bio">${dog.bio}</span></div>
    </div>
    `
}

function render() {
    document.getElementById("profile").innerHTML += getDogHtml(dog)
}

function swipeDog() {
    const index = dogs.findIndex(d => d.name === dog.name) 
    dogs[index].hasBeenSwiped = true 
}

function likeDog() {
    const index = dogs.findIndex(d => d.name === dog.name) 
    dogs[index].hasBeenLiked = true 
}


document.getElementById("button-swipe").addEventListener("click", swipeDog())
document.getElementById("button-like").addEventListener("click", likeDog())

render()

//<img class="badge-like" src="images/badge-like.png" alt="badge-like">
//<img class="badge-nope" src="images/badge-nope.png" alt="badge-nope">