var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computerLetter;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFar = document.getElementById("guessesSoFar-text");

var newGame = function() {
    var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

document.onkeyup = function(event) {
        var userGuess = event.key;
        guessesLeft--;
        if (userGuess === computerLetter) {
            wins++;
            location.reload();
        } else if (guessesLeft > 0) {
            guessesSoFar.textContent = userGuess;
            guessesLeft--;
        } else if (guessesLeft == 0) {
            losses++;
            location.reload();
        }

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessesSoFar.textContent = "Guesses So Far: " + userGuess;
};
    //If User Guess matches Computer Letter: wins goes up by 1
    //If User Guess does not match Computer Letter: Guesses So Far logs guess; When Guesses Left equals 10 losses goes up by 1
    //Reset all variables after 10 guesses