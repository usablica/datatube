import assert from 'assert';
import Importer from '../../src/importer/importer';

describe('Importer', () => {
  describe('checkType', () => {
    it('should not be able to set non-array', () => {
      assert.throws(() => {
        let importer = new Importer();
        importer.checkType(1);
      }, Error);
    });

    it('should not be able to set different data types', () => {
      assert.throws(() => {
        let importer = new Importer();
        importer.checkType([1, 2, "a"]);
      }, Error);
    });
  });
});
