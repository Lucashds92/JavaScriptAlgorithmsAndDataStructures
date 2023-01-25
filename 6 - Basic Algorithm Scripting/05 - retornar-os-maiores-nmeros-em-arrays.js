function largestOfFour(arr) {
  let generalArray = [];
  let newArray = [];
  for(let k = 0; k < arr.length; k++) {
    let j = arr[k][0];
    for(let l = 0;l < arr[k].length; l++) {
      if(arr[k][l] > j) {
        newArray = arr[k][l];
        j = arr[k][l];
      } else {
        newArray = j;
      }
    }
    generalArray.push(newArray);
  }
  arr = generalArray;
  console.log(arr);
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])