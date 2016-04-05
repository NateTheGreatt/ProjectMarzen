import GameState from 'states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'content', null,false,false);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}

new Game();
