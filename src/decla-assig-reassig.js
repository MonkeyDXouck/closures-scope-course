/** var declaration */

var firstName // declaration = undefined
firstName = "Oscar" // assignment
console.log(firstName)

var firstName = "Erick" // re-declaration assignment
console.log(firstName)

firstName = "Frank" // reassignment
console.log(firstName)

/** let declaration */

let lastName = "Gomez" // declaration assignment
lastName = "Perez" // reassignment

// let lastName = "Gonzales" // Error: Identifier 'lastName' has already been declared

console.log(lastName)

/** const declaration */

const fruit = "apple" // declaration and assignment
// fruit = "pineapple" // no reassignment
// const fruit = "apple" // no <<re-declaration assignment

console.log(fruit)

const vehicles = []
vehicles.push("🏎️")
console.log(vehicles)

vehicles.pop()
console.log(vehicles)