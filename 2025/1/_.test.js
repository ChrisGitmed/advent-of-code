import { test, expect } from '@jest/globals';

import { input } from './input.js';
import {
  solutionOne,
  // solutionTwo,
} from './solutions.js';



/// SOLUTION 1
test('Should return the total calibration value', () => {
  const input = [
    'L68',
    'L30',
    'R48',
    'L5',
    'R60',
    'L55',
    'L1',
    'L99',
    'R14',
    'L82',
  ];
  expect(solutionOne(input)).toBe(3);
});

test('Should return the total calibration value', () => {
  expect(solutionOne(input)).toBe(989);
});



/// SOLUTION 2
// test('Should return the total calibration value', () => {
//   const input = [
//     'two1nine',
//     'eightwothree',
//     'abcone2threexyz',
//     'xtwone3four',
//     '4nineeightseven2',
//     'zoneight234',
//     '7pqrstsixteen',
//   ];
//   expect(solutionTwo(input)).toBe(281);
// });



// test('Should return the total calibration value', () => {
//   expect(solutionTwo(input)).toBe(55614);
// });
