class Registry {
  constructor() {}
  init(game) {
    this.game = game;

    this.bulletPool = game.add.group();
  }
}

let registry = new Registry();
export {registry as default};
