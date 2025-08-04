/* 1. Create project structure and test it in DONE! */

/* console.log("Hello, World!"); */

/* 2. Create function getComputeChoice that will randomly return Rock, Paper, Scissor. DONE! */

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0 : 
        console.log(0);
        return 'Rock';
        break;
        case 1 : 
        console.log(1);
        return 'Paper';
        break;
        case 2 : 
        console.log(2);
        return 'Scissors';
        break;
        default: console.log("getComputerChoice ERROR returned unexpected number");
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

// /* console.log("Test Human Choice: " + getHumanChoice()); */
// /* 4. Keep track of Player Score using variables. */

let humanScore = 0;
let computerScore = 0;

// console.log("Human Score: " + humanScore);
// console.log("Computer Score: " + computerScore);

/* 5. Write the logic and play a single round. */

function playRound(humanChoice, computerChoice) {

    let result = "";
    
    if (humanChoice !== computerChoice) {
        if (humanChoice === "Rock") {
            if (computerChoice === "Paper") {
                // computerScore++;
                UpdateScore(0,1, computerChoice);
            }
            else if (computerChoice === "Scissors") {
                // humanScore++;
                UpdateScore(1,0, computerChoice);
            }
        }
        else if (humanChoice === "Paper") {
            if (computerChoice === "Rock") {
                // humanScore++;
                UpdateScore(1,0, computerChoice);
            }
            else if (computerChoice === "Scissors") {
            // computerScore++;
                UpdateScore(0,1, computerChoice);   
            }
        }
        else if (humanChoice === "Scissors") {
            if (computerChoice === "Rock") {
                // computerScore++;
                UpdateScore(0,1, computerChoice);
            }
            else if (computerChoice === "Paper") {
                // humanScore++;
                UpdateScore(1,0, computerChoice);
            }
        }

        // alert(humanScore > computerScore ? (
        // "I picked " + computerChoice + ", YOU WON!") : (
        // "I picked " + computerChoice + ", YOU LOOSE!")
        // );
        // result = (humanScore > computerScore ? (
        // "I picked " + computerChoice + ", YOU WON!") : (
        // "I picked " + computerChoice + ", YOU LOOSE!")
        // );

    } else if (humanChoice === computerChoice) {
        // alert("AAAARGHH! We both picked " + humanChoice); 
        // result.textContent = "AAAARGHH! We both picked " + humanChoice;
        UpdateScore(0, 0, computerChoice);
    }
    // return result;
};

// const computerSelection = getComputerChoice();
// const humanSelection = getHumanChoice();

// console.log("computerSelection: " + computerSelection);
// console.log("humanSelection: " + humanSelection);
 
// /* playRound(humanSelection, computerSelection);
//  */

/* 6. Write the logic and play 5 rounds. */

// const WIN_SCORE = 5;
// playGame
// for (i = 0; i < ROUNDS_OF_PLAY; i++) {
//     console.log("Round: " + (i + 1))

        

//         alert("Human Score: " + humanScore + ", Computer Score: " + computerScore);

//         console.log("Human Score: " + humanScore);
//         console.log("Computer Score: " + computerScore);

//         if (humanScore > 2 || computerScore > 2) {
//             break;
//         }
// }

// if (humanScore > computerScore) {
//         alert("GAME OVER, YOU WON!");
// } else {
//         alert("GAME OVER, I WON!");
// };

/* 7. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked */

// let buttons = document.querySelector('.buttons');
// buttons.addEventListener('click', (event) => {
//     let target = event.target;

//     switch(target.id) {
//         case 'Rock':
//             // console.log('Rock');
//             result.textContent = playRound('Rock', getComputerChoice());
//             break;
//         case 'Paper':
//             // console.log('Paper');
//             result.textContent = playRound('Paper', getComputerChoice());
//             break;
//         case 'Scissors':
//             // console.log('Scissors');
//             result.textContent = playRound('Scissors', getComputerChoice());
//             break;
//     }
// })

// let playButtons = document.querySelectorAll('.playButton');

// playButtons.forEach((playButton) => {
//     playButton.addEventListener('click', () => {
//         result.textContent = playRound(playButton.id, getComputerChoice());
//     });
// });

let result = document.querySelector('#result');
let score = document.querySelector('#score');

// score.textContent = "Human Score: " + humanScore + ", Computer Score: " + computerScore;

// 

// 8. Display the running score, and announce a winner of the game once one player reaches 5 points.

const WIN_SCORE = 5;
const HUMAN_NAME = "HUMAN";
const COMPUTER_NAME = "COMPUTER";

let gameOverText = document.querySelector('#gameOverText');
// gameOverText.textContent = "GAMEOVER! Human Won!";
{/* <button id="startGame"></button> */}
const gameOverButton = document.createElement("button");
gameOverButton.setAttribute("id", "gameOverButton");
gameOverButton.classList.toggle("gameOverButton");
gameOverButton.textContent = "START GAME!"
gameOverButton.addEventListener('click', () => {
    result.textContent = "";
    gameOverText.textContent = "";
    buttons.removeChild(gameOverButton);
    buttons.appendChild(rockButton);
    buttons.appendChild(paperButton);
    buttons.appendChild(scissorsButton);
});
let buttons = document.querySelector("#buttons");
buttons.appendChild(gameOverButton);

const rockButton = document.createElement("button");
rockButton.setAttribute("id", "Rock");
rockButton.classList.toggle("playButton");
rockButton.style.margin = "10px";
rockButton.textContent = "Rock"
rockButton.addEventListener('click', () => {
        playRound(rockButton.id, getComputerChoice());
    });

const paperButton = document.createElement("button");
paperButton.setAttribute("id", "Paper");
paperButton.classList.toggle("playButton");
paperButton.style.margin = "10px";
paperButton.textContent = "Paper"
paperButton.addEventListener('click', () => {
        playRound(paperButton.id, getComputerChoice());
    });

const scissorsButton = document.createElement("button");
scissorsButton.setAttribute("id", "Scissors");
scissorsButton.classList.toggle("playButton");
scissorsButton.style.margin = "10px";
scissorsButton.textContent = "Scissors"
scissorsButton.addEventListener('click', () => {
        playRound(scissorsButton.id, getComputerChoice());
    });

function UpdateScore(humanWon, computerWon, computerChoice)  {
    humanScore += humanWon;
    computerScore += computerWon;

    if (humanWon > computerWon) {
        result.textContent = "I picked " + computerChoice + ", YOU WON!";
    } else if (humanWon < computerWon) {
        result.textContent = "I picked " + computerChoice + ", YOU LOOSE!";
    } else if (humanWon === humanWon) {
        result.textContent = "AAAARGHH! We both picked " + computerChoice;
    } 

    score.textContent = "Human Score: " + humanScore + ", Computer Score: " + computerScore;
    if (humanScore > 4) {
        gameOver(HUMAN_NAME, humanScore, computerScore);
        resetGame();
    }
    else if (computerScore > 4) {
        gameOver(COMPUTER_NAME, computerScore, humanScore);
        resetGame();
    }
    else {
        score.textContent = "Human Score: " + humanScore + ", Computer Score: " + computerScore;
    }
}

function gameOver(winner, winnerScore, loserScore) {
    score.textContent = "";
    gameOverText.textContent = "GAMEOVER! " + winner + " won " + winnerScore + " to " + loserScore;
}


function resetGame() {
    humanScore = 0;
    computerScore = 0;
    buttons.removeChild(rockButton);
    buttons.removeChild(paperButton);
    buttons.removeChild(scissorsButton);
    buttons.appendChild(gameOverButton);
}