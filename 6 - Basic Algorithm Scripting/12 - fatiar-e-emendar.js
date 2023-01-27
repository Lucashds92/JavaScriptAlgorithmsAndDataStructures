function frankenSplice(arr1, arr2, n) {
  let arrResult = [];

  for (let i = 0; i < n; i++){
    arrResult.push(arr2[i]);
    console.log(arrResult);
  }

  arrResult.push(...arr1);
  console.log(arrResult);

  for (let j = n; j < arr2.length; j++){
    arrResult.push(arr2[j])
  }
  
  console.log(arrResult);
  return arrResult;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/* com splice:
function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  console.log(newArr);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
*/

/* com slice:
function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice(0, n);
  newArr.push(...arr1);
  newArr.push(...arr2.slice(n, arr2.length));
  return newArr
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

*/