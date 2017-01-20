import Debug from '../debug.js'
import {errors} from '../messages.js'

export default class AbstractStorage {
  constructor() {
    this.debug = new Debug("storage");

    if (new.target === AbstractStorage) {
      this.debug.error(errors.NOT_IMPLEMENTED);
    }
  }
}
