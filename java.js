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
let j = 0;
function play(){
    if(j<5){
        computerChoice = getComputerChoice();
        console.log(computerChoice)
        compare(computerChoice, playerChoice);
    }
    else if(j==5 && pc > cc){
        document.getElementById('result').innerHTML = "Player wins by "+pc
    }else if(j==5 && cc > pc){
        document.getElementById('result').innerHTML = "Computer wins by "+cc
    }else if(j > 5){
        document.getElementById('result').innerHTML = "Press F5 to rePlay "
    }
    j++;
}
