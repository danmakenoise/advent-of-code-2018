import * as fs from 'fs';
import * as path from 'path';

export interface InterfaceClaim {
  id: number;
  fromLeft: number;
  fromTop: number;
  height: number;
  width: number;
}

function processLine(line: string): InterfaceClaim {
  const numStrings = line.match(/\d+/g) || [];
  const nums = numStrings.map(Number);
  const [id, fromLeft, fromTop, width, height] = nums;

  return {
    fromLeft,
    fromTop,
    height,
    id,
    width
  };
}

function processFile(file: string): InterfaceClaim[] {
  return file
    .split('\n')
    .filter(Boolean)
    .map(processLine);
}

export default function readFile(filename: string): InterfaceClaim[] {
  const file = fs.readFileSync(filename, 'utf8');
  return processFile(file);
}
