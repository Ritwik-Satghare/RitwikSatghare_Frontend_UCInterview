const num = Math.floor(Math.random() * 100) + 1;
let lives = 7;
let previousGuesses = [];
console.log(num);
updateHeart();
function checkGuess() {
  const guess = Number(document.querySelector("#guess").value);
  document.getElementById("guess").value=""; 

  // main if statements
  if (guess < 1 || guess > 100) {
    document.getElementById("loworhigh").innerHTML =
      "Please enter a number between 1 and 100";
    return;
  }

  if (num == guess) {
    document.getElementById("loworhigh").innerHTML =
      "Congratulation! System hacked successfully ✅ ";
    disableGame();
  } else {
    lives--;
    updateHeart();
    if (lives == 0) {
      document.getElementById("loworhigh").innerHTML = "Game Over!";
      document.body.style.backgroundColor = "red";
      document.querySelector(".root").style.backgroundColor="red";
      // for the reload part
      document.getElementById("guess").disabled=true;
      document.getElementById("submit").textContent="Retry";
      document.getElementById("submit").onclick=() => location.reload();
    } else if (guess < num) {
      document.getElementById("loworhigh").innerHTML =
        "Go Higher  <img src='./links-and-images/Green_Arrow_Up.svg' width='20px' height='20px'>";
    } else if (guess > num) {
      document.getElementById("loworhigh").innerHTML =
        "Go Lower  <img src='./links-and-images/Green_Arrow_Down.svg' width='20px' height='20px'>";
    }
  }
// for the previous guesses
  previousGuesses.push(guess);
  document.getElementById("guesses").innerHTML =
    "Previous Guesses: " + previousGuesses.join(", ");
}
function updateHeart() {
    document.getElementById("lives").innerHTML='';
  for (let i = 1; i <= lives; i++) {
    document.getElementById("lives").innerHTML +=
      "<img src='./links-and-images/green-heart.png' width='35px' height='35px'>"; //could not find svg
  }
}
function disableGame() {
  document.getElementById("guess").disabled = true;
  document.getElementById("submit").disabled = true;
}
