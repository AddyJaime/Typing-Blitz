
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


// change text
let changeText = document.querySelector('#changeText')

// text area where the text goes 
let textarea = document.querySelector('#textarea')

// variable to cacth playerName
let cacthPlayerName;

let isPlaying = false

// function that when click the start game save the the name entered in a variable called cacthPlayerName then the in put and btn start game get display none 

function handleEvent(event) {

  // cacthPlayerName check if there is a value
  if (cacthPlayerName) {
    event.preventDefault()

    btnStartGame.style.display = 'none';

    input.style.display = 'none';

    mainGame.style.display = 'block';
 
    // everthing that you put in the input will be save here and post it on the screeen 
    playerh1.innerText = cacthPlayerName
    changeDisplay()

  } else {
    alert("Name is requiered")
  }

}


// eventlistener that when click and keyup save the name entered in a variable  calld catchPlayerName

btnStartGame.addEventListener('click', handleEvent);

input.addEventListener('keyup', (event) => {

  cacthPlayerName = event.target.value;
});

btnStartGame.addEventListener('click', function (event) {

})

// variable to start the count from 45sec
// inverval that get the count to 0

let count = 60;
let intervalId;

// Function to start or restart the countdown
function startCountdown() {

  isPlaying = true
  clearInterval(intervalId); // Clear existing countdown if any
  
  intervalId = setInterval(function() {
    if(startPlaying){
      
      count -= 1;
      countdownH1.innerText = count;
      if (count === 0) {
        clearInterval(intervalId);
      }
    }
  }, 1000);
}

function restartcount(){
  count = 60;
  countdownH1.innerText = count; // Reset count to the start value
  isPlaying = false
  clearInterval(intervalId);
}


function pauseCountdwon(){
  clearInterval(intervalId)
  isPlaying = false
  
}


// Start playing button
startPlaying.addEventListener('click', function() {
  startCountdown();
  // changeDisplay()
});

// Restart button

restartBtn.addEventListener('click', function() {
  restartcount(); 
  
  // This function now handles resetting and starting the countdown
  // changeDisplay();
});


PauseBtn.addEventListener('click', pauseCountdwon)



// create an array with all the texts


const arrayOfparag = [

 "The sun dipped low on the horizon, casting a golden glow across the tranquil lake. Birds chirped their evening songs, and a gentle breeze rustled through the trees. It was a scene of serene beauty, a moment to pause and appreciate the wonders of nature",

 "In the heart of the bustling city, amidst the towering skyscrapers and bustling crowds, a small café stood hidden away on a quiet street corner. Inside, the aroma of freshly brewed coffee mingled with the scent of freshly baked pastries, welcoming weary souls seeking solace.",

 "High above the clouds, the airplane soared through the vast expanse of the sky. Passengers peered out of tiny windows, marveling at the patchwork of fields and cities far below. For a moment, time seemed to stand still, suspended in the boundless blue.",

 "Deep in the heart of the forest, a babbling brook wound its way through a grove of ancient trees. Sunlight filtered through the dense canopy, dappling the forest floor with a soft, golden light. It was a place untouched by time, where nature reigned supreme.",

 "At the edge of the cliff, the ocean stretched out to the horizon, its vast expanse shimmering in the sunlight. Waves crashed against the rugged coastline, sending plumes of spray into the air. It was a scene of raw power and untamed beauty.",

 "In the dimly lit library, rows of dusty books lined the shelves, their spines worn with age. The air was heavy with the scent of paper and ink, and the only sound was the soft whisper of pages turning. It was a sanctuary for the curious mind.",

 "Amidst the hustle and bustle of the marketplace, vendors called out to passersby, hawking their wares with gusto. The air was filled with the aroma of spices and exotic foods, and colorful banners fluttered in the breeze. It was a feast for the senses.",

 "As night fell, the city came alive with a symphony of light and sound. Neon signs flickered to life, casting a kaleidoscope of colors onto the crowded streets below. It was a place of endless possibility, where dreams were born and destinies forged.",

 "In the quietude of the countryside, fields of golden wheat swayed in the breeze. The air was filled with the chirping of crickets and the distant call of a lone owl. It was a place of simple beauty, where time moved at its own gentle pace.",

 "Beneath the twinkling stars, a campfire crackled merrily, casting a warm glow over the faces of friends gathered round. They laughed and joked, swapping stories long into the night. It was a moment of camaraderie and friendship, a memory to cherish forever."



];

// create a function that generate a text

function getRandomText(){
   let randomIndex = Math.floor(Math.random()* arrayOfparag.length);
   return arrayOfparag[randomIndex]

}

// function that display the randomtext
function changeDisplay(){
  const ramdomText = getRandomText();

  // where the randomText is displauy
  textarea.textContent = ramdomText;
  textarea.disabled = true;
  
}

changeText.addEventListener('click', changeDisplay)