import Player from 'entity/Player';
import Registry from 'Registry';

class GameState extends Phaser.State {

	create() {
		Registry.init(this.game);
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let player = new Player(this.game, center.x, center.y);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.world.setBounds(0, 0, 800, 600);
    this.game.camera.follow(player);
	}

	update(){
		super.update();
		this.game.physics.arcade.collide(Registry.bulletPool);
	}

}

export default GameState;
