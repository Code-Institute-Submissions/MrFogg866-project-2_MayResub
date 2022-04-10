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
  else if (pinput === "Swords") {
    if (cInput === "Map") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
}