const gameArea = document.querySelector('.game');
const button = document.querySelector('button');
const message = document.querySelector('.message');

let gamePlay = false;
let score = 0;

button.addEventListener('click', function () {
  if (!gamePlay) {
    gamePlay = true;
    score = 0;
    gameArea.innerHTML = '';
    maker(6);
    message.innerHTML = 'Guess the Combination';
    button.innerHTML = 'Check Combination';
  } else {
    console.log('checker');
    score++;
    message.innerHTML = 'Guesses ' + score;
    const numbers = document.querySelectorAll('.numb');
    let winCondition = 0;
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i].value);
      console.log(numbers[i].correct);
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = 'green';
        numbers[i].style.color = 'white';
        console.log('Match');
        winCondition++;
      } else {
        let color = numbers[i].value < numbers[i].correct ? 'blue' : 'red';
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = 'black';
        console.log('No Match');
      }
      if (winCondition == numbers.length) {
        console.log('Game Over');
        gameEnd();
      }
    }
  }
});

function maker(num) {
  for (let i = 0; i < num; i++) {
    let el = document.createElement('input');
    el.setAttribute('type', 'number');
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.style.width = '50px';
    el.classList.add('numb');
    el.order = x;
    el.correct = Math.floor(Math.random() * 10);
    el.value = 0;
    console.log(el);
    gameArea.appendChild(el);
  }
}

function gameEnd() {
  message.innerHTML = 'You Solved the Combination in ' + score + ' Guess(es).';
  gamePlay = false;
  button.innerHTML = 'Restart Game';
}
