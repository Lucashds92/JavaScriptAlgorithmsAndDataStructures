function filteredArray(arr, elem) {
  let newArr = [];
  // Altere apenas o código abaixo desta linha
  for (let i = 0; i < arr.length; i++){
    if (arr[i].indexOf(elem) < 0){
      newArr.push(arr[i]);
    }
  }
  // Altere apenas o código acima desta linha
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

console.log(filteredArray([[4, 2, 8], [1, 6, 3], [5, 13, 26], [19, 7, 9]], 3));