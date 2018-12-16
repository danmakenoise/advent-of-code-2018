import * as path from 'path';
import readFile from './readFile';

describe('readFile', () => {
  it('is a function', () => {
    expect(typeof readFile).toBe('function');
  });

  it('reads files properly', () => {
    expect(readFile(path.join(__dirname, 'test.txt'))).toEqual([
      {
        fromLeft: 1,
        fromTop: 3,
        height: 4,
        id: 1,
        width: 4
      },
      {
        fromLeft: 3,
        fromTop: 1,
        height: 4,
        id: 2,
        width: 4
      },
      {
        fromLeft: 5,
        fromTop: 5,
        height: 2,
        id: 3,
        width: 2
      }
    ]);
  });
});
