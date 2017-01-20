import Debug from '../debug'
import {errors,warnings} from '../messages.js'

/**
 * Importer abstract class
 */
export default class AbstractImporter {
  constructor() {
    this.debug = new Debug("importer");
    // data type of the Importer class (each item)
    this._type = null;
    // to generate unique IDs
    this._inc = 0;

    if (new.target === AbstractImporter) {
      this.debug.error(errors.NOT_IMPLEMENTED);
    }
  }

  inc() {
    this._inc++;
  }

  set type(type) {
    this._type = type;
  }

  get type() {
    return this._type;
  }

  get id() {
    // it should be a combination of incremental ID and a random string
    const now = +new Date();
    return parseInt(now + "" + this._inc, 10);
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
      this.autoType(item);

    if (typeof item != this.type)
      this.debug.error(errors.DIFFERENT_DATATYPE);

    return true;
  }
}
