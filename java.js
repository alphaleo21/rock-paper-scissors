let choice = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let cc = 0;
let pc = 0;
let n ;
let wantToPlay = 'yes';

function getComputerChoice(){
    let i = Math.floor(Math.random()* 3)
    return choice[i];
}

function compare(computerChoice, playerChoice){
    if(computerChoice == "rock" && playerChoice == "scissors"){
        cc += 1;
        console.log("Computer wins");
    }else if(computerChoice == "scissors" && playerChoice == "paper"){
        cc += 1;
        console.log("Computer wins");
    }else if(computerChoice == "paper" && playerChoice == "rock"){
        cc += 1;
        console.log("Computer wins");
    }else if(computerChoice == "scissors" && playerChoice == "rock"){
        pc += 1;
        console.log("You wins");
    }else if(computerChoice == "rock" && playerChoice == "paper"){
        pc += 1;
        console.log("You wins");
    }else if(computerChoice == "paper" && playerChoice == "scissors"){
        pc += 1;
        console.log("You wins");
    }
}

function game(){
    for(n = 0;n < 5; n++){
        computerChoice = getComputerChoice();
        playerChoice = prompt("Enter your choice");
        playerChoice = playerChoice.toLowerCase();
    
        compare(computerChoice,playerChoice);
    }
}
function result(){
    if(cc > pc){
        document.querySelector("Computer wins by "+cc);
    }else if(pc > cc){
        console.log("You wins by "+pc);
    }else{
        console.log("Draw");
    }
}

while (wantToPlay == 'yes'){

    game();
    result();

    wantToPlay = prompt("Do you want to play again(yes/no)");
    wantToPlay = wantToPlay.toLowerCase();
}