//Initialized values to be used in game scores tracking and game session tracking
var computer = 0;
var player = 0;  
var play = [];

//A function that randomly generates one of three options [rock, paper or scissors] 
function getComputerChoice(){
    const list = ["rock", "paper", "scissors"];
    let a = Math.floor(Math.random()*3);
    let b = list[a];
  //  console.log(a);
    return b;
}

//A function that takes two arguments computer and player selections and give a result of the game
function playRound(playerSelection, computerSelection){
    let c = 0;
    if (playerSelection.toLowerCase()=="rock" && computerSelection=="rock"){
        c =  "draw please play again";
        s = "0";
    }
    else if(playerSelection.toLowerCase()=="rock" && computerSelection=="paper"){
        c =  "computer wins paper covers rock";
        s =  "computer";
    }
    else if(playerSelection.toLowerCase()=="rock" && computerSelection=="scissors"){
        c ="you win rock crushes scissors";
        s = "player";
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection=="rock"){
        c = "you win; paper covers rock";
        s = "player";
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection=="paper"){
        c = "draw please play again";
        s = "0";
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection=="scissors"){
        c = "computer wins; scissors cuts paper";
        s = "computer";
    }
    else if(playerSelection.toLowerCase()=="scissors" && computerSelection=="rock"){
        c = "computer wins; rock crushes scissors";
        s = "computer";
    }
    else if(playerSelection.toLowerCase()=="scissors" && computerSelection=="paper"){
        c = "you win; scissors cuts paper";
        s = "player";
    }
    else {
        c =  "draw please play again";
        s = "0";
    }

      return ([c, s]);
}

//To be refactored into the individual play buttons
function game(){
    for (let i = 0; i < 5; i++) {
      var com = 0;
      var player = 0;  
      let playerSelection = prompt("what is your choice between rock, paper and scissors");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        
        
    }
}


//Consider adding a reset button for when one gameplay is completed

//A function called automatically by the push of an option by the player.
function autoplay(player){
    computerSelection = getComputerChoice();
    return playRound(player, computerSelection);
}


let button = document.querySelector('.rock');
button.addEventListener("click", () => { 
const content = document.createElement('p');
content.classList.add('content');
if ((player+computer) < 5){

play = autoplay("rock")
content.textContent = play[0];
if (play[1] === "player") {
    player+=1
}
else if (play[1] == "computer"){
    computer+=1
}
else {
    console.log("draw");
}
console.log(player);
container.appendChild(content);
setTimeout(() => {container.removeChild(content) ;}, 5000);
}

else if(computer > player){
    content.textContent = "End of game: computer wins !";
    container.appendChild(content);
    setTimeout(() => {container.removeChild(content) ;}, 5000);
}
else{
    content.textContent = "End of game: you win !";
    container.appendChild(content);
    setTimeout(() => {container.removeChild(content) ;}, 5000);
}

/*
const content1 = document.createElement('p');
var comp = document.getElementById("comp");
content1.classList.add('content');
content1.textContent = computer;
com.replaceChild(content1, comp);
*/
/*
const content2 = document.createElement('p');
var huma = document.getElementById("huma");
content2.classList.add('content');
content2.textContent = player;
human.replaceChild(content2, huma);
*/
playCast = player.toString();
compCast = computer.toString();

document.getElementById('comp').innerText = compCast;
document.getElementById('huma').innerText = playCast;

});

let button2 = document.querySelector('.paper');
button2.addEventListener("click", () => {
const content = document.createElement('p');
content.classList.add('content');
content.textContent = autoplay("paper")[0];
container.appendChild(content);
setTimeout(() => {container.removeChild(content) ;}, 5000);
});

let button3 = document.querySelector('.scissors');
button3.addEventListener("click", () => {
const content = document.createElement('p');
content.classList.add('content');
content.textContent = autoplay("scissors")[0];
container.appendChild(content);
setTimeout(() => {container.removeChild(content) ;}, 5000);
});

let button4 = document.querySelector('.reset');
button4.addEventListener("click", () => {
player = 0;
computer = 0;
playCast = player.toString();
compCast = computer.toString();

document.getElementById('comp').innerText = playCast;
document.getElementById('huma').innerText = compCast;
const content = document.createElement('p');
content.classList.add('content');
content.textContent = "new game !";
container.appendChild(content);
setTimeout(() => {container.removeChild(content) ;}, 5000);
/*    const content1 = document.createElement('p');
content1.classList.add('content');
content1.textContent = 0;
plays.appendChild(content);
setTimeout(() => {container.removeChild(content1) ;}, 5000);
*/
});


const container = document.querySelector('#container');
const com = document.querySelector('.com');
const human = document.querySelector('.hum');

//const plays = document.querySelector('#plays');
