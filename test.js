

// variable that holds the errors that the player make while typing 
let errors = 0
let paragraphArray;
let textareaphArray;






// here an event is added to the typing area that way everytieme the player types somthing, an key is activated 

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


function checkErrors() {
  const tempTextAreaArray = textareaphArray.join(" ").trim().split(" ")
  errors = 0
  tempTextAreaArray.forEach((word, index) => {
    console.log(word === paragraphArray[index]);

    if (word !== paragraphArray[index]) {
      errors++;
    }
  });


  result.style.display = "flex"
  result.innerHTML = `<span class="red">Errors : ${errors}</span>,  <span class="green">${textareaphArray.length} written words of ${paragraphArray.length}</span>`
}

function checkResult() {
  if (textareaphArray.length === paragraphArray.length) {
    console.log(`Total errors: ${errors > 0 ? errors / paragraphArray.length : paragraphArray.length}`)

  }

}




// typingArea.addEventListener('paste', function (event) {
//   event.preventDefault();
//   console.log('Pasting into this field is not allowed.')
// })