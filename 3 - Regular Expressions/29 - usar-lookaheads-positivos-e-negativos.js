let sampleWord = "astronaut";
let pwRegex = /(?=[a-z]+)(?=\D*\d{2,})/; // Altere esta linha
let result = pwRegex.test(sampleWord);

// /(?=[a-z]+)(?=\D*\d{2,})/;