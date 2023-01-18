let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Altere esta linha
let result = quoteSample.match(myRegex); // Altere esta linha
console.log(result);