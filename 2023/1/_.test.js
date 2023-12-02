import { test, expect } from '@jest/globals';

import { input } from './input.js';
import { getCalibrationValue } from './solutions.js';



test('Should return the total calibration value...', () => {
  const input = [
    '1abc2',
    'pqr3stu8vwx',
    'a1b2c3d4e5f',
    'treb7uchet',
  ];
  expect(getCalibrationValue(input)).toBe(142);
});



test('Should return the total calibration value...', () => {
  expect(getCalibrationValue(input)).toBe(55488);
});
