import assert from 'assert';
import Datatube from '../src/index';
import Importer from '../src/importer/importer';
import MemoryStorage from '../src/storage/memory';


describe('Class instantiation', () => {
  describe('Datatube', () => {
    it('should be able to create a Datatube class', () => {
      let inst = new Datatube();
      assert.equal(inst instanceof Datatube, true);
    });
  });

  describe('Importer', () => {
    it('should be able to create an Importer class', () => {
      let inst = new Importer();
      assert.equal(inst instanceof Importer, true);
    });
  });

  describe('MemoryStorage', () => {
    it('should be able to create a MemoryStorage class', () => {
      let inst = new MemoryStorage();
      assert.equal(inst instanceof MemoryStorage, true);
    });
  });
});
