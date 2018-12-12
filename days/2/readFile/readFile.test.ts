import * as path from 'path';
import readFile from './readFile';

describe('readFile', () => {
  it('is a function', () => {
    expect(typeof readFile).toBe('function');
  });

  it('reads files properly', () => {
    expect(readFile(path.join(__dirname, 'test.txt'))).toEqual([
      'abc',
      'def',
      'ghi'
    ]);
  });
});
