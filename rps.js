

// computer choice function
function getComputerChoice () {
const computerChoice = Math.floor(Math.random () * 3); 
 if (computerChoice === 0) {
  return  'rock';
  }else if(computerChoice === 1){
  return  'paper';
 }else {
  return  'scissors';
 }
}

//human choice function
function getHumanChoice () {
  const humanChoice = prompt('Enter your option here');
  return humanChoice.toLowerCase();
}

//play round logic
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  //
function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice){
if (humanChoice === 'rock' && computerChoice === 'paper') {
return 'You lose, paper beats rock!';
} else if ( humanChoice === 'rock' && computerChoice === 'scissors') {
  return 'You win, rock beats scissors';
} else if ( humanChoice === 'paper' && computerChoice === 'rock'){
  return 'You win, paper beats rock';
} else if (humanChoice === 'paper' && computerChoice === 'scissors') {
  return 'You lose, scossors beat paper';
}else if (humanChoice === 'scissors' && computerChoice === 'rock') {
  return 'You lose, rock beats scissors';
}else if(humanChoice === 'scissors' && computerChoice === 'paper'){
  return 'You win, scissors beat paper'
} else {
  return "It's a tie";
}
}
}
console.log (playRound(humanChoice,computerChoice)); 


