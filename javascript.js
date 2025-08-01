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

/* console.log("Test Computer Choice: " + getComputerChoice()); */

/* 3. Create function getHumanChoice that will return one of the valid inputs from user. */

function getHumanChoice() {

    while (1) {
    
        /* let humanInput = String(prompt("Round " + (i + 1) + ": Please choose Rock, Paper or Scissors: ")); */
        let humanInput = String(prompt("Please choose Rock, Paper or Scissors: "));

        switch (humanInput.toLowerCase()) {
            case "rock" : return "Rock";
            case "paper" : return "Paper";
            case "scissors" : return "Scissors";
            default : break;
        }
    }
};

/* console.log("Test Human Choice: " + getHumanChoice()); */

/* 4. Keep track of Player Score using variables. */

let humanScore = 0;
let computerScore = 0;

console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);

/* 5. Write the logic and play a single round. */

function playRound(humanChoice, computerChoice) {

    let result = "";
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

        // alert(humanScore > computerScore ? (
        // "I picked " + computerChoice + ", YOU WON!") : (
        // "I picked " + computerChoice + ", YOU LOOSE!")
        // );
        result = (humanScore > computerScore ? (
        "I picked " + computerChoice + ", YOU WON!") : (
        "I picked " + computerChoice + ", YOU LOOSE!")
        );
    } else if (humanChoice === computerChoice) {
        // alert("AAAARGHH! We both picked " + humanChoice); 
        result = "AAAARGHH! We both picked " + humanChoice;
    }
    return result;
};

// const computerSelection = getComputerChoice();
// const humanSelection = getHumanChoice();

// console.log("computerSelection: " + computerSelection);
// console.log("humanSelection: " + humanSelection);
 
/* playRound(humanSelection, computerSelection);
 */



/* 6. Write the logic and play 5 rounds. */
/* 
const ROUNDS_OF_PLAY = 5;

for (i = 0; i < ROUNDS_OF_PLAY; i++) {

    console.log("Round: " + (i + 1))

        

        alert("Human Score: " + humanScore + ", Computer Score: " + computerScore);

        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);

        if (humanScore > 2 || computerScore > 2) {
            break;
        }
}

if (humanScore > computerScore) {
        alert("GAME OVER, YOU WON!");
} else {
        alert("GAME OVER, I WON!");
};
 */

/* 7. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked */

let buttons = document.querySelector('.buttons');
let result = document.querySelector('#result');
let score = document.querySelector('#score');

score.textContent = "Human Score: " + humanScore + ", Computer Score: " + computerScore;

buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'Rock':
            // console.log('Rock');
            result.textContent = playRound('Rock', getComputerChoice());
            break;
        case 'Paper':
            // console.log('Paper');
            result.textContent = playRound('Paper', getComputerChoice());
            break;
        case 'Scissors':
            // console.log('Scissors');
            result.textContent = playRound('Scissors', getComputerChoice());
            break;
    }
})