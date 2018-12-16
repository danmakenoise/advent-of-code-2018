import getCountOverlapping from './3a';

describe('3A getCountOverlapping()', () => {
  describe('test case one', () => {
    const claims = [
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
    ];

    it('returns the proper checksum', () => {
      expect(getCountOverlapping(claims)).toBe(4);
    });
  });
});
