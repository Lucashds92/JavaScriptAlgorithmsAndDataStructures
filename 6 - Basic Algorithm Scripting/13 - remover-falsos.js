function bouncer(arr) {
  let trueArr = arr.filter(Boolean);

  console.log(trueArr)
  return trueArr;
}

bouncer([7, "ate", "", false, 9]);

/*
  let trueArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== "" && arr[i] !== undefined && arr[i] !== "NaN") {
      trueArr.push(arr[i]);
    }
  }


  console.log(trueArr)
  return trueArr;
 */