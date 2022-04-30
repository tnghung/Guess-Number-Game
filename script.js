'use strict';

let numRandom, value, score, highScore;

const messageDOM = document.querySelector('.message');
const scoreDOM = document.querySelector('.score');
const titleDOM = document.querySelector('h1');
const numberDOM = document.querySelector('.number');

highScore = 0;
init();

// Click guess button
document.querySelector('.check').addEventListener('click', function () {
  value = Number(document.querySelector('.guess').value);

  // No input
  if (!value) {
    messageDOM.textContent = '⛔ Please enter a number';
  }

  // Invalid input
  else if (value <= 0 || value > 20) {
    messageDOM.textContent = '🤡 Number is between 1-20';
  }

  // Correct input
  else if (value === numRandom) {
    highScore = highScore < score ? score : highScore;
    displayMessage('🎉 Correct answer!');
    titleDOM.textContent = 'Congratulation';
    titleDOM.style.color = '#FFD124';
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberDOM.style.width = '30rem';
    numberDOM.textContent = numRandom;
    document.querySelector('.again').style.display = 'block';
  }

  // Uncorret input
  else if (value !== numRandom) {
    if (score > 1) {
      displayMessage(value > numRandom ? '☝ Too high!' : '👎 Too low!');
      score--;
      scoreDOM.textContent = score;
    } else {
      score = 0;
      displayMessage('😭 Unlucky time 😭');
      titleDOM.textContent = 'You lost';
      titleDOM.style.color = '#c0392b';
      scoreDOM.textContent = score;
      numberDOM.textContent = numRandom;
      document.querySelector('.again').style.display = 'block';
    }
  }
});

// Click again button
document.querySelector('.again').addEventListener('click', init);

// Init state
function init() {
  titleDOM.textContent = 'Guess My Number!';
  titleDOM.style.color = '#eee';
  numberDOM.style.width = '15rem';
  numberDOM.textContent = '?';
  displayMessage('Start here');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.again').style.display = 'none';

  numRandom = Math.floor(Math.random() * 20) + 1;

  score = 20;
  scoreDOM.textContent = score;
  document.querySelector('.highscore').textContent = highScore;
}

function displayMessage(message) {
  messageDOM.textContent = message;
}
