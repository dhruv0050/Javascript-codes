// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function validatePassword(password) {
    
    if (password.length < 8) {
        return false;
    }
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;
    for (const char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        } else if (char >= '0' && char <= '9') {
            hasDigit = true;
        }

        if (hasUpperCase && hasLowerCase && hasDigit) {
            return true;
        }
    }

    return false;
}

let userInput = prompt("Please enter your Password:");
console.log("User input: " + userInput);

if (validatePassword(userInput)) {
    console.log("Valid password");
} else {
    console.log("Invalid password");
}
