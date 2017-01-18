import Debug from './debug'

export default class Datatube {
  constructor(tube = null) {
    this.debug = new Debug("Datatube");
    this.tube = tube;
  }

  get tube() {
    return this._tube;
  }

  set tube(tube) {
    this._tube = tube;
  }
}
