import getChecksum from './2a';

describe('2A getChecksum()', () => {
  describe('test case one', () => {
    const ids = [
      'abcdef',
      'bababc',
      'abbcde',
      'abcccd',
      'aabcdd',
      'abcdee',
      'ababab'
    ];

    it('returns the proper checksum', () => {
      expect(getChecksum(ids)).toBe(12);
    });
  });
});
