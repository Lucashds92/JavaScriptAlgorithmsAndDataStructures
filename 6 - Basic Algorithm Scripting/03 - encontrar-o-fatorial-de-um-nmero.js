function factorialize(num) {
  let mult = 1;
  for (let i = num; i > 0; i--){
      mult *= i;
  }
  num = mult;
  console.log(num);
  return num;
}

factorialize(5);