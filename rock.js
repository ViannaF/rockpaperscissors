let humanScore = 0;
let computerScore = 0;
const results = document.querySelector("#results");
const scoreDisplay = document.querySelector("#score");
const gameResult = document.querySelector("#gameResult");

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
    results.textContent = "It's a tie.";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      results.textContent = "You lose! Paper covers rock.";
    } else {
      humanScore++;
      results.textContent = "You win! Rock breaks scissors.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      humanScore++;
      results.textContent = "You win! Paper covers rock.";
    } else {
      computerScore++;
      results.textContent = "You lose! Scissors cut paper.";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      results.textContent = "You lose! Rock breaks scissors.";
    } else {
      humanScore++;
      results.textContent = "You win! Scissors cut paper.";
    }
  }
  updateScore();
  playGame();
};

const updateScore = () => {
  scoreDisplay.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
};

const playGame = () => {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      gameResult.textContent = "You win the game!";
    } else if (humanScore < computerScore) {
      gameResult.textContent = "You lose the game!";
    } else {
      gameResult.textContent = "It's a tie!";
    }
  }
};

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
