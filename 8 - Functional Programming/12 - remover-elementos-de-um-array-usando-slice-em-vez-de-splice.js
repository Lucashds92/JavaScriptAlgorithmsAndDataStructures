function nonMutatingSplice(cities) {
  // Altere apenas o código abaixo desta linha
  let newArr = cities.slice(0, 3);
  console.log(newArr);
  return newArr;

  // Altere apenas o código acima desta linha
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);