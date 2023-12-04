import { test, expect } from '@jest/globals';

import { input } from './input.js';
import {
  solutionOne,
  solutionTwo,
} from './solutions.js';



/// SOLUTION 1
test('Should return the sum of all valid game numbers', () => {
  const input = [
    'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
    'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
    'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
    'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
    'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
  ];
  expect(solutionOne(input)).toBe(8);
});



test('Should return the sum of all valid game numbers', () => {
  expect(solutionOne(input)).toBe(2449);
});



/// SOLUTION 2
test('Should return the power of the minimum dice required', () => {
  const input = [
    'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
    'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
    'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
    'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
    'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
  ];
  expect(solutionTwo(input)).toBe(2286);
});



test('Should return the power of the minimum dice required', () => {
  expect(solutionTwo(input)).toBe(63981);
});
