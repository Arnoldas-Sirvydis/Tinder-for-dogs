import {dogs} from "./data.js"
import {getRandomNumber} from "./utils.js"
import {Dog} from "./classes.js"

function getNextDog() {
    for(let dog of dogs) {
        if(!dog.hasBeenSwiped && !dog.hasBeenLiked) {
            return dog
        }
    }
    return null
}


const dog = getNextDog() ? new Dog(getNextDog()) : null

function getDogHtml(dog) {
    return `
    <div class="container">
        <img class="profile-pic" src="${dog.avatar}" alt="dog-picture">
        <div class="dog-name-age">${dog.name}, ${dog.age}<span class="bio">${dog.bio}</span></div>
    </div>
    `
}

function render() {
    if (dog !== null && dog !== undefined) { 
      document.getElementById("profile").innerHTML += getDogHtml(dog);
    }
}


//finds a matching dog in dogs array
function findDogMatch() {
    return dogs.findIndex(d => d.name === dog.name) 
}

function swipeDog(dog) {
    dogs[findDogMatch(dog)].hasBeenSwiped = true 
}

function likeDog(dog) {
    dogs[findDogMatch(dog)].hasBeenLiked = true 
}


document.getElementById("button-swipe").addEventListener("click", () => swipeDog(dog))
document.getElementById("button-like").addEventListener("click", () => likeDog(dog))

render()

//<img class="badge-like" src="images/badge-like.png" alt="badge-like">
//<img class="badge-nope" src="images/badge-nope.png" alt="badge-nope">
