/* tslint:disable no-console */
import * as path from 'path';
import getFrequency from './1a';
import readFile from './readFile';

const input = path.join(__dirname, 'input.txt');

console.log('1A solution:');
console.log(getFrequency(readFile(input)));
