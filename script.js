function getComputerChoice() {
  // Create a random number between 1-3
  let randomNum = Math.floor(Math.random() * 3) + 1;

  // IF number equals zero return "rock"
  if (randomNum === 1) return "rock";
  // ELSEIF number equals 1 return "paper"
  else if (randomNum === 2) return "paper";
  // ELSE return "scissors"
  else return "scissors";
}

function getHumanChoice() {
  // PROMPT the user for a number and put it in variable choice
  let choice = prompt("rock, paper, or scissors?");
  // RETURN the choice
  return choice.toLowerCase();
}

// INIT two global variables to keep track of the score of each player
let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    // there are 3/9 possibilities where both choose the same thing

    // So, IF human choice equals the computer choice, it's a tie
    if (humanChoice === computerChoice) {
      humanScore++;
      computerScore++;
      console.log("It's a tie");
    }
    // there are also 3/9  possibilities where the human/computer wins
    // ELSEIF ... list all the winning possibilities for human
    else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }

    // ELSE, computer wins
    else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }
  for (let i = 1; i <= 5; ++i) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) console.log("You are the winner!\n");
  else console.log("You lose :( try again\n");

  humanScore = 0;
  computerScore = 0;

  // PROMPT the user if he/she wants to play again
  let choice = parseInt(prompt("Do you want to play again? (1-0)"));

  return choice;
}

let playOrNot = parseInt(prompt("Do you want to play? (1-0)"));
if (playOrNot) {
  let choice = true;
  while (choice) {
    choice = playGame();
  }
}   
