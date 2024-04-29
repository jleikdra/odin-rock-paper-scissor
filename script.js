// TOTAL SCORE
let humanScore = 0;
let computerScore = 0;

// FUNCTION: HUMAN CHOICE
function getHumanChoice() {
  const humanSelection = ["rock", "paper", "scissors"];
  let chosenNumber;
  do {
    chosenNumber = parseInt(
      window.prompt("Choose rock (1), paper (2) or scissor(3)"),
      10
    );
  } while (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 3); // Repeat until valid input
  return humanSelection[chosenNumber - 1];
}

// FUNCTION: COMPUTER CHOICE
function getComputerChoice() {
  const computerSelection = ["rock", "paper", "scissors"];
  const generateRandomChoice = Math.floor(Math.random() * 3);
  return computerSelection[generateRandomChoice];
}

// FUNCTION TO CONVERT TO TITLE CASE
function toTitleCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// FUNCTION: PLAY ROUND
function playRound(humanChoice, computerChoice) {
  humanChoice = toTitleCase(humanChoice);
  computerChoice = toTitleCase(computerChoice);

  // Create elements to show choices
  const printHumanChoice = document.createElement("p");
  printHumanChoice.innerHTML = `You chose <strong>${humanChoice}</strong>.`;
  document.body.appendChild(printHumanChoice);

  const printComputerChoice = document.createElement("p");
  printComputerChoice.innerHTML = `The computer chose <strong>${computerChoice}</strong>.`;
  document.body.appendChild(printComputerChoice);

  // Determine and display the result of the round
  const printResultOfRound = document.createElement("p");
  if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
    printResultOfRound.innerHTML = `${humanChoice} against ${computerChoice}. This round is a draw!`;
  } else if (
    (humanChoice.toLowerCase() === "rock" &&
      computerChoice.toLowerCase() === "scissors") ||
    (humanChoice.toLowerCase() === "paper" &&
      computerChoice.toLowerCase() === "rock") ||
    (humanChoice.toLowerCase() === "scissors" &&
      computerChoice.toLowerCase() === "paper")
  ) {
    humanScore++;
    printResultOfRound.innerHTML = `${humanChoice} against ${computerChoice}. You win!`;
  } else {
    computerScore++;
    printResultOfRound.innerHTML = `${humanChoice} against ${computerChoice}. You lose!`;
  }
  document.body.appendChild(printResultOfRound);
}
