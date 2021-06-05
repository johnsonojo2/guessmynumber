'use strict';

/*console.log(document.querySelector('.message').textContent);
 document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
*/

let sNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// defining variables for the classes to be selected

const messageClass = document.querySelector('.message');
const numberClass = document.querySelector('.number');
const guessClass = document.querySelector('.guess');
const scoreClass = document.querySelector('.score');
const bodyClass = document.querySelector('.bods');
const headerClass = document.querySelector('header');
const mainClass = document.querySelector('main');
const checkClass = document.querySelector('.check');
const btnClass = document.querySelector('.btn');
const highScoreClass = document.querySelector('.highscore');

// this is the function for display the state of the answer in the guess box
const displayMessage = function (message) {
  messageClass.textContent = message;
};
const displaysNumber = function (Numbe) {
  numberClass.textContent = Numbe;
};
bodyClass.classList.remove('bod');
numberClass.classList.remove('numberr');

const playGame = function () {
  const guess = Number(guessClass.value);
  // When there is no input
  if (!guess) {
    displayMessage('😡 No number !');
    // when guess is wrong
  } else if (guess !== sNumber) {
    if (score > 1) {
      displayMessage(guess > sNumber ? 'Guess too high' : 'Guess too low');
      score--;
      scoreClass.textContent = score;
    } else {
      displayMessage('Sorry You lost the Game!');
      scoreClass.textContent = 0;
    }

    // when guess is correct
  } else if (guess === sNumber) {
    displayMessage('Correct Number!');
    displaysNumber(sNumber);
    bodyClass.classList.add('bod');
    numberClass.classList.add('numberr');
    headerClass.style.borderBottomColor = '#eee';
    mainClass.style.color = '#eee';
    guessClass.style.borderColor = '#eee';
    btnClass.style.background = '#eee';
    checkClass.style.background = '#eee';

    if (score > highScore) {
      highScore = score;
      highScoreClass.textContent = highScore;
    }
  }
};
// This code is for playing again without refreshing the page

const playAgain = function () {
  score = 20;
  sNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreClass.textContent = score;
  displaysNumber('?');
  guessClass.value = '';
  bodyClass.classList.remove('bod');
  numberClass.classList.remove('numberr');
  headerClass.style.borderBottomColor = '#ffc947';
  mainClass.style.color = '#feddbe';
  guessClass.style.borderColor = '#ffc947';
  btnClass.style.background = '#ffc947';
  checkClass.style.background = '#ffc947';
};

checkClass.addEventListener('click', playGame);
document.querySelector('.again').addEventListener('click', playAgain);
