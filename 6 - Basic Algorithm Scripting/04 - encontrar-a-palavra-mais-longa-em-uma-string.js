function findLongestWordLength(str) {

  let myRegex = /\w+/ig;
  let myArray = str.match(myRegex);
  let newStr = [];
  let j = 0;

    for (let i = 0; i < (myArray.length); i++){
      if ((myArray[i].length) > j) {
        newStr = myArray[i];
        j = myArray[i].length;
      };
     };
  
    str = newStr
    console.log(str);

  console.log(str.length);
  return str.length;
};

findLongestWordLength("The quick brown fox jumped over the lazy dog");


/* 
    Testes

    let j = 0;

    for (let i = 1; i < (myArray.length); i++){
      if ((myArray[i].length) > j) {
        newStr = myArray[i];
        j = myArray[i];
      };
     };

    for (let i = 1; i < (myArray.length); i++){
    for (let j = 0; j < i; j++){
      if ((myArray[i].length) > (myArray[j].length)) {
        newStr = myArray[i];
        j = i;
      } else {
        newStr = myArray[j];
      };
     };
    };
*/