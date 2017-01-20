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

    items.map((item) => {
      this.addItem(item);
    });
  }

  addItem(item) {
    this._items.push(this._importer.transform(item));
  }

  get items() {
    return this._items;
  }
}
