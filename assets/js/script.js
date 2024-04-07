var generateBtn = document.querySelector("#generate");

function generatePassword(){
    var passwordSize=prompt("Choose a password length from 8-128")
    console.log(passwordSize)

    if(passwordSize>= 8 && passwordSize<=128){
        var confirmLowerCase=confirm("Do you want lowercase included?");
        console.log(confirmLowerCase);
    }
else{
    alert("Invalid Entry, Password length must be between 8 and 128");
}
}

function writePassword() {
    var password = generatePassword() 
    var passwordText = document.quesrySelector("#password");
    passwordText.value = password;
}
generateBtn.addEventListener("click",writePassword);