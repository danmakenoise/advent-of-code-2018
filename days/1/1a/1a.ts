function sumReducer(sum: number, num: number) {
  return sum + num;
}

export default function getFrequency(numbers: number[]) {
  return numbers.reduce(sumReducer, 0);
}
