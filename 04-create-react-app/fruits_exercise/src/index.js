import fruits from "./fruits"
import { choice, remove } from "./helpers"

let fruit = choice(fruits)

console.log(`I would like one ${fruit}, please`)

console.log(`Here you go: ${fruit}`)

let remaining = remove(fruits, fruit)

console.log(`We have ${remaining} left.`)
