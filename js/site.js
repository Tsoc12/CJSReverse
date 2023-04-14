// controller
function getValue(){

    let userInput = document.getElementById('message').value;

    let reverseInput = reverseString(userInput);

    displayString(reverseInput);
}

function reverseString(message){
  //  take a string, return it in reverse

  let reversedMessage = '';

  for(let index = message.length - 1; index >= 0; index--){
    reversedMessage += message[index];

  }
  

  return reversedMessage;
}


function displayString(reversedMessage) {

  document.getElementById('msg').textContent = reversedMessage;
  document.getElementById('alert').classList.remove('d-none');

}





















// function displayMessage() {
  // let msg = document.getElementById("message").value;
  // alert(msg);

  // Swal.fire({
    // backdrop: false,
    // title: "Reverse",
    // text: msg,
  // });
// }
