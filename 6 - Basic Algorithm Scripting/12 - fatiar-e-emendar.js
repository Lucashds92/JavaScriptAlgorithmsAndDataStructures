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