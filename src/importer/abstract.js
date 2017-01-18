import Debug from '../debug'
import {errors} from '../messages.js'

/**
 * Importer abstract class
 */
export default class AbstractImporter {
  constructor() {
    this.debug = new Debug("importer");

    if (new.target === AbstractImporter) {
      this.debug.error(errors.NOT_IMPLEMENTED);
    }
  }

  /**
   * Checks the type of input data and throws TypeError if
   * the given array is not well formed
   *
   * @param {Array} data
   */
  checkType(data) {
    if (!(data instanceof Array)) {
      this.debug.error(errors.MUST_BE_ARRAY);
    }

    let elementType = null;

    for (const d of data) {

      if (elementType === null) {
        elementType = typeof d;
        continue;
      }

      if (typeof d != elementType) {
        this.debug.error(errors.DIFFERENT_DATATYPE);
      }
    }
  }
}
