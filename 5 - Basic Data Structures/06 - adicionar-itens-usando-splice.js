function htmlColorNames(arr) {
  // Altere apenas o código abaixo desta linha
  const startIndex = 0;
  const amountToDelete = 2;
  arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond');
  // Altere apenas o código acima desta linha
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));