function truncateString(str, num) {
  let newStr = '';

  if (num > str.length) {
    num = str.length
  }

  if (num > 0) {
    for (let i = 0; i < num; i++) {
      newStr += str[i]
    }
  }
  
  if (num < str.length) {
    str = newStr + '...';
  } else {
    str = newStr
  }
  
  console.log(str);
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);