function generatePassword(length, includeSymbols, includeNumbers, includeEmojis, includeSpecialSymbols) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:',.<>?-";
  const emojis = "😀😁😂🤣😃😄😅😆😉😊😋😎😍😘🥰😜🤪🤩🥳😇🤓🧐😈👻💀👽🤖🎃😺😸😹😻😼😽🙀😿😾";
  const specialSymbols = "~œ∑´®†¥¨ˆøπ“‘≈ç√∫˜µ≤≥÷åß∂ƒ©˙∆˚¬…æ№§¶•ªº≠±∞¬√∩∪∂∑∏∐∇≡∝∅⊕⊗⊥∠∴∵∷∽≌⊂⊃∪∩⊆⊇";

  let characters = letters;

  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;
  if (includeEmojis) characters += emojis;
  if (includeSpecialSymbols) characters += specialSymbols; // Додаємо спеціальні символи

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
  
function generateRandomUsername() {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const usernameLength = Math.floor(Math.random() * 16) + 8;
  let username = "";
  
  for (let i = 0; i < usernameLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    username += characters[randomIndex];
  }
  return username;
}
  
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  });
}
  
document.getElementById("generate").addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value, 10);
  const includeSymbols = document.getElementById("includeSymbols").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeEmojis = document.getElementById("includeEmojis").checked;
  const includeSpecialSymbols = document.getElementById("includeSpecialSymbols").checked; // Новий чекбокс

  const password = generatePassword(length, includeSymbols, includeNumbers, includeEmojis, includeSpecialSymbols);
  const username = generateRandomUsername();

  document.getElementById("passwordOutput").textContent = password;
  document.getElementById("usernameOutput").textContent = username;

  document.getElementById("passwordOutput").style.fontFamily = "'Courier New', Courier, monospace";
  document.getElementById("usernameOutput").style.fontFamily = "'Courier New', Courier, monospace";
});
  
document.getElementById("copyPassword").addEventListener("click", () => {
  const password = document.getElementById("passwordOutput").textContent;
  if (password) {
    copyToClipboard(password);
  }
});
  
document.getElementById("copyUsername").addEventListener("click", () => {
  const username = document.getElementById("usernameOutput").textContent;
  if (username) {
    copyToClipboard(username);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const lengthInput = document.getElementById("length");

  // Ensure the value is at least 16 when the input loses focus
  lengthInput.addEventListener("blur", () => {
    if (!lengthInput.value || parseInt(lengthInput.value, 10) < 16) {
      lengthInput.value = 16;
    }
  });

  // Prevent invalid input (e.g., negative numbers or non-numeric values)
  lengthInput.addEventListener("input", () => {
    if (parseInt(lengthInput.value, 10) < 16) {
      lengthInput.value = 16;
    }
  });
});
