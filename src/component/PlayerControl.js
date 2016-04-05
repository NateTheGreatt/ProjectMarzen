/*
  Handles player movement control bindings.
*/

import Component from 'component/Component';

class PlayerControl extends Component {
  constructor(game,parent) {
    super(game,parent);

    this.up = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.down = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.left = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.right = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.shift = this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
    this.oneKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    this.twoKey = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    this.threeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.THREE);

    this.onAttack = new Phaser.Signal();
  }

  update() {
    if(this.up.isDown) this.parent.body.velocity.y = -this.parent.speed;
    if(this.down.isDown)this.parent.body.velocity.y = this.parent.speed;
    if(!this.down.isDown && !this.up.isDown) this.parent.body.velocity.y = 0;
    if(this.left.isDown)this.parent.body.velocity.x = -this.parent.speed;
    if(this.right.isDown)this.parent.body.velocity.x = this.parent.speed;
    if(!this.left.isDown && !this.right.isDown) this.parent.body.velocity.x = 0;
    if(this.game.input.activePointer.leftButton.isDown) this.onAttack.dispatch({key: 0});
    if(this.oneKey.isDown) this.onAttack.dispatch({key: 1});
    if(this.twoKey.isDown) this.onAttack.dispatch({key: 2});
    if(this.threeKey.isDown) this.onAttack.dispatch({key: 3});
  }
}

export default PlayerControl;
