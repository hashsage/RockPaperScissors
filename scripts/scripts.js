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
        c =  "draw please play again";
    }
    else if(playerSelection.toLowerCase()=="rock" && computerSelection=="paper"){
        c =  "computer wins paper covers rock";
    }
    else if(playerSelection.toLowerCase()=="rock" && computerSelection=="scissors"){
        c ="you win rock crushes scissors";
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection=="rock"){
        c = "you win; paper covers rock";
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection=="paper"){
        c = "draw please play again";
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection=="scissors"){
        c = "computer wins; scissors cuts paper";
    }
    else if(playerSelection.toLowerCase()=="scissors" && computerSelection=="rock"){
        c = "computer wins; rock crushes scissors";
    }
    else if(playerSelection.toLowerCase()=="scissors" && computerSelection=="paper"){
        c = "you win; scissors cuts paper";
    }
    else {
        c =  "draw please play again";
    }

      return c;
}

function game(){
    for (let i = 0; i < 5; i++) {
      var com = 0;
      var player = 0;  
      let playerSelection = prompt("what is your choice between rock, paper and scissors");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        
    }
    

}