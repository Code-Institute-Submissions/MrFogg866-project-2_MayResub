const options = document.querySelectorAll(".options");
let pTally = 0;
let cTally = 0;

options.forEach((option) => {
    option.addEventListener("click", function() {
        const pInput = this.value;

        const cOptions = ["Cannonball", "Map", "Swords"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        updateMoves(pInput, cInput);
        compareInputs(pInput, cInput);
        updateTally();
        if (checkWinner()) {
            pTally = cTally = 0;
            updateTally();
        }
    });
});

function displayMessage(message) {
    document.getElementById('display-message').innerHTML = message;

}


function updateMoves(pInput, cInput) {

    document.getElementById("p-move").src = `./assets/images/${pInput.toLowerCase()}.PNG`;
    document.getElementById("c-move").src = `./assets/images/${cInput.toLowerCase()}.PNG`;
}


function compareInputs(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;
    if (pInput === cInput) {
        displayMessage(`${currentMatch} is a Tie`);
        return;
    }


    //Check for Cannonball
    if (pInput === "Cannonball") {
        if (cInput === "Swords") {
            alert(`${currentMatch} = You Win`);
            pTally++;
        } else {
            alert(`${currentMatch} = Computer Wins`);
            cTally++;
        }
    }


    //Check for Map
    else if (pInput === "Map") {
        if (cInput === "Cannonball") {
            alert(`${currentMatch} = You Win`);
            pTally++;
        } else {
            alert(`${currentMatch} = Computer Wins`);
            cTally++;
        }
    }

    //Check for Swords
    else {
        if (cInput === "Map") {
            alert(`${currentMatch} = You Win`);
            pTally++;
        } else {
            alert(`${currentMatch} = Computer Wins`);
            cTally++;
        }
    }
}
// Update player & computer tally
function updateTally() {
    document.getElementById("p-tally").textContent = pTally;
    document.getElementById("c-tally").textContent = cTally;
}
//winner score and alert function
function checkWinner() {
    if (pTally === 3 || cTally === 3) {
        const winner =
            pTally === 3 ? "You win the game! Congratulations!" : "Computer wins the game! Try again next time!";
        alert(winner);
        return true;
    }