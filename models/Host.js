const { EMPTY } = require("../constants");

function Host() {
  this.box = "";
}

Host.prototype.selectEmptyBox = function(boxes) {
  const emptyBoxIndex = boxes.findIndex(box => box.value === EMPTY);
  this.box = boxes.splice(emptyBoxIndex, 1)[0];
};

module.exports = Host;
