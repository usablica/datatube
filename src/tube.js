import Debug from './debug'
import MemoryStorage from './storage/memory'

export default class Tube {
  constructor(name = null, storage = MemoryStorage) {
    this.debug = new Debug("Tube");
    this._storage = new storage();
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  addItems(items) {
    return this._storage.addItems(items);
  }

  addItem(item) {
    return this._storage.addItem(item);
  }

  get items() {
    return this._storage.items;
  }
}
