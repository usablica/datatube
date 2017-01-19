import {errors} from '../messages.js'
import AbstractImporter from './abstract.js'

/**
 * Importer class
 */
export default class Importer extends AbstractImporter {
  constructor() {
    super();
  }

  /**
   * Transforms the given item to Datatube item format
   *
   * @param {mixed} item
   */
  transform(item) {
    if (item == null)
      this.debug.error(errors.ITEM_IS_NULL);

    this._importer.checkItemType(item);

    return {
      _item: item
    };
  }
}
