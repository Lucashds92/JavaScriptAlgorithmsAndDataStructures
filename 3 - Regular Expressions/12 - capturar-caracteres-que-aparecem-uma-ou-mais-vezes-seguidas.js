let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Altere esta linha
let result = difficultSpelling.match(myRegex);
console.log(result);