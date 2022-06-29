const gameChoices = ["rock", "paper", "scissor"];

function computerPlay() {
  const randomCompChoice = Math.floor(Math.random() * 3);
  return gameChoices[randomCompChoice];
}

function playGame(playerSelection, computerSelection) {
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
