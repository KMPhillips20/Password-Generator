// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE// 
  var isSpecial = confirm('Would you like to use any special symbols or characters?');
  var isNumber = confirm('Would you like to use any numbers?');
  var isUppercase = confirm('Would you like to use UPPERCASE letters?');
  var isLowercase = confirm('Would you like to use lowercase letter?');

  if (isUppercase) {
    // Use uppercase letters
    console.log('uppercase');
  }

  if (isLowercase) {
    console.log('lowercase');
    // use lowercase letters
  }

  if (isSpecial) {
    console.log('special');
    // use Special symbols
  }

  if(isNumber) {
    console.log('numbers');
    // use numbers
  }




  
 return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);