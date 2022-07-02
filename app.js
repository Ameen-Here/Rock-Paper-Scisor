const gameChoices = ["rock", "paper", "scissor"];

const buttons = document.querySelectorAll("button");
const roundDisplay = document.querySelector("#round");
const userScoreDisplay = document.querySelector(".user-score");
const compScoreDisplay = document.querySelector(".comp-score");
const resultDisplay = document.querySelector("#result");
const resetBtn = document.querySelector(".reset-btn");

let round = 1;
let userScore = 0;
let compScore = 0;

function updateScore() {
  userScoreDisplay.textContent = userScore;
  compScoreDisplay.textContent = compScore;
}

function updateRound() {
  roundDisplay.textContent = round;
}

updateRound();
updateScore();

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (round < 6) {
      const playerSelection = e.target.className;
      console.log(playerSelection);
      game(playerSelection);
      updateRound();
      round++;
      console.log(round);
      if (round > 5) {
        console.log(round);
        round++;
        const finalResult = printResult(compScore, userScore);
        roundDisplay.textContent = "GAME ENDS";
        resultDisplay.textContent = finalResult;
        resetBtn.classList.toggle("reset-btn");
        resetBtn.addEventListener("click", reset);
      }
    }
  });
});

function computerPlay() {
  const randomCompChoice = Math.floor(Math.random() * 3);
  return gameChoices[randomCompChoice];
}

function playGame(playerSelection) {
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    return `Both played ${playerSelection}, Tied!!!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")
  ) {
    compScore++;
    updateScore();
    return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
  } else {
    userScore++;
    updateScore();
    return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  }
}

function printResult(compScore, userScore) {
  if (compScore > userScore) {
    return "Computer won!!! Better Luck Next Time.";
  } else if (compScore < userScore) {
    return "You won!!! You are a HERO!!!.";
  } else {
    return "Both are tied!!! Try again later.";
  }
}

function game(userInput) {
  const result = playGame(userInput);
  resultDisplay.textContent = result;
}

function reset() {
  resetBtn.classList.toggle("reset-btn");
  compScore = 0;
  userScore = 0;
  round = 1;
  resultDisplay.textContent =
    "Press any option to start a 5 round game with the mighty COMPUTER!!!";
  updateScore();
  updateRound();
}
