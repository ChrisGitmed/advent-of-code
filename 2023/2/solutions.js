/**
 * Solution One
 *
 * @param {string[]} input
 * @returns {number}
 */
const solutionOne = (input) => input.reduce((prev, current) => {
  // Parse the game information from the raw string
  const [gameString, setsString] = current.split(': ');
  const [, gameNumber] = gameString.split(' ');
  const sets = setsString.split('; ');

  // Determine if the game is valid
  let gameIsValid = true;
  const maxRedLimit = 12;
  const maxGreenLimit = 13;
  const maxBlueLimit = 14;
  sets.forEach(((set) => set.split(', ').forEach((draw) => {
    const [num, color] = draw.split(' ');
    if (color === 'red' && num > maxRedLimit) gameIsValid = false;
    else if (color === 'green' && num > maxGreenLimit) gameIsValid = false;
    else if (color === 'blue' && num > maxBlueLimit) gameIsValid = false;
  })));


  // If the game is valid, increment by the game number, else 0
  const valueToIncrement = gameIsValid ? parseInt(gameNumber) : 0;
  return prev + valueToIncrement;
}, 0);

// Bonus
// const solutionOne = (a) => a.reduce((b, c) => {
//   let v = true;
//   const [g, s] = c.split(': ');
//   const [, n] = g.split(' ');
//   s.split('; ')
//     .forEach(((e) => e
//       .split(', ')
//       .forEach((d) => {
//         const [m, o] = d.split(' ');
//         if (o === 'red' && m > 12) v = false;
//         else if (o === 'green' && m > 13) v = false;
//         else if (o === 'blue' && m > 14) v = false;
//       })));
//   return b + (v ? parseInt(n) : 0);
// }, 0);



/**
 * Solution Two
 *
 * @param {string[]} input
 * @returns {number}
 */
const solutionTwo = (input) => input.reduce((prev, current) => {
  const [, setsString] = current.split(': ');
  const sets = setsString.split('; ');

  // Find the largest of each color within all sets of the same game
  let largestRed = -Infinity;
  let largestBlue = -Infinity;
  let largestGreen = -Infinity;
  sets.forEach(((set) => set.split(', ').forEach((draw) => {
    const [num, color] = draw.split(' ');
    const parsedNum = parseInt(num);
    if (color === 'red' && parsedNum > largestRed) largestRed = parsedNum;
    else if (color === 'blue' && parsedNum > largestBlue) largestBlue = parsedNum;
    else if (color === 'green' && parsedNum > largestGreen) largestGreen = parsedNum;
  })));

  // Increment by the power of the three largest color values
  const power = largestRed * largestBlue * largestGreen;
  return prev + power;
}, 0);

// Bonus
// const solutionTwo = (a) => a.reduce((p, c) => {
//   let r = 0;
//   let b = 0;
//   let g = 0;
//   c.split(': ')[1]
//     .split('; ')
//     .forEach(((s) => s
//       .split(', ')
//       .forEach((d) => {
//         const [n, o] = d.split(' ');
//         const p = parseInt(n);
//         if (o === 'red' && p > r) r = p;
//         else if (o === 'blue' && p > b) b = p;
//         else if (o === 'green' && p > g) g = p;
//       })));
//   return p + (r * b * g);
// }, 0);



export {
  solutionOne,
  solutionTwo,
};
