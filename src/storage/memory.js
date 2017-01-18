import AbstractStorage from './abstract'

export default class MemoryStorage extends AbstractStorage {
  constructor() {
    super();
  }

  set data(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }
}
