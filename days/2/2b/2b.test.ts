import getMatchingId from './2b';

describe('2B getMatchingId()', () => {
  describe('test case one', () => {
    const ids = ['abcdef', 'abefgh', 'abddef'];

    it('returns the proper checksum', () => {
      expect(getMatchingId(ids)).toBe('abdef');
    });
  });
});
