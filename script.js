// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE// 
  var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
  var upperLetters= lowerLetters.toUpperCase();
  var symbols = '"!#$%&()*+,-./:;<=>?@[]^_`{|}~';
  var wholeNumbers = '0123456789';
  var bank = "";
  var finalPassword = "";
  
  

  var thePasswordLength = prompt('How many characters do you want in your password. Please choose between 8 and 128.');  

  if (thePasswordLength < 8 || thePasswordLength > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(thePasswordLength)) {
    thePasswordLength= prompt("Please enter a number between 8 and 128.");
  }
  else {
    alert("The password will be " + thePasswordLength + " characters long.");
    
  }
  

  var aSpecial = confirm('Would you like to use any special symbols or characters?');

  var aNumber = confirm('Would you like to use any numbers?');

  var aUppercase = confirm('Would you like to use UPPERCASE letters?');

  var aLowercase = confirm('Would you like to use lowercase letter?'); 


 

  if (aLowercase) {
      // use lowercase letters
      bank = bank.concat(lowerLetters);
    }
    
  if (aUppercase) {
    // Use uppercase letters
    bank = bank.concat(upperLetters);
}

if (aSpecial) {
    bank = bank.concat(symbols);
    // use Special symbols "!#$%&()*+,-./:;<=>?@[]^_`{|}~'
  }
  
  if(aNumber) {
      bank = bank.concat(wholeNumbers);
      // use numbers 0123456789
    }

  if (aLowercase || aUppercase || aSpecial || aNumber) {
    for (var i = 0; i < thePasswordLength; i++) {
      var random =[Math.floor(Math.random() * bank.length)];
      console.log(random, bank[random]);
       finalPassword += bank[random];
    }
    return finalPassword; 
  } else { 
    alert('You must choose to use at least one option');
    return "";
  }
  
    return "";
}
    



   


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);