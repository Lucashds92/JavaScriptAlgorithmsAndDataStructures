function sliceArray(anim, beginSlice, endSlice) {
  // Altere apenas o código abaixo desta linha
  let slicedArr = anim.slice(beginSlice, endSlice);
  return slicedArr;

  // Altere apenas o código acima desta linha
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);