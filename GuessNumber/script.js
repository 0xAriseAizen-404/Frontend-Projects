const input = document.querySelector("input");
const numDes = document.querySelector(".num-des");
const checkBtn = document.querySelector(".btn");
const remainChances = document.querySelector(".chances");

let randomNum = Math.floor(Math.random() * 100);
let chances = 10;
console.log(chances);

checkBtn.addEventListener('click', () => {
    console.log(chances);
    chances--;
    let inputVal = input.value;
    if (inputVal == randomNum) {
        [numDes.textContent, input.disabled] = ["Congratulations", true];
        [checkBtn.textContent, numDes.style.color] = ["Replay", "#333"];
    } else if (inputVal > randomNum && inputVal <= 100) {
        [numDes.textContent, remainChances.textContent] = ["Your guess is high", chances];
    } else if (inputVal < randomNum && inputVal > 0) {
        [numDes.textContent, remainChances.textContent] = ["Your guess is low", chances];
    } else if (chances == 0) {
        [checkBtn.textContent, input.disabled] = ["Replay", true];
        numDes.textContent = "You lost the game";
    } else {
        numDes.textContent = "Your input is invalid";
        numDes.style.color = "red";
        remainChances.textContent = chances;
    }
    if(chances < 0){
        window.location.reload();
    }
});
