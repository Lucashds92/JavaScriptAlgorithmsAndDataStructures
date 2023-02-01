function sentensify(str) {
  // Altere apenas o código abaixo desta linha
  let newArr = str.split(/\W/);
  let newStr = newArr.join(" ");
  return newStr;

  // Altere apenas o código acima desta linha
}

sentensify("May-the-force-be-with-you");