let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Altere esta linha
let result = text.match(myRegex);
console.log(result);