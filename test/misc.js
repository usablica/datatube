import assert from 'assert';
import Datatube from '../src/index';
import Importer from '../src/importer/importer.js';

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
});
