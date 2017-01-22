import assert from 'assert';
import MemoryStorage from '../../src/storage/memory';

describe('MemoryStorage', () => {
  describe('Adding item(s)', () => {
    it('should be able to add a new item', () => {
      let memoryStorage = new MemoryStorage();
      memoryStorage.addItem(1).then(() => {}).catch(() => {});
      assert.equal(memoryStorage.items.length, 1);
    });

    it('should be able to add an array of items', () => {
      let memoryStorage = new MemoryStorage();
      memoryStorage.addItems([1,2,3,4]).then(() => {}).catch(() => {});
      assert.equal(memoryStorage.items.length, 4);
    });

    it('should not be able to add an array of different data types', () => {
      let memoryStorage = new MemoryStorage();
      memoryStorage.addItems([1,2,"a",4]).then(() => {}).catch(() => {});
      assert.equal(memoryStorage.items.length, 3);
    });
  });
});
