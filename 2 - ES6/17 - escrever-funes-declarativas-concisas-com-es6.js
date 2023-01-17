// Altere apenas o código abaixo desta linha
const bicycle = {
  gear: 2,

  setGear(newGear){
    bicycle.gear = newGear;
    return `${this.gear}`;
  }
};
// Altere apenas o código acima desta linha
bicycle.setGear(3);
console.log(bicycle.gear);