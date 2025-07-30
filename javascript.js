/* 1. Create project structure and test it in DONE! */

console.log("Hello, World!");

/* 2. Create function getComputeChoice that will randomly return Rock, Paper, Scissor. DONE! */

let computerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0 : return "Rock";
        case 1 : return "Paper";
        case 2 : return "Scissors";
    }
};

console.log(computerChoice());

/* 3. Create function getHumanChoice that will return one of the valid inputs from user. */

let humanChoice = () => {
    let humanInpute = parseString(prompt("Please enter Rock, Paper or Scissors: "));

for (let i = 1; i <= answer; i++) {

/* 4. Keep track of Player Score using variables. */
/* 5. Write the logic and play a single round. */
/* 6. Write the logic and play 5 rounds. */

