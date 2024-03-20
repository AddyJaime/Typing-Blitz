
// welcome page input that holds the input at the begining 
const input = document.querySelector('input');


// welcome page button that holds the start game 
const btnStartGame = document.querySelector('#btn-StartGame');


// tittle that holds the h1 for playerName
const playerh1 = document.querySelector('#player');

// variable that holds the entire main page
const mainGame = document.querySelector('#main-game');

// countdown h1
const countdownH1 = document.querySelector('#player2')

// button that start the countdown
const startPlaying = document.querySelector('#startPlaying')

// button that restart the countdown
const restartBtn = document.querySelector('#restartBtn');

// pause game btn
const PauseBtn = document.querySelector('#PauseBtn')

// variable to cacth playerName
let cacthPlayerName;

// change text
let changeText = document.querySelector('#changeText')

// text area where the text goes 
let textarea = document.querySelector('#textarea')


let isPlaying = false

// function that when click the start game save the the name entered in a variable called cacthPlayerName then the in put and btn start game get display none 

function handleEvent(event) {
  if (cacthPlayerName) {
    event.preventDefault()

    btnStartGame.style.display = 'none';

    input.style.display = 'none';

    mainGame.style.display = 'block';

    playerh1.innerText = cacthPlayerName
    changeDisplay()

  } else {
    alert("Name is requiered")
  }

}
