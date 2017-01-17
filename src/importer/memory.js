import AbstractImporter from './abstract'

export default class MemoryImporter extends AbstractImporter {
  constructor() {
    super();
  }

  set data(data) {
    this.checkType(data);
    this._data = data;
  }

  get data() {
    return this._data;
  }
}
