let choice = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice();
let playerChoice;
let choose;
let r,p,s;
let cc = 0;
let pc = 0;


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

document.getElementById("btr").addEventListener('click',rock);
document.getElementById("btp").addEventListener('click',paper);
document.getElementById("bts").addEventListener('click',scissors);

function rock(){
    playerChoice = "rock";
}
function paper(){
    playerChoice = "paper";
}
function scissors(){
    playerChoice = "scissors";
}


getComputerChoice();
compare(computerChoice,playerChoice);
console.log(playerChoice)