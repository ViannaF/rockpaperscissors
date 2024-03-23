let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a tie.";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return "You lose! Paper covers rock.";
    } else {
      humanScore++;
      return "You win! Rock breaks scissors.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      humanScore++;
      return "You win! Paper covers rock.";
    } else {
      computerScore++;
      return "You lose! Scissors cut paper.";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You lose! Rock breaks scissors.";
    } else {
      humanScore++;
      return "You win! Scissors cut paper.";
    }
  }
};

const playGame = () => {
  for (let i = 1; i <= 5; i++) {
    const userChoice = window
      .prompt("Enter your choice: rock, paper, or scissors")
      .toLowerCase();
    const computerChoice = getComputerChoice();
    const roundResult = playRound(userChoice, computerChoice);
    console.log(
      `Round ${i}: ${roundResult} Your score: ${humanScore}, Computer score: ${computerScore}`
    );
  }

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
};

playGame();
