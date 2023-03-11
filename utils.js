import {dogs} from "./data.js"

function getRandomNumber() {
    return Math.floor(Math.random() * 3)
}

function getRandomDog() {
    return dogs[getRandomNumber()]
}

export {getRandomNumber, getRandomDog}