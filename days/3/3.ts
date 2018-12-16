/* tslint:disable no-console */
import * as path from 'path';
import getCountOverlapping from './3a';
import readFile from './readFile';

const input = path.join(__dirname, 'input.txt');

console.log('3A solution:');
console.log(getCountOverlapping(readFile(input)));
