/*
function getComputerChoice(){
    const list = ["rock", "paper", "scissors"];
    let a = Math.floor(Math.random()*3);
    let b = list[a];
  //  console.log(a);
    return b;
}

function playRound(playerSelection, computerSelection){
    let c = 0;
    if (playerSelection.toLowerCase()=="rock" && computerSelection=="rock"){
        c = 1;
    }
    else if(playerSelection.toLowerCase()=="rock" && computerSelection=="paper"){
        c = 2;
    }
    else if(playerSelection.toLowerCase()=="rock" && computerSelection=="scissors"){
        c = 3;
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection=="rock"){
        c = 4;
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection=="paper"){
        c = 5;
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection=="scissors"){
        c = 6;
    }
    else if(playerSelection.toLowerCase()=="scissors" && computerSelection=="rock"){
        c = 7;
    }
    else if(playerSelection.toLowerCase()=="scissors" && computerSelection=="paper"){
        c = 8;
    }
    else {
        c = 9;
    }
    let d = ""
    switch(c) {
        case 1:
          d = "draw please play again";
          break;
        case 2:
          d = "computer wins paper covers rock";
          break;
        case 3:
          d = "you win rock crushes scissors";
          break;
          case 4:
          d = "you win; paper covers rock";
          break;
        case 5:
          d = "draw please play again";
          break;
          case 6:
          d = "computer wins; scissors cuts paper";
          break;
        case 7:
          d = "computer wins; rock crushes scissors";
          break;
          case 8:
          d = "you win; scissors cuts paper";
          break;
        case 9:
          d = "draw please play again";
          break;
        default:
          d = "Invalid input"
      }
      return d;
}

function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("what is your choice between rock, paper and scissors");
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        
    }
    
}

*/