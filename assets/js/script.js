// v-- generate button --v
var generateBtn = document.querySelector("#generate");

// v-- define what lowercase letters, numbers, and special characters are --v
var lowercase="abcdefghijklmnopqrstuvwxyz";
console.log(confirmLowerCase);
var uppercase=lowercase.toUpperCase();
var number="0123456789";
var specialCharacters="!@#$%^&*-_=+";



// v-- prompt for user to answer a series of questions to determine what the password will include. Returns an error if user inputs invalid criteria. --v
function generatePassword(){
    var savedPassword="";
    var passwordSize=prompt("Choose a password length from 8-128")
    console.log(passwordSize) 
    if(passwordSize>= 8 && passwordSize<=128){
        var confirmLowerCase=confirm("Do you want lowercase letterrs included?");
        console.log(confirmLowerCase);
        var confirmUpperCase=confirm("Do you want upper case letters included?");
        var confirmNumeric=confirm("Do you want numbers included?");
        var confirmSpecialCharacters=confirm("Do you want special characters included?");

        if(confirmLowerCase){
            var randomIndex= Math.floor( Math.random() * lowercase.length )
        }
    }
else{
    alert("Invalid Entry, Password length must be between 8 and 128");
}



return savedPassword

}


// v-- generates password based on criteria defined above --v
function writePassword() {
    var password = generatePassword(); 
    var passwordText = document.quesrySelector("#password");
    passwordText.value = password;
}
generateBtn.addEventListener("click",writePassword);