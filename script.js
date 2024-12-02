// Selecting elements
const passwordLengthInput = document.getElementById("password-length");
const generateButton = document.getElementById("generate-button");
const passwordOutput = document.getElementById("password-output");
const copyButton = document.getElementById("copy-button");

// Characters for password generation
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?";

// Function to generate password
function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Event listener for Generate button
generateButton.addEventListener("click", () => {
  const length = parseInt(passwordLengthInput.value);
  if (length >= 4 && length <= 20) {
    passwordOutput.value = generatePassword(length);
  } else {
    alert("Please choose a length between 4 and 20.");
  }
});

// Event listener for Copy button
copyButton.addEventListener("click", () => {
  if (passwordOutput.value) {
    navigator.clipboard.writeText(passwordOutput.value);
    alert("Password copied to clipboard!");
  } else {
    alert("Generate a password first!");
  }
});
