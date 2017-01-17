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
}
