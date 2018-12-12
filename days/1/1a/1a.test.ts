import getFrequency from './1a';

describe('1A getFrequency()', () => {
  describe('test case one', () => {
    const numbers = [1, 1, 1];

    it('returns the proper frequency', () => {
      expect(getFrequency(numbers)).toBe(3);
    });
  });

  describe('test case two', () => {
    const numbers = [1, 1, -2];

    it('returns the proper frequency', () => {
      expect(getFrequency(numbers)).toBe(0);
    });
  });

  describe('test case three', () => {
    const numbers = [-1, -2, -3];

    it('returns the proper frequency', () => {
      expect(getFrequency(numbers)).toBe(-6);
    });
  });
});
