import AbstractStorage from './abstract'
import {errors,warnings} from '../messages.js'
import Importer from '../importer/importer'

export default class MemoryStorage extends AbstractStorage {
  constructor() {
    super();
    this._items = [];
    this._importer = new Importer();
  }

  removeItems() {
    this._items = [];
  }

  addItems(items) {
    if (!(items instanceof Array))
      this.debug.error(errors.MUST_BE_ARRAY);

    for (item of items) {
      this.addItem(item);
    }
  }

  addItem(item) {
    if (this.items.length == 0)
      this.debug.error(errors.ITEMS_IS_EMPTY);

    this._items.append(this._importer.transform(items));
  }

  get items() {
    return this._items;
  }
}
