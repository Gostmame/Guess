'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '😍Correct number!';

document.querySelector('.score').textContent=10;
document.querySelector('.guess').value=23;
let a = document.querySelector('.guess').value;
console.log(a);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //miss imput
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number';
    //when player wins
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = '😍Correct number!';
  

    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent=secretNumber;
    if(score>document.querySelector('.highscore').textContent){
        document.querySelector('.highscore').textContent=score;
    }
    // guess is wrong
  } else if(secretNumber!=guess){
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!💣';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value='';
    secretNumber = Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    
});
