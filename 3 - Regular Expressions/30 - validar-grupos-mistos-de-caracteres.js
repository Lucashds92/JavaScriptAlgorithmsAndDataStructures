let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).+Roosevelt/; // Altere esta linha
let result = myRegex.test(myString); // Altere esta linha
// Depois de passar no experimento do desafio com myString e ver como o agrupamento funciona


// /(Franklin|Eleanor)\W+\w*^\d(Roosevelt$)/;
// /^\D+\W+(Roosevelt$)/;
