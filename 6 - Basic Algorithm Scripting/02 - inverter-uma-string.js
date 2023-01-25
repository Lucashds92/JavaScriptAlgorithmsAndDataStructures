function reverseString(str) {
  let newString = "";
  for (let i = (str.length - 1); i >= 0; i--){
    newString += str[i];
  }
  str = newString;
  console.log(str);
  return str;
}

reverseString("hello");

/*
function reverseString(str) {
  let arr = [];
  for (let i = (str.length - 1); i >= 0; i--){
    arr.push(str[i])
  }
  str = arr;
  return str;
}
 */