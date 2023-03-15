import {dogs} from "./data.js"
import {getRandomNumber} from "./utils.js"
import {Dog} from "./classes.js"

let profileHtml = document.getElementById("profile")

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
        <img class="badge-nope" src="images/badge-nope.png" alt="badge-nope">
        <img class="badge-like" src="images/badge-like.png" alt="badge-like">
    </div>
    `
}

function render() {
    if (dog !== null && dog !== undefined) { 
        profileHtml.innerHTML = getDogHtml(dog);
    } else {
        profileHtml.innerHTML = noMoreDogsHtml()
    }
}

function noMoreDogsHtml() {
    return`
    <div class="container">
        <img class="profile-pic" src="images/dog-house.jpg" alt="dog-picture">
    </div>
    `
}


//finds a matching dog in dogs array
function findDogMatch() {
    return dogs.findIndex(d => d.name === dog.name) 
}

function swipeDog(dog) {
    dogs[findDogMatch(dog)].hasBeenSwiped = true
    document.querySelector(".badge-nope").style.display = "block"
}

function likeDog(dog) {
    dogs[findDogMatch(dog)].hasBeenLiked = true
    document.querySelector(".badge-like").style.display = "block"
}   


document.getElementById("button-swipe").addEventListener("click", () => swipeDog(dog))
document.getElementById("button-like").addEventListener("click", () => likeDog(dog))

render()




