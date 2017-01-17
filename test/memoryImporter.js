import assert from 'assert';
import MemoryImporter from '../src/importer/memory.js';

describe('MemoryImporter', () => {
  it('should be able to set data', () => {
    let memoryImporter = new MemoryImporter();
    memoryImporter.data = [1, 2, 3];
    assert.deepEqual(memoryImporter.data, [1, 2, 3]);
  });

  it('should not be able to set non-array', () => {
    assert.throws(() => {
      let memoryImporter = new MemoryImporter();
      memoryImporter.data = 1;
    }, TypeError, 'Property does not exist in model schema.');
  });

  it('should not be able to set different data types', () => {
    assert.throws(() => {
      let memoryImporter = new MemoryImporter();
      memoryImporter.data = [1, 2, "a"];
    }, TypeError, 'Property does not exist in model schema.');
  });
});
