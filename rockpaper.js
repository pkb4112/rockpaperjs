let choices = ["ROCK","PAPER","SCISSORS"];
let p1Wins = 0;
let p2Wins = 0;
let roundsToWin = 5;

//Math.ceil(rounds/2);

let selectors = {
  rockButton : document.getElementById("RockButton"),
  paperButton : document.getElementById("PaperButton"),
  scissorsButton : document.getElementById("ScissorsButton"),
  playerWinCount : document.getElementById("PlayerWinCount"),
  computerWinCount : document.getElementById("ComputerWinCount"),
  messages : document.getElementById("Messages"),
  choiceMessage : document.getElementById("ChoiceMessage"),
  winMessage : document.getElementById("WinMessage")
}

selectors.rockButton.addEventListener("click", (e) => {
  playRound("ROCK");
});

selectors.paperButton.addEventListener("click", (e) => {
  playRound("PAPER");
});

selectors.scissorsButton.addEventListener("click", (e) => {
  playRound("SCISSORS");
});


function setPlayerScore(score) {
   selectors.playerWinCount.innerText = `Player Wins: ${score}`;
}

function setComputerScore(score) {
   selectors.computerWinCount.innerText = `Computer Wins: ${score}`;
}

function computerPlay() {
  return choices[randNum(2)];
}


function randNum(maxNum) { // Returns a random integer between 0 and maxNum inclusive
  return Math.floor(Math.random()*(maxNum+1));
}

function compareChoices(playerOneChoice, playerTwoChoice) { //Returns the winning player as represented by a number

  if (playerOneChoice == playerTwoChoice) {
    return 3;
  }

  switch (playerOneChoice) {

    case "ROCK":
      if (playerTwoChoice == "PAPER") {
        return 2;
      } else {
        return 1;
      }

    case "PAPER":
      if (playerTwoChoice == "SCISSORS") {
        return 2;
      } else {
        return 1;
      }

    case "SCISSORS":
      if (playerTwoChoice == "ROCK") {
        return 2;
      } else {
        return 1;
      }
    }
}

function declareWinner(winner, context) {
  selectors.winMessage.innerText = `Player ${winner} wins the ${context}!`;
  if (context == "game") {
    p1Wins = 0;
    p2Wins = 0;
  }

  setPlayerScore(p1Wins);
  setComputerScore(p2Wins);
}

function declareTie() {
  selectors.winMessage.innerText = `It's a tie!`;
}

function playRound(personChoice) {
  let computerChoice = computerPlay();
  selectors.choiceMessage.innerText = `Player chose ${personChoice} and computer chose ${computerChoice}`;
  keepScore(compareChoices(personChoice, computerChoice));
}

function keepScore(winner) {

    switch (winner) {
      case 1:
        p1Wins++;
        declareWinner(1, 'round');
        break;
      case 2:
        p2Wins++;
        declareWinner(2, 'round');
        break;
      case 3:
        declareTie();
        break;
    }

    if (p1Wins == roundsToWin) {
      declareWinner(1, 'game');
      return;
    } else {
       if (p2Wins == roundsToWin) {
         declareWinner(2, 'game');
         return;
        }
    }

  }


