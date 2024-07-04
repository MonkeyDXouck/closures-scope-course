function greeting() {
    let userName = "Anna" // variable accessible only in the function
    console.log(userName)

    if (userName === "Anan")
        console.log(`Hi ${userName}!`)
}

greeting()

console.log(userName)