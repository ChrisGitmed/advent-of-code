import { test, expect } from '@jest/globals';

import { input } from './input.js';
import {
  solutionOne,
  solutionTwo,
} from './solutions.js';



/// SOLUTION 1
test.only('Should return the score of winning numbers', () => {
  const input = [
    'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
    'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
    'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
    'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
    'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
    'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11',
  ];
  expect(solutionOne(input)).toBe(13);
});



test.only('Should return the score of winning numbers', () => {
  expect(solutionOne(input)).toBe(15268);
});



// /// SOLUTION 2
// test('Should...', () => {
//   const input = [

//   ];
//   expect(solutionTwo(input)).toBe(0);
// });



// test('Should...', () => {
//   expect(solutionTwo(input)).toBe(0);
// });
