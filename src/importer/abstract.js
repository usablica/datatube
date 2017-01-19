import Debug from '../debug'
import {errors,warnings} from '../messages.js'

/**
 * Importer abstract class
 */
export default class AbstractImporter {
  constructor() {
    this.debug = new Debug("importer");
    this._type = null;

    if (new.target === AbstractImporter) {
      this.debug.error(errors.NOT_IMPLEMENTED);
    }
  }

  set type(type) {
    this._type = type;
  }

  get type() {
    return this._type;
  }

  autoType(item) {
    if (this.type) this.debug.warning(warnings.ALREADY_HAS_TYPE);

    this.type = typeof item;
  }

  /**
   * Checks the type of input data and throws TypeError if
   * the given array is not well formed
   *
   * @param {array} items
   */
  checkItemsType(items) {
    if (!(items instanceof Array))
      this.debug.error(errors.MUST_BE_ARRAY);

    for (const item of items) {
      this.checkItemType(item)
    }
  }

  /**
   * Checks the type of single item
   *
   * @param {mixed} item
   */
  checkItemType(item) {
    if (this.type === null)
      this.debug.error(errors.CANNOT_PREDICT_DATATYPE);

    if (typeof item != this.type)
      this.debug.error(errors.DIFFERENT_DATATYPE);
  }
}
