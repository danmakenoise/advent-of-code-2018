import getFirstRepeatedFrequency from './1b';

describe('1B getFirstRepeatedFrequency()', () => {
  describe('test case one', () => {
    const numbers = [1, -1];

    it('returns the proper frequency', () => {
      expect(getFirstRepeatedFrequency(numbers)).toBe(0);
    });
  });

  describe('test case two', () => {
    const numbers = [3, 3, 4, -2, -4];

    it('returns the proper frequency', () => {
      expect(getFirstRepeatedFrequency(numbers)).toBe(10);
    });
  });

  describe('test case three', () => {
    const numbers = [-6, 3, 8, 5, -6];

    it('returns the proper frequency', () => {
      expect(getFirstRepeatedFrequency(numbers)).toBe(5);
    });
  });

  describe('test case four', () => {
    const numbers = [7, 7, -2, -7, -4];

    it('returns the proper frequency', () => {
      expect(getFirstRepeatedFrequency(numbers)).toBe(14);
    });
  });
});
