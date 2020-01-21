function Player() {
  this.box = "";
}

Player.prototype.switchBox = function(boxes) {
  boxes.unshift(this.box);
  this.box = boxes.pop();
};

Player.prototype.selectBox = function(boxes, choice) {
  const boxIndex = boxes.findIndex(box => box.nr === choice);
  this.box = boxes.splice(boxIndex, 1)[0];
};

module.exports = Player;
