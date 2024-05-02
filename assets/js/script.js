//  generate button 
var generateBtn = document.querySelector("#generate");

//  define what lowercase letters, numbers, and special characters are 
var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase=lowercase.toUpperCase();
var number="0123456789";
var specialCharacters="!@#$%^&*-_=+";



//  Defined variables for defining the size of the password 
function generatePassword(){
    var allowedCharacters = "";
    var savedPassword="";
    var passwordSize=prompt("Choose a password length from 8-128");
    console.log(passwordSize); 

//  prompt for user to answer a series of questions to determine what the password will include. Returns an error if user inputs invalid criteria. 


    if(passwordSize>= 8 && passwordSize<=128){
        var confirmLowerCase=confirm("Do you want lowercase letterrs included?");
        console.log(confirmLowerCase);
        var confirmUpperCase=confirm("Do you want upper case letters included?");
        console.log(confirmUpperCase);
        var confirmNumeric=confirm("Do you want numbers included?");
        console.log(confirmNumeric);
        var confirmSpecialCharacters=confirm("Do you want special characters included?");
        console.log(confirmSpecialCharacters);


//  logic for generating password characters based on above criteria  

        if(confirmLowerCase){
            var randomIndex= Math.floor( Math.random() * lowercase.length )
        }

        if(confirmUpperCase) {
            allowedCharacters += uppercase;
        }

        if(confirmNumeric) {
            allowedCharacters += number;
        }

        if (confirmSpecialCharacters) {
            allowedCharacters += specialCharacters;
        }
        for (var i = 0; i < passwordSize; i++) {
            var randomIndex = Math.floor(Math.random() * allowedCharacters.length);
            savedPassword += allowedCharacters[randomIndex];
        }
    } else{
    alert("Invalid Entry, Password length must be between 8 and 128");
}



return savedPassword;

}


//  generates password based on criteria defined above 
function writePassword() {
    var password = generatePassword(); 
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
generateBtn.addEventListener("click",writePassword);

// Function to copy password to clipboard
function copyToClipboard() {
    var passwordText = document.querySelector("#password");
    if (navigator.clipboard) {  // Checks if Clipboard API is available
      navigator.clipboard.writeText(passwordText.value)
        .then(() => {
          alert("Password copied to clipboard!");
        })
        .catch(err => {
          console.error("Failed to copy password: ", err);
          alert("Failed to copy password.");
        });
    } else {
      alert("Clipboard API not available.");
    }
  }
  
  // Update the writePassword function to display criteria
  function writePassword() {
      var password = generatePassword(); 
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
  
      // Display criteria results
      var criteriaResults = document.querySelector("#criteria-result");
      criteriaResults.innerHTML = `
        <p>Lowercase Letters: ${confirmLowerCase ? "YES" : "NO"}</p>
        <p>Uppercase Letters: ${confirmUpperCase ? "YES" : "NO"}</p>
        <p>Numbers: ${confirmNumeric ? "YES" : "NO"}</p>
        <p>Special Characters: ${confirmSpecialCharacters ? "YES" : "NO"}</p>
      `;
  }
  
  // Adding event listener for the new copy button
  var copyBtn = document.querySelector("#copy");
  copyBtn.addEventListener("click", copyToClipboard);
  
  // Existing event listener
  generateBtn.addEventListener("click",writePassword);
  