/*
  Gives an entity the ability to shoot bullets/projectiles.
  This class is a factory component. It pre-populates a pool for bullets
*/

import Component from 'component/Component';
import Bullet from 'entity/Bullet';
import Player from 'entity/Player';
import Registry from 'Registry';

class Shooter extends Component {
  constructor(game,parent) {
    super(game,parent);

    if(parent instanceof Player) this.target = game.input.activePointer;
    else this.target = null;

    this.cooldown = 50; //ms
    this.cooling = this.cooldown;

    this.children = this.game.add.group();
    for(let i = 0; i < 2500; i++) this.children.add(new Bullet(game,this));
  }

  shoot() {
    if(this.cooling <= 0) {
      this.cooling = this.cooldown;
      let bullet = this.children.getFirstExists(false).fire(this.parent,this.target);
    }
  }

  update() {
    super.update();
    this.cooling -= this.game.time.elapsed;
  }

}

export default Shooter;
