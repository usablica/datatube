import Log from './log'

export default class Datatube {
  constructor(tube = null) {
    this.log = new Log("Datatube");
    this.tube = tube;
  }

  get tube() {
    return this._tube;
  }

  set tube(tube) {
    this._tube = tube;
  }
}
