import Debug from './debug'
import MemoryStorage from './storage/memory'

export default class Tube {
  constructor(tube = null, storage = MemoryStorage) {
    this.debug = new Debug("Tube");
    this._storage = new storage();
    this.tube = tube;
  }

  get tube() {
    return this._tube;
  }

  set tube(tube) {
    this._tube = tube;
  }

  addItems(items) {
    this._storage.addItems(items);
    return this;
  }

  addItem(item) {
    this._storage.addItem(item);
    return this;
  }

  get items() {
    return._storage.items;
  }
}
