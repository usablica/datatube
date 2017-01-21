import Debug from './debug'
import Tube from './tube'

export default class Datatube {
  constructor() {
    this.debug = new Debug("Datatube");
    // master tube
    return this.tube();
  }

  tube(name = null) {
    return new Tube(name);
  }
}
