'use strict';

/*console.log(document.querySelector('.message').textContent);
 document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
*/

let sNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no nput
  if (!guess) {
    document.querySelector('.message').textContent = '😡 No number';

    // when guess is too high
  } else if (guess > sNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Sorry You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too low
  } else if (guess < sNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Sorry You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is correct
  } else if (guess === sNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = sNumber;
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
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
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
