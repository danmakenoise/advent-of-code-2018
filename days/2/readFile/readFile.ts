import * as fs from 'fs';
import * as path from 'path';

function processFile(file: string): string[] {
  return file.split('\n').filter(Boolean);
}

export default function readFile(filename: string): string[] {
  const file = fs.readFileSync(filename, 'utf8');
  return processFile(file);
}
