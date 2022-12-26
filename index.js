
// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

function play() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);

    var randomDiceImage = "dice" + randomNumber1 + ".png";

    var randomImageSource = "images/" + randomDiceImage;

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);


    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute('src', randomImageSource2);

    if (randomNumber1 === 6) {
        document.querySelector("h1").innerHTML = "🥇" + player1 + " win";
        var audio = new Audio("Sounds/win2.wav");
        audio.play();
    } else if (randomNumber2 === 6) {
        document.querySelector("h1").innerHTML = player2 + " win🥈";
        var audio = new Audio("Sounds/win2.wav");
        audio.play();
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw👉👈";
        var audio = new Audio("Sounds/tie.mp3");
        audio.play();
    } else {
        document.querySelector("h1").innerHTML = "Play Again🙆‍♂️";
    }
}

document.querySelector(".btn").addEventListener("click", function () {
    play();
    
})
document.querySelector(".btn2").addEventListener("click", function () {

    editNames();
    
})






