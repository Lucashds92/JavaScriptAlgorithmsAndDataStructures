function mutation(arr) {

  let arr1 = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase();
  let counter = 0

  for (let i = 0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i]) >= 0) {
      counter += 1;
    } else {
      counter -= arr2.length;
    }
  }

  if (counter > 1){
    return true
  }

  return false
  
}

mutation(["hello", "hey"]); //false

mutation(["floor", "for"]) //true

mutation(["Tiger", "Zebra"]) // false