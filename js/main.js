// welcome page input that holds the input at the begining 

const result = document.querySelector('#result');

// const passed = document.querySelector('#passed');
const input = document.querySelector('input');

const typingArea = document.querySelector("#typing-area")

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

let textAreaInstr4uc = document.querySelector('#textAreaInstr4uc')



// Global variables 
let cacthPlayerName;
let isPlaying = false;
let audio;
let errors = 0;
let paragraphArray;
let textareaphArray = "";
typingArea.disabled = true;
result.style.display = "none";
passed.style.display = "none";
let count = 60;
let intervalId;


// this is the variable that split the words 
textareaphArray = typingArea.value.split(" ")


// function that when enter name in my welcome page hid the welcome page and take you to my main page

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

btnStartGame.addEventListener('click', handleEvent);

input.addEventListener('keyup', (event) => {

	cacthPlayerName = event.target.value;
});

btnStartGame.addEventListener('click', function (event) {

})

startPlaying.addEventListener('click', playmusic)


// function that starts the music when click start playing, restart and pause

function playmusic() {
	audio = new Audio('/audio/LED Style 60 Second Ticking Countdown Timer With Alarm.mp3');
	audio.play()
}

// function to stop the audio

function stopGameAudio() {
	if (audio) {
		audio.pause();
	}
}

// Function to start the countdown
function startCountdown() {


	isPlaying = true
	clearInterval(intervalId); // Clear existing countdown if any

	intervalId = setInterval(function () {
		if (startPlaying && count > 0) {
			typingArea.disabled = false


			count -= 1;
			countdownH1.innerText = count;

			if (count <= 0) {
				if (errors === 0 && textareaphArray?.length === paragraphArray?.length) {
					passed.innerHTML = "Congratulations! You passed!";
				} else {
					passed.innerHTML = "Oops! You either made mistakes or ran out of time.";
				}
				passed.style.display = "block";
				typingArea.disabled = true;

				clearInterval(intervalId);
			}

		}
	}, 1000);
}

// function to restart countdown
function restartcount() {
	count = 60;
	countdownH1.innerText = count; // Reset count to the start value
	isPlaying = false
	passed.innerText = "";
	clearInterval(intervalId);


}

// function to pause 
function pauseCountdwon() {
	stopGameAudio()
	clearInterval(intervalId)
	isPlaying = false
	typingArea.disabled = true

}


// Start playing button
startPlaying.addEventListener('click', function () {
	startCountdown();

	// changeDisplay()
});

// Restart button
restartBtn.addEventListener('click', function () {
	stopGameAudio();
	typingArea.value = "";
	restartcount();
	result.innerHTML = "";



	// This function now handles resetting and starting the countdown
	// changeDisplay();
});

// 	Pause button
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

function getRandomText() {
	let randomIndex = Math.floor(Math.random() * arrayOfparag.length);
	textarea.disabled = true;
	paragraphArray = arrayOfparag[randomIndex].split(" ")
	return arrayOfparag[randomIndex]


}

// function that display the randomtext
function changeDisplay() {
	const ramdomText = getRandomText();

	// where the randomText is displauy
	textarea.textContent = ramdomText;
	textarea.disabled = true;



}

changeText.addEventListener('click', changeDisplay)


// here an event is added to the typing area that way everytime the player types something, a key is activated 

typingArea.addEventListener("keyup", (event) => {

	// this is splitting every word of the paragrf into single words and putting the words into this varibale into different array
	paragraphArray = textarea.value.split(" ")

	// this is the variable that split the words 
	textareaphArray = event.target.value.split(" ")




	// this the cariable of the currentPositicon where the letter is right now 
	// const currentPosition = event.target.textContent.split(" ").length

	// console.log(paragraphArray);

	checkErrors()

})

// Check error function

function checkErrors() {
	const tempTextAreaArray = textareaphArray.join(" ").trim().split(" ")
	errors = 0
	tempTextAreaArray.forEach((word, index) => {

		if (word !== paragraphArray[index]) {
			errors++;
		}
	});


	result.style.display = "flex"
	result.innerHTML = `<span class="red">Errors : ${errors}</span>,  <span class="green">${textareaphArray.length} written words of ${paragraphArray.length}</span>`
}

// Check result 
function checkResult() {
	if (textareaphArray.length === paragraphArray.length) {
		console.log(`Total errors: ${errors > 0 ? errors / paragraphArray.length : paragraphArray.length}`)

	}

}


// Prevent text from bring copied 
typingArea.addEventListener('paste', function (event) {
	event.preventDefault();
})


textAreaInstr4uc.disabled = true

