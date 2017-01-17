import assert from 'assert';
import MemoryImporter from '../src/importer/memory.js';

describe('MemoryImporter', () => {
  it('should be able to set data', () => {
    let memoryImporter = new MemoryImporter();
    memoryImporter.data = [1, 2, 3];
    assert.deepEqual(memoryImporter.data, [1, 2, 3]);
  });
});
