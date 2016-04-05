let entityCount = 0;

class Entity extends Phaser.Sprite {

	constructor(game, x, y) {

		// make a default graphic (white square)
    let px = 16;
    let rect = game.make.bitmapData(px,px);
    rect.ctx.fillStyle = '#FFFFFF';
    rect.ctx.fillRect(0, 0, px, px);

		super(game, x, y, rect);

    this.game = game;
    this.width = px;
    this.height = px;

		// set origin to the middle of the sprite
    this.anchor.set(0.5);

		// enable physics
    game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;

    this.speed = 76;

    this.id = entityCount++;
    this.components = [];

    this.game.add.existing(this);

  }

  updateComponents() {
		this.components.forEach(function(c) {
			c.update();
		});
	}

  addComponent(component) {
		this.components.push(component); return component;
	}

	removeComponent(component){
    let index = this.components.indexOf(component);
    if(index > -1) this.components.splice(index,1);
  }

  update() {
		super.update();

    this.body.preUpdate();
    this.updateComponents();
    this.body.postUpdate();

    // this.game.debug.body(this,'yellow',false);
    // this.game.debug.spriteBounds(this, 'pink', false);
  }

}

export default Entity;
