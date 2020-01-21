const { shuffle } = require("../utils");
const { CAR, EMPTY } = require("../constants");
const boxArray = [CAR, EMPTY, EMPTY];

function Game() {
  this.boxes = shuffle(boxArray).map((box, i) => {
    return {
      nr: i + 1,
      value: box
    };
  });
}

Game.prototype.checkValue = box => box.value === CAR;

module.exports = Game;
