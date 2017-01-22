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
    return new Promise((reject, resolve) => {
      if (!(items instanceof Array))
        this.debug.error(errors.MUST_BE_ARRAY);

      let promises = items.map((item) => {
        return this.addItem(item);
      });

      Promise.all(promises).then(() => {
        resolve();
      }).catch(() => {
        reject();
      });
    });
  }

  addItem(item) {
    return new Promise((reject, resolve) => {
      this._items.push(this._importer.transform(item));
      resolve();
    });
  }

  get items() {
    return this._items;
  }
}
