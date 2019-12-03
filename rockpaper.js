let choices = ["Rock","Paper","Scissors"]

const rl = require('readline-sync');

function computerPlay() {
  return choices[randNum(2)];
}

function personPlay() {

  let choice = rl.question('What do you choose? (Rock, Paper, or Scissors) ').trim().toUpperCase()
    
  if (choice == "ROCK" || choice == "PAPER" || choice == "SCISSORS") {
    return choice ;
  }
  personPlay();
}

function randNum(maxNum) { // Returns a random integer between 0 and maxNum inclusive
  return Math.floor(Math.random()*(maxNum+1)); 
}

function compareChoices(playerOneChoice, playerTwoChoice) { //Returns the winning player as represented by a number
  
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

function declareWinner(winner) {
  console.log(`Player ${winner} wins!`);
}

function playRound() {
  let winningPlayer = compareChoices(personPlay(), computerPlay())
  declareWinner(winningPlayer)
}

playRound()
