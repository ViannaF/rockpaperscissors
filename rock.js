let humanScore = 0;
let computerScore = 0;
const results = document.querySelector("#results");
const scoreDisplay = document.querySelector("#score");
const gameResult = document.querySelector("#gameResult");

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    results.textContent = "It's a tie.";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    results.textContent = `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`;
  } else {
    computerScore++;
    results.textContent = `You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`;
  }
  updateScore();
  checkGameEnd();
};

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const updateScore = () => {
  scoreDisplay.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
};

const checkGameEnd = () => {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      gameResult.textContent = "You win the game!";
    } else {
      gameResult.textContent = "You lose the game!";
    }
    disableButtons();
  }
};

const disableButtons = () => {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
};

const enableButtons = () => {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
};

const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  results.textContent = "";
  gameResult.textContent = "";
  updateScore();
  enableButtons();
};

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resetBtn = document.querySelector("#resetBtn");

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
resetBtn.addEventListener("click", resetGame);

// Debugging
console.log("All buttons and elements have been successfully referenced.");
