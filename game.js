const { Game, Player, Host } = require("./models");

const montyHall = (iterations = 1000, switchBox = true) => {
  let numCorrect = 0;
  for (i = 0; i < iterations; i++) {
    const game = new Game();
    const player = new Player();
    const host = new Host();

    player.selectBox(game.boxes, Math.floor(Math.random() * 3) + 1);
    host.selectEmptyBox(game.boxes);
    if (switchBox) {
      player.switchBox(game.boxes);
    }
    if (game.checkValue(player.box)) {
      numCorrect++;
    }
  }
  return `${numCorrect}/${iterations}`;
};

console.log(`Switch box: ${montyHall()}`);
console.log(`Keep box: ${montyHall(1000, false)}`);
