// v-- generate button --v
var generateBtn = document.querySelector("#generate");

// v-- define what lowercase letters, numbers, and special characters are --v
var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase=lowercase.toUpperCase();
var number="0123456789";
var specialCharacters="!@#$%^&*-_=+";



// v-- Defined variables for defining the size of the password --v
function generatePassword(){
    var allowedCharacters = "";
    var savedPassword="";
    var passwordSize=prompt("Choose a password length from 8-128");
    console.log(passwordSize); 

// v-- prompt for user to answer a series of questions to determine what the password will include. Returns an error if user inputs invalid criteria. --v


    if(passwordSize>= 8 && passwordSize<=128){
        var confirmLowerCase=confirm("Do you want lowercase letterrs included?");
        console.log(confirmLowerCase);
        var confirmUpperCase=confirm("Do you want upper case letters included?");
        console.log(confirmUpperCase);
        var confirmNumeric=confirm("Do you want numbers included?");
        console.log(confirmNumeric);
        var confirmSpecialCharacters=confirm("Do you want special characters included?");
        console.log(confirmSpecialCharacters);


// v-- logic for generating password characters based on above criteria --v 

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


// v-- generates password based on criteria defined above --v
function writePassword() {
    var password = generatePassword(); 
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
generateBtn.addEventListener("click",writePassword);