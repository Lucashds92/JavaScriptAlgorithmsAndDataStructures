const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Altere apenas o código abaixo desta linha
  let newArr = [];
  let generalArr = newArr.concat(arr);
  generalArr.sort(function(a, b) {return a - b});
  return generalArr;
  // Altere apenas o código acima desta linha
}

nonMutatingSort(globalArray);