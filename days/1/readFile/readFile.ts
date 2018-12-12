import * as fs from 'fs';
import * as path from 'path';

function processFile(file: string): number[] {
  const numsAsString = file.split('\n').filter(Boolean);
  return numsAsString.map(numAsString => parseInt(numAsString, 10));
}

export default function readFile(filename: string): number[] {
  const file = fs.readFileSync(filename, 'utf8');
  return processFile(file);
}
