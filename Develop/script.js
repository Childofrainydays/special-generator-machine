// Assignment Code
var generateBtn = document.querySelector("#generate");



// generatePassword funtion 
function generatePassword() {

}

//  Character functions

// Write password to the #password input
function writePassword() {
  // Store value from generatePassword in var password 
  var password = generatePassword();
  // Display password on page at HTML ID password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
