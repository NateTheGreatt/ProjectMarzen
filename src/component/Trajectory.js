/*
  Gives an entity a trajectory. Very re-usable
*/

import Component from 'component/Component';

class Trajectory extends Component {
  constructor(game,parent) {
    super(game,parent);
    this.speed = 100;
    this.angle = 0;
  }

  set(angle,speed) {
    this.angle = angle;
    this.speed = speed;
    this.parent.body.velocity.x = this.speed*Math.cos(this.angle);
    this.parent.body.velocity.y = this.speed*Math.sin(this.angle);
  }
}

export default Trajectory;
