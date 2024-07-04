function createPetList() {
    let list = []
    return (pet) => {
        if (pet)
            list.push(pet)
        return list
    }
}

const registration = createPetList()

registration("Nikki")
registration({ name: "Lucas", age: 8, pet: "dog" })
console.table(registration())