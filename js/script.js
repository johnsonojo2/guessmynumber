'use strict';

/*console.log(document.querySelector('.message').textContent);
 document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
*/

let sNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displaysNumber = function (Numbe) {
  document.querySelector('.number').textContent = Numbe;
};
// const styleSelector = function (cName, property, value) {
//   document.querySelector(cName).style.property = value;
// };

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no nput
  if (!guess) {
    displayMessage('😡 No number !');
    // when guess is wrong
  } else if (guess !== sNumber) {
    if (score > 1) {
      displayMessage(guess > sNumber ? 'Guess too high' : 'Guess too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Sorry You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }

    // when guess is correct
  } else if (guess === sNumber) {
    displayMessage('Correct Number!');
    displaysNumber(sNumber);
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('body').style.color = '#eee';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.background = '#eee';
    document.querySelector('.number').style.color = '#333';
    document.querySelector('header').style.borderBottomColor = '#eee';
    document.querySelector('main').style.color = '#eee';
    document.querySelector('.guess').style.borderColor = '#eee';
    document.querySelector('.btn').style.background = '#eee';
    document.querySelector('.check').style.background = '#eee';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  sNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  displaysNumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.background = '#0a1931';
  document.querySelector('body').style.color = '#feddbe';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.background = '#ffc947';
  document.querySelector('.number').style.color = '#0a1931';
  document.querySelector('header').style.borderBottomColor = '#ffc947';
  document.querySelector('main').style.color = '#feddbe';
  document.querySelector('.guess').style.borderColor = '#ffc947';
  document.querySelector('.btn').style.background = '#ffc947';
  document.querySelector('.check').style.background = '#ffc947';
});
