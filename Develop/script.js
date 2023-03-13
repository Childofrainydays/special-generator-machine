// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add arrays for character type inclusion options
    // 1) Uppercase
    const uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
    // 2) Lowercase
    const lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
    // 3) Numbers
    const numbersArray = [1,2,3,4,5,6,7,8,9,0]
    // 4) Special characters (EX: !,#,@)
    const specialArray = ["!","#","$","%","&","*","@"] 


// generatePassword funtion 
function generatePassword() {
  console.log("Quack, damn you");

  //Prompt user for password length input (8-128 character length)

  //Prompt user for password character type inclusion options of:
    // 1) Uppercase
    // 2) Lowercase
    // 3) Numbers
    // 4) Special characters (EX: !,#,@) 

  // Combine randomized characters from user selected options

  //Add return to output generated password value
  return "Quack";
}

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
