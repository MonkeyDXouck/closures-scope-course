function piggyBank() {
    let saveCoins = 0;
    return (coins) => {
        saveCoins += coins
        console.log(`$${saveCoins}`)
    }
}

const saveMoney = piggyBank()
saveMoney(5)
saveMoney(4)
saveMoney(4)