/* 1. Create project structure and test it in DONE! */

/* console.log("Hello, World!"); */

/* 2. Create function getComputeChoice that will randomly return Rock, Paper, Scissor. DONE! */

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0 : return "Rock";
        case 1 : return "Paper";
        case 2 : return "Scissors";
    }
};

let computerChoice = getComputerChoice();

console.log(computerChoice);

/* 3. Create function getHumanChoice that will return one of the valid inputs from user. */

function getHumanChoice() {

    while (1) {
    
        let humanInput = String(prompt("Please enter Rock, Paper or Scissors: "));

        switch (humanInput.toLowerCase()) {
            case "rock" : return "Rock";
            case "paper" : return "Paper";
            case "scissors" : return "Scissors";
            default : break;
        }
    }
}

let humanChoice = getHumanChoice();

console.log(humanChoice);

/* 4. Keep track of Player Score using variables. */

let humanScore = 0;
let computerScore = 0;

console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);

/* 5. Write the logic and play a single round. */

if (humanChoice !== computerChoice) {
    if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            computerScore++;
        }
        else if (computerChoice === "Scissors") {
           humanScore++;
        }
    }
    else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScore++;
        }
        else if (computerChoice === "Scissors") {
           computerScore++;
        }
    }
    else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            computerScore++;
        }
        else if (computerChoice === "Paper") {
           humanScore++;
        }
    }
}

alert(humanScore > computerScore ? (
    "I picked " + computerChoice + ", YOU WON!") : (
    "I picked " + computerChoice + ", YOU LOOSE!")
);

console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);


/* 6. Write the logic and play 5 rounds. */

