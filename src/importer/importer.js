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
   * @param {Mixed} item
   * @return {Object}
   */
  transform(item) {
    if (item == null)
      this.debug.error(errors.ITEM_IS_NULL);

    this.checkItemType(item);

    let obj = {
      _id: this.id,
      _item: item
    };

    // next id
    this.inc();

    return obj;
  }
}
