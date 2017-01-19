import assert from 'assert';
import Importer from '../../src/importer/importer';

describe('Importer', () => {
  describe('type checker', () => {
    it('should not be able to check the type when there is no type already set', () => {
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

    it('should be able to check the type of an array', () => {
      let inst = new Importer();
      const arr = [1, 2, 3];
      inst.autoType(arr[1]);
      inst.checkItemsType(arr);
      assert.equal(inst.type, typeof 1);
    });
  });
});
