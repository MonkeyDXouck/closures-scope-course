const myGlobal = 0

function testClosure() {
    const myNumber = 1
    console.log(myGlobal)

    function parent() {
        const inner = 2
        console.log(myNumber, myGlobal)

        function child() {
            console.log(myNumber, myGlobal, inner)
        }

        return child()
    }
    return parent()
}

testClosure()

function sumWithClosure(firstNum) {
    return (secondNum) => firstNum + secondNum
}

console.log(sumWithClosure(2)(5))

function greeting() {
    let username = "Hans"

    function displayUsername() {
        return `Hi ${username}`
    }

    return displayUsername
}

const functionG = greeting()
console.log(functionG)
console.log(functionG())