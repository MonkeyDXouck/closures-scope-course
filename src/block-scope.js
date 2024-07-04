function fruits() {
    if (true) {
        /** variables accessible only in the block */
        var fruit1 = "Apple" // with var the variable is accessible from anywhere
        let fruit2 = "Pineapple"
        const fruit3 = "Graves"

        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1)
}

fruits()