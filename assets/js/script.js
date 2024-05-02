// Define character sets and the criteria
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var number = "0123456789";
var specialCharacters = "!@#$%^&*-_=+";
var criteria = {
    size: 0,
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumeric: false,
    hasSpecialCharacters: false
};

// Generate password based on selected criteria
function generatePassword() {
    var allowedCharacters = "";
    var savedPassword = "";
    criteria.size = prompt("Choose a password length from 8-128");

    if (criteria.size >= 8 && criteria.size <= 128) {
        criteria.hasLowerCase = confirm("Do you want lowercase letters included?");
        criteria.hasUpperCase = confirm("Do you want uppercase letters included?");
        criteria.hasNumeric = confirm("Do you want numbers included?");
        criteria.hasSpecialCharacters = confirm("Do you want special characters included?");

        if (criteria.hasLowerCase) {
            allowedCharacters += lowercase;
        }
        if (criteria.hasUpperCase) {
            allowedCharacters += uppercase;
        }
        if (criteria.hasNumeric) {
            allowedCharacters += number;
        }
        if (criteria.hasSpecialCharacters) {
            allowedCharacters += specialCharacters;
        }

        for (var i = 0; i < criteria.size; i++) {
            var randomIndex = Math.floor(Math.random() * allowedCharacters.length);
            savedPassword += allowedCharacters[randomIndex];
        }
    } else {
        alert("Invalid Entry, Password length must be between 8 and 128");
    }

    return savedPassword;
}

// Function to display password and criteria
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

    var criteriaResults = document.querySelector("#criteria-result");
    criteriaResults.innerHTML = `
        <p>Password Length: ${criteria.size}</p>
        <p>Lowercase Letters: ${criteria.hasLowerCase ? "YES" : "NO"}</p>
        <p>Uppercase Letters: ${criteria.hasUpperCase ? "YES" : "NO"}</p>
        <p>Numbers: ${criteria.hasNumeric ? "YES" : "NO"}</p>
        <p>Special Characters: ${criteria.hasSpecialCharacters ? "YES" : "NO"}</p>
    `;
}

// Function to copy password to clipboard using Clipboard API
function copyToClipboard() {
    var passwordText = document.querySelector("#password");
    if (navigator.clipboard) {
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

// Event listeners for buttons
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copyToClipboard);


