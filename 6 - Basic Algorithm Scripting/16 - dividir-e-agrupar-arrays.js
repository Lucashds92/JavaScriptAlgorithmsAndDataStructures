function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let num = 0;

  while (num < arr.length) {
    newArr.push(arr.slice(num, num += size))
  }

  console.log(newArr)
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/*
    let transArr = [];

  for (let i = 0; i <= arr.length - size; i += size) {
    for (let j = size; j <= arr.length; j*=2) {
      transArr = arr.slice(i, j);
      newArr.push(transArr);
      console.log(i)
      console.log(j)
    }
  }

 */