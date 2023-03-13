// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add arrays for character type inclusion options


// generatePassword funtion 
function generatePassword() {
  console.log("Quack, damn you");

  //Prompt user for password length input (8-128 character length)



  //Add return to output generated password value
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
