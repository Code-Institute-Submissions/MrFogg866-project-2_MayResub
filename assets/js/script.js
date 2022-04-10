console.log("Connected")

const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;

options.forEach((option) => {
    option.addEventListener("click", funtion () {
        const pInput = this.value;

        const cOptions = ["Cannonball", "Map", "Swords"];
        const cInput = cOptions[Math.floor(Math,random() * 3)];

        updateMoves(pInput, cInput);
        compareInputs(pInput, cInput);
        updateScore();
        if(checkWinner()){
            pScore = cScore= 0;
            updateScore();
        }
    });
});


function updateMoves(pInput, cInput){
    document.getElementById("p-move").src = `./assets/${pInput}.svg`;
    document.getElementById("c-move").src = `./assets/${cInput}.svg`;
  }


  function compareInputs(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;
    if (pInput === cInput) {
      alert(`${currentMatch} is a Tie`);
      return;
    }


//Check for Cannonball
if (pInput === "Cannonball") {
    if (cInput === "Swords") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }


 //Check for Map
 else if (pInput === "Map") {
    if (cInput === "Cannonball") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }

  //Check for Swords
  else {
    if (cInput === "Map") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
}

function updateScore() {
    document.getElementById("p-score").textContent = pScore;
    document.getElementById("c-score").textContent = cScore;
  }

  function checkWinner() {
    if (pScore === 5 || cScore === 5) {
      const winner =
        pScore === 5
          ? "You win the game! Congratulations!"
          : "Computer wins the game! Try again next time!";
      alert(winner);
      return true;
    }
    return false;
  }