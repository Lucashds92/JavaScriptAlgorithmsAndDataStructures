Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Altere apenas o código abaixo desta linha
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) newArray.push(this[i])
  }
  // Altere apenas o código acima desta linha
  console.log(newArray)
  return newArray;
};