let choices = ["Rock","Paper","Scissors"]

function computerPlay() {
  return choices[randNum(2)]
}

function randNum(maxNum) { // Returns a random integer between 0 and maxNum inclusive
  return Math.floor(Math.random()*(maxNum+1)); 
}

function compareChoices(playerOneChoice, playerTwoChoice) { //Returns the winning player as represented by a number
  
  switch (playerOneChoice) { 
  
    case "Rock":
      if (playerTwoChoice == "Paper") {
        return 2
      } else {
        return 1
      }
      
    case "Paper":
      if (playerTwoChoice == "Scissors") {
        return 2
      } else {
        return 1
      }
      
    case "Scissors":
      if (playerTwoChoice == "Rock") {
        return 2
      } else {
        return 1
      }
    }
}


