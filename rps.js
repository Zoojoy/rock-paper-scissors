function getComputerChoice () {
  const computerChoice = ['rock', 'paper', 'scissors'];
  return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

     function playGame () {
      let gameOver = false;
      let humanScore = 0;
      let computerScore = 0;
      const resultDiv = document.createElement('div');
      resultDiv.textContent = 'The result will appear here';
      document.body.appendChild(resultDiv);
      const scoreDiv = document.createElement('div');
      scoreDiv.textContent = 'Human : 0 | Computer : 0';
      document.body.appendChild(scoreDiv);
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
     function handleHumanChoice(humanChoice) {
          if ( gameOver ){
            return;
          }
        let computer = getComputerChoice();
        let result = playRound(humanChoice, computer);
          if(result === 'computer') {
            computerScore++;
            resultDiv.textContent = 'Computer wins';
          }else if( result === 'human') {
            humanScore++;
            resultDiv.textContent = 'Human win';
         }else {
          resultDiv.textContent = "It's a tie";
         }
         scoreDiv.textContent = `Human : ${humanScore} | Computer : ${computerScore}`;
            if (humanScore ===5){
              gameOver = true;
              resultDiv.textContent = 'Human Won';
            } else if (computerScore === 5 ) {
              gameOver = true;
              resultDiv.textContent = 'Computer Won';
            }

        }
    const rock = document.createElement('button');
        rock.textContent = 'rock';
          rock.addEventListener('click', () => {
            handleHumanChoice('rock');
          });

    const paper = document.createElement('button');
        paper.textContent = 'paper';
          paper.addEventListener('click', () => {
            handleHumanChoice('paper');
          });
    const scissors = document.createElement('button');
        scissors.textContent = 'scissors';
          scissors.addEventListener('click', () => {
            handleHumanChoice('scissors');
          });
    document.body.append(rock, paper, scissors);
    const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset the game';
          document.body.appendChild(resetButton);
            resetButton.addEventListener('click', () => {
              humanScore = 0;
              computerScore = 0;
              gameOver = false;
              resultDiv.textContent = 'The result will appear here';
              scoreDiv.textContent = `Human : ${humanScore} | Computer : ${computerScore}`;
            });

    resultDiv.classList.add('result');
    scoreDiv.classList.add('scoreboard');

    rock.classList.add('choice-button', 'rock-button');
    paper.classList.add('choice-button', 'paper-button');
    scissors.classList.add('choice-button', 'scissors-button');

resetButton.classList.add('reset-button');
     }
    

   playGame();