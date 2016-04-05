import Component from 'component/Component';

class SpellManager extends Component {
  constructor(game,parent) {
    super(game,parent);
    this.chain = [];
  }

  queue(chain) {
    this.chain = chain;
  }

  cast() {
    let spell = this.chain.unshift();
    spell.cast();
  }
}
