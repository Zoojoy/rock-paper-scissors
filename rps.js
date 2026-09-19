function getComputerChoice () {
  const computerChoice = ['rock', 'paper', 'scissors'];
  return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

function getHumanChoice (){
  const humanChoice = prompt ('What is your choice?');
  return humanChoice.toLowerCase();
}


     function playGame () {
      let humanScore = 0;
      let computerScore = 0;
           function playRound (humanChoice, computerChoice) {
  if ( humanChoice === computerChoice ){
    return "It's a tie";
  }
  else if (( humanChoice === 'rock' && computerChoice === 'scissors') ||
              ( humanChoice === 'paper' && computerChoice === 'rock') ||
              ( humanChoice === 'scissors' && computerChoice === 'paper')) {
        return 'human';
      } 
      else {
        return 'computer';
      }
     }

     //round 1
     let humanChoice = getHumanChoice();
     let computerChoice = getComputerChoice();
     let result = playRound(humanChoice, computerChoice);

     if (result === 'human') {
      humanScore++;
     }else if (result === 'computer') {
      computerScore++;
     }

    //round 2

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);
        if (result === 'human') {
      humanScore++;
     }else if (result === 'computer') {
      computerScore++;
     }

     //round 3 
     humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);
        if (result === 'human') {
      humanScore++;
     }else if (result === 'computer') {
      computerScore++;
     }

     //round 4
     humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);
        if (result === 'human') {
      humanScore++;
     }else if (result === 'computer') {
      computerScore++;
     }

     //round 5 
     humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);
        if (result === 'human') {
      humanScore++;
     }else if (result === 'computer') {
      computerScore++;
     }
    
     //final score
     console.log ('Human Score', humanScore);
     console.log ('Computer Score', computerScore);

     //determine winner
     if (humanScore > computerScore) {
      alert ('You win the game!');
      console.log ('You win the game!');
     } else if (humanScore < computerScore) {
      alert ('Computer wins the game!');
      console.log ('Computer wins the game!');
     }else {
      alert ("It's a tie!")
      console.log ("It's a tie!");
     }
     }

   playGame();
