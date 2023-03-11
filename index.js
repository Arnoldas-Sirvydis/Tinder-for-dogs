import {dogs} from "./data.js"
import {getRandomNumber} from "./utils.js"

class Dog {
    constructor(data) {
      Object.assign(this, data)
      const {name, avatar, age, bio, hasBeenLiked, hasBeenSwiped} = this  
    }
}

