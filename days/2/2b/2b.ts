export default function getMatchingId(ids: string[]): string {
  let matchingId = '';
  const stringLength = ids[0].length;

  for (let i = 0; i < stringLength; i++) {
    const removed = ids.map(
      id => `${id.slice(0, i)}${id.slice(i + 1, stringLength)}`
    );

    for (let j = 0; j < removed.length; j++) {
      const id = removed[j];

      for (let k = j + 1; k < removed.length; k++) {
        const idTwo = removed[k];

        if (id === idTwo) {
          matchingId = id;
          break;
        }
      }

      if (matchingId) {
        break;
      }
    }
  }

  return matchingId;
}
