// Assignment code here
var passLength = function() {

	lengthInput = prompt("Choose desired Length of Password by entering a number from 8 - 128");
	while (parseInt(lengthInput) < 8 || parseInt(lengthInput) > 128 || isNaN(parseInt(lengthInput))) {
		lengthInput = prompt("Please try again and enter a number from 8 - 128");
	}
	return lengthInput;
}

function generatePassword() {
  
  // Character variables and string holders
	var passwordLength = passLength(); 
	var lowerCase = window.confirm("Would you like your password to contain Lowercase Case Characters?"); 
	var upperCase = window.confirm("Would you like your password to contain Upper Case Characters?"); 
	var numbers = window.confirm("Would you like your password to contain Number Characters?"); 
  var special = window.confirm("Would you like your password to contain Special Characters?");

  passwordCharacters = "";
  newPassword = "";

  if (lowerCase === false && upperCase === false && numbers === false && special === false) {
    window.alert("Password must contain one set of Characters");
    generatePassword();
  }
  else { //Strings of potential characters.
    if (lowerCase) {
      passwordCharacters = "abcdefghijklmnopqrstuvwxyz"; 
    }
    if (upperCase) {
      passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
      passwordCharacters += "1234567890"; 
    }
    if (special) {
      passwordCharacters += "!@#$%^&*()";
    }

    //Formula for randomizing selected character with chosen parameters.
    for (var i = 0; i < passwordLength; i++) {
      newPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
    }
  }
	return newPassword;
}
//Password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//test for git upload errors