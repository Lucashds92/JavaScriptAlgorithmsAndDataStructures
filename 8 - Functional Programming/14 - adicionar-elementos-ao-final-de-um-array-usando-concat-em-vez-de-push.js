function nonMutatingPush(original, newItem) {
  // Altere apenas o código abaixo desta linha
  let newArr = original.concat(newItem);
  return newArr

  // Altere apenas o código acima desta linha
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);