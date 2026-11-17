let flowerButton = document.getElementById("flowerButton")
let flowerDisplay = document.getElementById("flowerDisplay")

let upgradeClicker = document.getElementById("upgradeClicker")
let autoClicker = document.getElementById("autoClicker")

let petals = 0

let multiplier = 1
let multiplierCost = 25

let autoClickers = 0
let autoClickerCost = 15

// displays petals
function displayPetalsCount() {
    flowerDisplay.innerText = "You have " + Math.round(petals * 100) / 100 + " petals."
}

//adds petals on click
flowerButton.addEventListener('click', function () {
    petals += multiplier
    displayPetalsCount()
})

//udates price of clicker + check
upgradeClicker.addEventListener('click', function () {
    if (petals >= multiplierCost) {
        petals = petals - multiplierCost
        multiplierCost = multiplierCost * 1.3
        multiplier++
        displayPetalsCount()
        upgradeClicker.innerText = "Upgrade clicker for " + Math.round(multiplierCost * 100) / 100 + " petals."
    }

    else {
        alert("Not enough petals.")
    }
})

//updates price of autoclicker + check
autoClicker.addEventListener('click', function () {
    if (petals >= autoClickerCost) {
        petals = petals - autoClickerCost
        autoClickerCost = autoClickerCost * 1.25
        autoClickers++
        displayPetalsCount()
        autoClicker.innerText = "Upgrade autoclicker for " + Math.round(autoClickerCost * 100) / 100 + "petals."
    }

    else {
        alert("Not enough petals.")
    }
})

//autockicker
setInterval(function () {
    petals = petals + autoClickers * 0.1
    displayPetalsCount()

}, 1000 / 6)