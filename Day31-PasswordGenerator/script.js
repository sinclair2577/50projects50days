const text = document.querySelector(".text");
const icon = document.querySelector(".fas");

const form = document.querySelector("form");
const passwordLength = document.getElementById("passwordLength");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let options = {
    passwordLength: passwordLength.value,
    uppercase: uppercase.checked,
    lowercase: lowercase.checked,
    numbers: numbers.checked,
    symbols: symbols.checked,
  };
  text.innerText = generatePassword(options);
});

icon.addEventListener("click", () => {
  const psw = text.innerText;
  if (!psw) return;
  navigator.clipboard.writeText(text.innerText);
  alert("Copied to clipboard!");
});

function generatePassword(options) {
  let upCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCharset = "abcdefghijklmnopqrstuvwxyz";
  let num = "0123456789";
  let charsetSymbols = "!@#$%^&*(){}[]=<>/,.";

  const { passwordLength, uppercase, lowercase, numbers, symbols } = options;
  let charset = "";
  let password = "";

  if (uppercase) charset += upCharset;
  if (lowercase) charset += lowerCharset;
  if (numbers) charset += num;
  if (symbols) charset += charsetSymbols;

  if (charset.length == 0) {
    window.alert("Please choose one option");
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIdx = Math.floor(Math.random() * charset.length);
    password += charset[randomIdx];
  }

  return password;
}
