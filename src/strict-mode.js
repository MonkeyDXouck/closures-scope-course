'use strict'
/**  It's good practice to use it to write more robust code 
 * and maintain compatibility with future versions of JavaScript. */

pi = 3.1416 // Error: x is not defined
console.log(pi)

function test() {
    console.log(this) // undefined
}
test()