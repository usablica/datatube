import Log from '../log'

/**
 * Importer abstract class
 */
export default class AbstractImporter {
  constructor() {
    this.log = new Log("Importer");

    if (new.target === AbstractImporter) {
      throw TypeError("Not Implemented");
    }
  }

  checkType(data) {
    if (!(data instanceof Array)) {
      throw TypeError('Data must be an Array instance.');
    }

    let elementType = null;

    for (const d of data) {
      if (elementType === null) {
        elementType = typeof d;
      } else {
        if (typeof d != elementType) {
          throw TypeError(
            "One or more elements in the Array doesn't have the same data type."
          );
        }
      }
    }
  }
}
