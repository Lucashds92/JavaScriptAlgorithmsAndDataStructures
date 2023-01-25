function repeatStringNumTimes(str, num) {
  let newStr = '';
  if (num > 0){
    for (let i = num; i > 0; i--){
      newStr += str;
      console.log(newStr);
    }
  }

  return newStr;
}

repeatStringNumTimes("abc", 3);