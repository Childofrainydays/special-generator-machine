// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add arrays for character type inclusion options
    // 1) Uppercase
    const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
    // 2) Lowercase
    const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
    // 3) Numbers
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    // 4) Special characters (EX: !,#,@)
    const special = ["!","#","$","%","&","*","@"];

    //Alt method possible using String.fromChar()

//Define a function to shuffle an array - do so OUTSIDE and BEFORE the generatePassword function so it can be called later in the generatePassword function


// generatePassword funtion 
function generatePassword(){
  console.log("Quack, damn you"); //moving parts check

  //Prompt user for password length input (8-128 character length) & change into an integer
  let lengthOf = parseInt(prompt("How long would you like your password to be?"));

   //Prompt user for password character type inclusion options of :
  let useUppercase = confirm("Do you want to include uppercase letters?");
  let useLowercase = confirm("Do you want to include lowercase letters?");
  let useNumbers = confirm("Do you want to include numbers?");
  let useSpecial = confirm("Do you want to include special characters?");


  //rework
  let options = (special)
  options.forEach((option) => {
    confirm("do you want to include" + option)
  }) 
  console.log(options) 
  
  const characterPool = [
    // 1) Uppercase
    ...(useUppercase ? uppercase : []),
    // 2) Lowercase
    ...(useLowercase ? lowercase : []),  
    // 3) Numbers
    ...(useNumbers ? numbers : []),
    // 4) Special characters (EX: !,#,@)
    ...(useSpecial ? special : []),
  ];
  
  //Account for idiots 
  if(characterPool.length === 0) return "invalid input"

  // Combine randomized characters from user selected options using Math.random through the length of the array containing all possible character options
  for(let i = 0; i <lengthOf; i++){  
    Math.floor(Math.random() * characterPool.length)
  }

  //Add return to output generated password value
  return 
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
 