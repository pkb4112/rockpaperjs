let choices = ["ROCK","PAPER","SCISSORS"];

const rl = require('readline-sync');

function computerPlay() {
  return choices[randNum(2)];
}

function personPlay() {

  let choice = rl.question('What do you choose? (Rock, Paper, or Scissors) ').trim().toUpperCase();
    
  if (choice == "ROCK" || choice == "PAPER" || choice == "SCISSORS") {
    return choice;
  }
  personPlay();
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
  console.log(`Player ${winner} wins the ${context}!`);
}

function declareTie() {
  console.log(`It's a tie!`);
}

function playRound() {
  let personChoice = personPlay();
  let computerChoice = computerPlay();
  let winningPlayer = compareChoices(personChoice, computerChoice);
  console.log(`Player chose ${personChoice} and computer chose ${computerChoice}`);

  return winningPlayer;
}

function playGame(rounds) {
  let p1Wins = 0;
  let p2Wins = 0;
  let roundsToWin = Math.ceil(rounds/2);
  for (let i = 0; i < rounds; i++) {

    switch (playRound()) {
      case 1:
        declareWinner(1, 'round');
        p1Wins++;
        break;
      case 2:
        declareWinner(2, 'round');
        p2Wins++;
        break;
      case 3:
        declareTie();
        i--;
        break;
    }
    
    if (p1Wins == roundsToWin) {
      declareWinner(1, 'game');
      return;
    } else {
       if (p2Wins == roundsToWin) {
         declareWinner(2, 'game') ;
         return;
        }
    }
    
  }
}

playGame(5);
