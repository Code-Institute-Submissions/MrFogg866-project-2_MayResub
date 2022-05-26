const options = document.querySelectorAll(".options");
let pTally = 0;
let cTally = 0;

options.forEach((option) => {
  option.addEventListener("click", function () {
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

function updateMoves(pInput, cInput) {
  document.getElementById(
    "p-move"
  ).src = `./assets/images/${pInput.toLowerCase()}.PNG`;
  document.getElementById(
    "c-move"
  ).src = `./assets/images/${cInput.toLowerCase()}.PNG`;
}

function compareInputs(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;
  if (pInput === cInput) 
    displayMessage(`${currentMatch} is a Tie`);
    return;
  }

  //Check for Cannonball
  if (pInput === "Cannonball") {
    if (cInput === "Swords") {
      document.getElementById(
        "modal-result"
      ).innerHTML = `${currentMatch} = You Win`;
      pTally++;
    } else {
      document.getElementById(
        "modal-result"
      ).innerHTML = `${currentMatch} = Computer Wins`;
      cTally++;
    }
    document.getElementById("modal-img").src = "assets/images/img.jpeg";

    document.getElementById("myModal").style.display = "block";
  }

  //Check for Map
  else if (pInput === "Map") {
    if (cInput === "Cannonball") {
      document.getElementById(
        "modal-result"
      ).innerHTML = `${currentMatch} = You Win`;
      pTally++;
    } else {
      document.getElementById(
        "modal-result"
      ).innerHTML = `${currentMatch} = Computer Wins`;

      cTally++;
    }
    document.getElementById("modal-img").src = "assets/images/img.jpeg";

    document.getElementById("myModal").style.display = "block";
  }

  //Check for Swords
  else {
    if (cInput === "Map") {
      document.getElementById(
        "modal-result"
      ).innerHTML = `${currentMatch} = You Win`;
      pTally++;
    } else {
      document.getElementById(
        "modal-result"
      ).innerHTML = `${currentMatch} = Computer Wins`;
      cTally++;
    }
    document.getElementById("modal-img").src = "assets/images/img.jpeg";

    document.getElementById("myModal").style.display = "block";
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
      pTally === 3
        ? ((document.getElementById("modal-result").innerHTML =
            "Congratulations you win the Treasure"),
          (document.getElementById("modal-img").src =
            "assets/images/treasure-chest.JPEG"))
        : ((document.getElementById("modal-result").innerHTML =
            "Bad luck the treasure has been stolen"),
          (document.getElementById("modal-img").src =
            "assets/images/skull-bones.JPEG"));
    // alert(winner);
    document.getElementById("myModal").style.display = "block";
    return true;
  }
  return false;
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("modal-img").src = "";
}


  
    