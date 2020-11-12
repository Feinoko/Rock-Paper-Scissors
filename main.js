let launchBox = document.getElementById('launch');

launchBox.addEventListener('click', insertFunction);

let round = 1;

let pScore = 0; // tracks player score
let rScore = 0; // tracks robot score

const playButton = document.getElementById('launch');
const howManyRounds = document.getElementById('rounds');
console.log(howManyRounds.value); 


function insertFunction() { // called when launching the game

   let nrv = howManyRounds.value; // tracks number of rounds selected for a game
   if (round > nrv) {
      return;
   }

   console.log(round); //debug

   // Grabbing elements in const for code cleanliness
   const rock = document.getElementById('rock');
   const paper = document.getElementById('paper');
   const scissors = document.getElementById('scissors');

   // defining an array for robot's choice
   let robot = ['Rock', 'Paper', 'Scissors'];

   // function defined as expression and stored in variable whose value will be the string of the gesture selected by the player
   let pChoice = () => {
      if (rock.checked) {
         return 'Rock';
      } else if (paper.checked) {
         return 'Paper';
      } else if (scissors.checked) {
         return 'Scissors'
      }
   }

   let playerChoice = pChoice(); // so that function will be called once only and then stored in a variable
   console.log(playerChoice); // debug

   let dice = Math.floor(Math.random() * 3); // gives a number between 0 & 2, to choose from the array containing robot's moves
   let robotChoice = robot[dice]; // robot has picked his move

   alert(`your oponent chooses ${robotChoice} ! You have picked ${playerChoice}...`);

   let winner;

   if (robotChoice === playerChoice) {
      winner = "it's a tie!";
      alert("it's a tie!");
   } else if (robotChoice === 'Rock' && playerChoice === 'Scissors') {
      winner = 'You lose!';
      rScore++;
      alert('You lose!');
   } else if (playerChoice === 'Rock' && robotChoice === 'Scissors') {
      winner = 'You win!';
      pScore++;
      alert('You win!');
   } else if (robotChoice === 'Scissors' && playerChoice === 'Paper') {
      winner = 'You lose!'
      rScore++;
      alert('You lose!');
   } else if (playerChoice === 'Scissors' && robotChoice === 'Paper') {
      winner = 'You win!';
      pScore++
      alert('You win!');
   }   else if (robotChoice === 'Paper' && playerChoice === 'Rock') {
      winner = 'You lose!';
      rScore++
      alert('You lose!');
   } else if (playerChoice === 'Paper' && robotChoice === 'Rock') {
      winner = 'You win!';
      pScore++
      alert('You win!');
   }
   

   let roundNumber = document.getElementById('round' + round.toString());
   roundNumber.setAttribute('class', 'visible');
   roundNumber.textContent += winner + ` Score is : player : ${pScore} | robot : ${rScore} `;
   
   playButton.textContent = `Play round ${round+1} !`
   round++; 

   // to exit game when completed rounds & display final scores
   if (round > nrv) {
   playButton.textContent = 'Match complete! Refresh to play again'
   // let's see who wins
   let chickenDinner = pScore > rScore;
   let winningMsg;
   if (chickenDinner) {
      winningMsg = 'you have won your match! Congrats!';
   } else {
      winningMsg = 'Gee you lost this time, better luck next time! :)'
   }
   let afterLastRound =  document.getElementById('round' + (round).toString());
   afterLastRound.setAttribute('id','YouWin');
   afterLastRound.textContent = 'match complete! ' + winningMsg;
   afterLastRound.setAttribute('class', 'visible');
   return;
   }
   
}

