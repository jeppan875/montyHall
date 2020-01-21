const { Game, Player, Host } = require("./models");
const { CAR, EMPTY } = require("./constants");
const boxesMock = [
  { nr: 1, value: EMPTY },
  { nr: 2, value: CAR },
  { nr: 3, value: EMPTY }
];

describe("Monty hall tests", () => {
  it("should should return true when value is car", () => {
    const game = new Game();
    expect(game.checkValue({ nr: 1, value: CAR })).toBe(true);
  });
  it("should should return false when value is empty", () => {
    const game = new Game();
    expect(game.checkValue({ nr: 1, value: EMPTY })).toBe(false);
  });
  it("should remove an empty box by host", () => {
    const boxes = [
      { nr: 2, value: CAR },
      { nr: 3, value: EMPTY }
    ];
    const host = new Host();
    host.selectEmptyBox(boxes);
    expect(boxes.length).toBe(1);
    expect(boxes[0].value).toBe(CAR);
    expect(host.box.value).toBe(EMPTY);
  });
  it("should select a box for player, and remove from available boxes", () => {
    const boxes = [...boxesMock];
    const player = new Player();
    player.selectBox(boxes, 1);
    expect(player.box.value).toBe(EMPTY);
    expect(player.box.nr).toBe(1);
    expect(boxes.length).toBe(2);
    expect(boxes.some(box => box.nr === 1)).toBe(false);
  });
  it("If player choose empty box first, it should select car if switches", () => {
    const boxes = [...boxesMock];
    const player = new Player();
    const host = new Host();
    player.selectBox(boxes, 1);
    host.selectEmptyBox(boxes);
    player.switchBox(boxes);
    expect(boxes[0].value).toBe(EMPTY);
    expect(player.box.value).toBe(CAR);
    expect(host.box.value).toBe(EMPTY);
  });
  it("If player choose car box first, it should select empty if switches", () => {
    const boxes = [...boxesMock];
    const player = new Player();
    const host = new Host();
    player.selectBox(boxes, 2);
    host.selectEmptyBox(boxes);
    player.switchBox(boxes);
    expect(boxes[0].value).toBe(CAR);
    expect(player.box.value).toBe(EMPTY);
    expect(host.box.value).toBe(EMPTY);
  });
});
