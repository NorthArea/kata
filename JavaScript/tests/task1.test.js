const task1 = require('../src/task1');

describe('task 1 solver', () => {
  it('should return x2', () => {
    expect(task1.doubling(7)).toEqual(14);
  });
  it('should return x2', () => {
    expect(task1.doubling(8)).toEqual(16);
  });
  it('should return array with x2', () => {
    expect(task1.doubling([1,2,3])).toEqual([2,4,6]);
  });
})