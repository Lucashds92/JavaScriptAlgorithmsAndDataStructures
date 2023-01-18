let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Altere esta linha
let replaceText = "$3 $2 $1"; // Altere esta linha
let result = str.replace(fixRegex, replaceText);


// /(\w+)\s(\w+)\s(\w+)/, '$3 $2 $1';