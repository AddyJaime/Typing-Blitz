// Global variables used in this psrt of the code 
let errors = 0
let paragraphArray;
let textareaphArray;


// here an event is added to the typing area that way everytieme the player types somthing, an key is activated 

typingArea.addEventListener("keyup", (event) => {


  paragraphArray = textarea.value.split(" ")


  textareaphArray = event.target.value.split(" ")

  checkErrors()

})


// Checking for errors function

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


// Checking for results function
function checkResult() {

  if (textareaphArray.length === paragraphArray.length) {
    console.log(`Total errors: ${errors > 0 ? errors / paragraphArray.length : paragraphArray.length}`)


  }

}


