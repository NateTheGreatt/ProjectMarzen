/*
  A projectile.
*/

import Entity from 'entity/Entity';
import Trajectory from 'component/Trajectory';

class Bullet extends Entity {
  constructor(game,owner) {
    super(game, 0, 0);

    this.owner = owner;

    // physics
    // this.body.bounce.set(0.5);
    // this.body.gravity.y = 500;
    // this.body.drag.set(100);

    // starts dead because it's pooled
    this.kill();

    this.trajectory = this.addComponent(new Trajectory(game,this));

    this.width = 8;
    this.height = 8;
  }

  fire(source,destination) {
    this.position.copyFrom(source.position);

    this.revive();
    this.lifespan = 1000;

    let angle = this.game.math.angleBetweenPoints(source.position, destination.position);

    this.trajectory.set(angle,200);

    return this;
  }

}

export default Bullet;
