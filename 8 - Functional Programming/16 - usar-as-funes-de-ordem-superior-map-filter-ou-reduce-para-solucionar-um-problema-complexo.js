const squareList = arr => {
  // Altere apenas o código abaixo desta linha
  let newArr = [];
  arr.map(function(item) {
    if(item > 0 && Number.isInteger(item) === true) {
      newArr.push(item * item)
    }
  })


  return newArr;
  // Altere apenas o código acima desta linha
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);