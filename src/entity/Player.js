import Entity from 'entity/Entity';
import PlayerControl from 'component/PlayerControl';
import Shooter from 'component/Shooter';

class Player extends Entity {

	constructor(game, x, y) {
		super(game, x, y);

    this.playerControl = this.addComponent(new PlayerControl(game,this));
    this.shooter = this.addComponent(new Shooter(game,this));

    this.playerControl.onAttack.add(this.shooter.shoot, this.shooter);
		
  }

}

export default Player;
