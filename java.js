let choice = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;
let cc = 0;
let pc = 0;
let choose;


function compare(computerChoice, playerChoice){
    if(computerChoice == "rock" && playerChoice == "scissors"){
        cc += 1;
        document.getElementById('result').innerHTML= "Computer wins"
    }else if(computerChoice == "scissors" && playerChoice == "paper"){
        cc += 1;
        document.getElementById('result').innerHTML= "Computer wins"
    }else if(computerChoice == "paper" && playerChoice == "rock"){
        cc += 1;
        document.getElementById('result').innerHTML= "Computer wins"
    }else if(computerChoice == "scissors" && playerChoice == "rock"){
        pc += 1;
        document.getElementById('result').innerHTML= "You wins"
    }else if(computerChoice == "rock" && playerChoice == "paper"){
        pc += 1;
        document.getElementById('result').innerHTML= "You wins"
    }else if(computerChoice == "paper" && playerChoice == "scissors"){
        pc += 1;
        document.getElementById('result').innerHTML= "You wins"
    }else if(computerChoice == playerChoice){
        document.getElementById('result').innerHTML = "Draw"
    }
}

function getPlayerChoice(choose){
    if(choose == "rock"){
        playerChoice = "rock"
    }else if(choose == 'paper'){
        playerChoice = 'paper'
    }else if(choose == 'scissors'){
        playerChoice = 'scissors'
    }
    console.log(playerChoice)
};

function getComputerChoice(){
    let i = Math.floor(Math.random()* 3)
    return choice[i];
}

function play(){
    if(pc < 5 && cc <5){
        computerChoice = getComputerChoice();
        console.log(computerChoice)
        compare(computerChoice, playerChoice);
    }
    else if( pc == 5){
        document.getElementById('result').innerHTML = "Player wins by "+pc;
        document.getElementById('replay').innerHTML = "Press F5 to rePlay ";
    }else if(cc == 5){
        document.getElementById('result').innerHTML = "Computer wins by "+cc;
        document.getElementById('replay').innerHTML = "Press F5 to rePlay "
    }
}
