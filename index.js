const playerChoice = "rock";
const computerChoice = "paper";
let ComputerWon=0;
let PlayerWon=0;


let game = function (computerInput, playerInput) {
    let result="";
    if (playerInput==="rock"){
    switch (computerInput) {
        case "rock": 
        result = "Draw! Play again!";
        break;
        case "paper":
            result = "Computer won";
        break;
        case "scissors":
            result="Player won";
        break;
        default: 
        result = "Computer is confused";
    }
    console.log(result);
}
else if (playerInput==="paper"){
    switch (computerInput) {
        case "paper": 
        result = "Draw! Play again!";
        break;
        case "scissors":
            result = "Computer won";
        break;
        case "rock":
            result="Player won";
        break;
        default: 
        result = "Computer is confused";
    }
    console.log(result);
}
else if (playerInput==="scissors"){
    switch (computerInput) {
        case "scissors": 
        result = "Draw! Play again!";
        break;
        case "rock":
            result = "Computer won";
        break;
        case "paper":
            result="Player won";
        break;
        default: 
        result = "Computer is confused";
    }
    console.log(result);
}
else{
    console.log("I did not get what you meant");
}
console.log(i);
    }

game(computerChoice,playerChoice);

