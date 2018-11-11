// variables
var winElem = document.getElementById("wins");
var lossElem = document.getElementById("losses");
var ggElem = document.getElementById("guessleft");
var userChoiceElem = document.getElementById("guessfar");

var wins = 0;
var loss = 0;
var guessfar = [];
var guessleft = 9;

var aiChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// putting my random letter in a variable to access faster
var randomLet;
// chooses a random letter from my array
function chooseLet() {
    //picks a new letter 
    randomLet = aiChoices[Math.floor(Math.random() * aiChoices.length)];
    // resets counters
    guessleft = 9;
    guessfar.length = null;
}
// Reads Users Keystrokes
chooseLet();
document.onkeyup = function (e) {
    var userInput = e.key.toLowerCase();
    // Shows me is the letter has been used
    var isUsedLetter = guessfar.includes(userInput);
//    makes sure the letter is within the options
var isLetter = aiChoices.includes(userInput);

    if (isLetter) {
        if (!isUsedLetter) {
            guessleft--;
            
            if (userInput === randomLet) {
                wins++;

                chooseLet();
            }

            if (guessleft === 0) {
                loss++;
                chooseLet();

            }
            guessfar.push(userInput);
        }

    }

    else {
        alert("That Is Not A Letter!");
    }
// puts in my HTML
    userChoiceElem.textContent = guessfar;
    ggElem.textContent = guessleft;
    winElem.textContent = wins;
    lossElem.textContent = loss;

}


