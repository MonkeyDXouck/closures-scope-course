/**
 * Hoisting
 * to describe that variable and function declarations
 * are moved to the top of the nearest scope.
 */

console.log(nameOfDog)
var nameOfDog = "nikki"
console.log(nameOfDog)

brandOfCar()
function brandOfCar() {
    console.log(`La mejor marca de coches es ${brand}`)
}
var brand = "******"
brandOfCar()