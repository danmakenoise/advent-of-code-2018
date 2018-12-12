/* tslint:disable no-console */
import * as path from 'path';
import getChecksum from './2a';
import readFile from './readFile';

const input = path.join(__dirname, 'input.txt');

console.log('2A solution:');
console.log(getChecksum(readFile(input)));
