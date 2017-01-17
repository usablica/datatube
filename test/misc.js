import assert from 'assert';
import Datatube from '../src/index';
import MemoryImporter from '../src/importer/memory.js';

describe('Class instantiation', () => {
  describe('Datatube', () => {
    it('should be able to create a Datatube class', () => {
      let inst = new Datatube();
      assert.equal(inst instanceof Datatube, true);
    });
  });

  describe('Importer', () => {
    it('should be able to create a MemoryImporter class', () => {
      let inst = new MemoryImporter();
      assert.equal(inst instanceof MemoryImporter, true);
    });
  });
});
