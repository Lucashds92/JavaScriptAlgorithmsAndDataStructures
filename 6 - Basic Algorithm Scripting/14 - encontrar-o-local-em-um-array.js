function getIndexToIns(arr, num) {
  let newArr = arr.sort((a,b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  console.log(newArr)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num){
      return i;
    }
  }


  return arr.length;
}

getIndexToIns([40, 60], 50);

getIndexToIns([3, 10, 5], 3)

/*
primeiro, colocar o array em ordem crescente
depois comparar o número dado com os indices
encontrar o lugar do numero dado
atribuir esse lugar a um indice
 */