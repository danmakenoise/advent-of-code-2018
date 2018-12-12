export default function getFirstRepeatedFrequency(numbers: number[]) {
  let firstRepeated;
  let sum = 0;

  const seen: { [key: string]: boolean } = {
    0: true
  };

  while (firstRepeated === undefined) {
    for (const num of numbers) {
      sum += num;

      if (seen[sum]) {
        firstRepeated = sum;
        break;
      }

      seen[sum] = true;
    }
  }

  return firstRepeated;
}
