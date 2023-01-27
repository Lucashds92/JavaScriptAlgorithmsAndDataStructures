let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Altere apenas o código abaixo desta linha

function glideMixin (obj) {
  obj.glide = function() {
    console.log("Gliding, wooooosh!");
  } 
};

glideMixin(bird);
glideMixin(boat);