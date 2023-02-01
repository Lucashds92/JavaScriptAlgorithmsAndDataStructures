Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Altere apenas o código abaixo desta linha
  for(let i = 0; i < this.length; i++){
    newArray.push(callback(this[i], i, this));
  }; 
  // Altere apenas o código acima desta linha
  return newArray;
};

[23, 65, 98, 5, 13].myMap(item => item * 2)