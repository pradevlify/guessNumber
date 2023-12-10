// global variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let currentScore = 20;
let attempt_left = 10;
let highScore = 0;

//webpage element access
let checkbtn = document.querySelector(".btn-check");
let attemptLeft = document.querySelector("#attempt-left");
let inputno = document.querySelector(".input-number");
let message = document.querySelector(".message");
let HighScore = document.querySelector(".current-high-score");
let curntscore = document.querySelector("#current-score");
let secret = document.querySelector(".secret-number");
//logic
checkbtn.addEventListener("click", function () {
  if (attempt_left > 0) {
    attempt_left--;
    attemptLeft.innerText = attempt_left;
    let guess = Number(inputno.value);

    //no input
    if (guess === 0) {
      message.innerHTML = "you entered 0 or not a number";
      document.body.style.backgroundColor = "lightblue";
    }

    //guessed correct number
    else if (guess === secretNumber) {
      message.innerHTML = `yeah you won the game`;
      document.body.style.backgroundColor = "green";
      highScore = currentScore > highScore ? currentScore : highScore;
      HighScore.innerHTML = highScore;
      secret.innerHTML = guess;
    }
    //guessed wrong number
    else if (guess !== secretNumber) {
      if (currentScore > 0) {
        let msg =
          guess > secretNumber ? "you guessed too high" : "you guessed to low";
        message.innerHTML = msg;
        currentScore--;
        curntscore.innerHTML = currentScore;
        document.body.style.backgroundColor = "rgb(111, 231, 231)";
        setTimeout(() => {
          document.body.style.backgroundColor = "gray";
        }, 300);
      } else {
        message.innerHTML = "you lost";
        curntscore.innerHTML = 0;
      }
    }
  } else {
    //lost the game
    message.innerHTML = `sorry,you lost the game try next time`;
    attemptLeft.innerHTML = 0;
    document.body.style.backgroundColor = "red";
  }
});

document.querySelector(".new-game").addEventListener("click", function () {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  attempt_left = 10;
  curntscore.innerHTML = currentScore;
  attemptLeft.innerHTML = attempt_left;
  HighScore.innerHTML = highScore;
  inputno.value = "";
  message.innerHTML = `guess the number between 1 to 20`;
  secret.innerHTML = `<i class="fa-solid fa-question"></i>`;
  document.body.style.backgroundColor = "gray";
});
