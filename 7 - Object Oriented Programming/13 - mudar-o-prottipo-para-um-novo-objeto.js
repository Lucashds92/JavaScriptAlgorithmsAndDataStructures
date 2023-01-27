function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Altere apenas o código abaixo desta linha
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name)
  }
};