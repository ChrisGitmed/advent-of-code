import { test, expect } from '@jest/globals';

import { input } from './input.js';
import {
  solutionOne,
  solutionTwo,
} from './solutions.js';



/// SOLUTION 1
test('Should return the sum of all engine parts', () => {
  const input = [
    '467..114..',
    '...*......',
    '..35..633.',
    '......#...',
    '617*......',
    '.....+.58.',
    '..592.....',
    '......755.',
    '...$.*....',
    '.664.598..',
  ];
  expect(solutionOne(input)).toBe(4361);
});



test('Should return the sum of all engine parts', () => {
  expect(solutionOne(input)).toBe(527144);
});



/// SOLUTION 2
test('Should return the power of the minimum dice required', () => {
  const input = [
    '467..114..',
    '...*......',
    '..35..633.',
    '......#...',
    '617*......',
    '.....+.58.',
    '..592.....',
    '......755.',
    '...$.*....',
    '.664.598..',
  ];
  expect(solutionTwo(input)).toBe(467835);
});



test('Should return the power of the minimum dice required', () => {
  expect(solutionTwo(input)).toBe(81463996);
});
