function charCountReducer(accum: { [key: string]: number }, char: string) {
  return {
    ...accum,
    [char]: (accum[char] || 0) + 1
  };
}

function idReducer(accum: [number, number], id: string): [number, number] {
  const [twos, threes] = accum;

  const charCounts: { [key: string]: number } = id
    .split('')
    .reduce(charCountReducer, {});

  const countChars: { [key: number]: number } = {};
  Object.keys(charCounts).forEach(char => {
    const count = charCounts[char];
    countChars[count] = (countChars[count] || 0) + 1;
  });

  return [twos + (countChars[2] ? 1 : 0), threes + (countChars[3] ? 1 : 0)];
}

export default function getChecksum(ids: string[]): number {
  const [twos, threes] = ids.reduce(idReducer, [0, 0]);
  return twos * threes;
}
