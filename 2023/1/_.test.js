import { test, expect } from '@jest/globals';

import { input } from './input.js';
import {
  solutionOne,
  solutionTwo,
} from './solutions.js';



/// SOLUTION 1
test('Should return the total calibration value', () => {
  const input = [
    '1abc2',
    'pqr3stu8vwx',
    'a1b2c3d4e5f',
    'treb7uchet',
  ];
  expect(solutionOne(input)).toBe(142);
});



test('Should return the total calibration value', () => {
  expect(solutionOne(input)).toBe(55488);
});



/// SOLUTION 2
test('Should return the total calibration value', () => {
  const input = [
    'two1nine',
    'eightwothree',
    'abcone2threexyz',
    'xtwone3four',
    '4nineeightseven2',
    'zoneight234',
    '7pqrstsixteen',
  ];
  expect(solutionTwo(input)).toBe(281);
});



test('Should return the total calibration value', () => {
  expect(solutionTwo(input)).toBe(55614);
});
