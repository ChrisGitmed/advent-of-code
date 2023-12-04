/**
 * Solution One
 *
 * @param {string[]} input
 * @returns {number}
 */
const solutionOne = (input) => input.reduce((accum, current) => {
  // Parse the winning and playable numbers into number arrays
  const [, numbers] = current.split(': ');
  const [winningNumberString, playingNumberString] = numbers.replace(/\s\s/g, ' ').split(' | ');
  const winningNumbers = winningNumberString.trim().split(' ');
  const playableNumbers = playingNumberString.trim().split(' ');

  // Calculate the score by determining how many playable numbers are included in the winning number array
  let score = 0;
  playableNumbers.forEach((num) => {
    if (winningNumbers.includes(num)) {
      score = score ? score * 2 : score + 1;
    }
  });

  // Increment
  return accum + score;
}, 0);

// Bonus
/* eslint-disable */
// const solutionOne = (a) => a.reduce((b, c) => {
//   const [e, f] = c.replace(/\s\s/g, ' ').split(': ')[1].split(' | ').map((g) => g.trim().split(' '));
//   return b + f.reduce((j, k) => (e.includes(k) ? j ? j * 2 : j + 1 : j + 0), 0);
// }, 0);
/* eslint-enable */


/**
 * Solution Two
 *
 * @param {string[]} input
 * @returns {number}
 */
const solutionTwo = (input) => {};



export {
  solutionOne,
  solutionTwo,
};
