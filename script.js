// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE// 
  var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
  var upperLetters= lowerLetters.toUpperCase();
  var symbols = '"!#$%&()*+,-./:;<=>?@[]^_`{|}~';
  var wholeNumbers = '0123456789';
  var bank = "";
  var thePasswordLength = prompt('Please choose between 8 and 128 characters for your Password.')

  for (thePasswordLength;thePasswordLength <8 || thePasswordLength>128;) {
    alert(' You need to select a valid Password Length!');
    var thePasswordLength = prompt('Please choose between 8 and 128 characters for your Password.')
  }




  var isSpecial = confirm('Would you like to use any special symbols or characters?');
  var isNumber = confirm('Would you like to use any numbers?');
  var isUppercase = confirm('Would you like to use UPPERCASE letters?');
  var isLowercase = confirm('Would you like to use lowercase letter?');
  
  
  if (isLowercase) {
      // use lowercase letters
    bank.concat(lowerLetters);
  }
  
  if (isUppercase) {
    // Use uppercase letters
   bank.concat(upperLetters);
  }

  if (isSpecial) {
    bank.concat(symbols);
    // use Special symbols
  }

  if(isNumber) {
    bank.concat(wholeNumbers);
    // use numbers
  }
  console.log(bank);
     return "";
}
//   grab random letters



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);