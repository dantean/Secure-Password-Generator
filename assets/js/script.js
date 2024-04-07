var generateBtn = document.querySelector("#generate");

function generatePassword(){
    var passwordSize=prompt("Enter password length from 8-128")
    console.log(passwordSize)

}

function writePassword() {
    var password = generatePassword() 
    var passwordText = document.quesrySelector("#password");
    passwordText.value = password;
}
generateBtn.addEventListener("click",writePassword);