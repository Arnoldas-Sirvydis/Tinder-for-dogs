import {dogs} from "./data.js"

class Dog {
    constructor(data) {
      Object.assign(this, data)
      const {name, avatar, age, bio, hasBeenLiked, hasBeenSwiped} = this  
    }
}

