/** variables */

var a // declaration

var b = "b" // declaration and assignment

b = "c" // reassignment

var a = "a" // redeclaration

/** Global scope */
var fruit = "Apple" // global variable

function bestFruit() {
    console.log(fruit)
}

bestFruit()

/** Global variable without declaration */
function countries() {
    country = "United Kingdom"
    console.log(country)
}

countries()
console.log(country)