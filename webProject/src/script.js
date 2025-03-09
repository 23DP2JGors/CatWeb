async function getCatFact() {
    try {
        let response = await fetch("https://catfact.ninja/fact");
        let data = await response.json();
        document.getElementById("catFact").innerText = data.fact;
    } catch (error) {
        document.getElementById("catFact").innerText = "Error loading cat fact.";
        console.error("Error fetching cat fact:", error);
    }
}

async function getRandomCat() {
    try {
        let response = await fetch("https://api.thecatapi.com/v1/images/search");
        let data = await response.json();
        let catImage = document.getElementById("catImage");
        catImage.src = data[0].url;
        catImage.style.display = "block";
    } catch (error) {
        console.error("Error fetching cat image:", error);
    }
}

function startGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = prompt("Guess a number between 1 and 10");

    if (userGuess !== null) {
        let guessNumber = parseInt(userGuess);
        if (!isNaN(guessNumber)) {
            if (guessNumber === randomNumber) {
                alert("Congratulations! You guessed the number: " + randomNumber);
            } else {
                alert("Wrong! The correct number was: " + randomNumber);
            }
        } else {
            alert("Please enter a valid number!");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("catFact").innerText = "Loading a fun cat fact...";
    getCatFact();
    
    let gameButton = document.getElementById("startGameButton");
    if (gameButton) {
        gameButton.addEventListener("click", startGame);
    }
});
