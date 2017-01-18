import Debug from '../debug.js'
import {errors} from '../messages.js'

export default class AbstractStorge {
  constructor() {
    this.debug = new Debug("storage");

    if (new.target === AbstractImporter) {
      this.debug.error(errors.NOT_IMPLEMENTED);
    }
  }
}
