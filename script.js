// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE// 
  var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
  var upperLetters= letters.toUpperCase();
  var symbols = '"!#$%&()*+,-./:;<=>?@[]^_`{|}~';
  var wholeNumbers = '0123456789';
  var bank = "";

  var passwordLength = prompt(' How long do you want your password to be?')
  var isSpecial = confirm('Would you like to use any special symbols or characters?');
  var isNumber = confirm('Would you like to use any numbers?');
  var isUppercase = confirm('Would you like to use UPPERCASE letters?');
  var isLowercase = confirm('Would you like to use lowercase letter?');
  
  
  if (isLowercase) {
    bank.concat(lowerLetters);
    // use lowercase letters
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