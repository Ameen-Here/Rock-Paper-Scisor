const gameChoices = ["rock", "paper", "scissor"];

function computerPlay() {
  const randomCompChoice = Math.floor(Math.random() * 3);
  return gameChoices[randomCompChoice];
}

function userInput() {
  let isCorrectChoice = false;
  while (!isCorrectChoice) {
    let playerInput = prompt(
      "What would player like to play? Look console for results"
    ).toLowerCase();
    if (!gameChoices.includes(playerInput)) {
      console.log(`Wrong input!!! Try again with Rock or paper or scissor`);
    } else {
      isCorrectChoice = true;
      return playerInput;
    }
  }
}

function playGame() {
  const playerSelection = userInput();
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    return `Both played ${playerSelection}, Tied!!!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

function printResult(compScore, userScore) {
  if (compScore > userScore) {
    console.log("Computer won!!! Better Luck Next Time.");
  } else if (compScore < userScore) {
    console.log("You won!!! You are a HERO!!!.");
  } else {
    console.log("Both are tied!!! Try again later.");
  }
}

const game = function game() {
  let compScore = 0;
  let userScore = 0;
  for (let i = 0; i < 5; i++) {
    const result = playGame();
    console.log(result);
    if (result[4] === "L") {
      compScore++;
    } else if (result[4] === "W") {
      userScore++;
    } // Getting the letter L or W of Lose or Win to determine the score.
  }
  printResult(compScore, userScore);
};

game();
