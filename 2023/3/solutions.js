/**
 * Solution One
 *
 * @param {string[]} input
 * @returns {number}
 */
// const solutionOne = (input) => input.reduce((accum, current, idx) => {
//   // Use regex to find all number strings in the raw row
//   const matches = current.matchAll(/\d+/g);

//   // For each match found via regex...
//   let rowTotal = 0;
//   for (const match of matches) {
//     const { 0: value, index: foundIndex } = match;
//     const isSymbolRegex = /[*+%@=#&/$-]/g;
//     let bordersSymbol = false;

//     // Test whether the previous square is a symbol
//     const previousSquare = current[foundIndex - 1];
//     if (previousSquare) {
//       const previousSquareIsSymbol = isSymbolRegex.test(previousSquare);
//       if (previousSquareIsSymbol) bordersSymbol = true;
//     }

//     // Test whether the following square is a symbol
//     const followingSquare = current[foundIndex + value.length];
//     if (followingSquare) {
//       const followingSquareIsSymbol = isSymbolRegex.test(followingSquare);
//       if (followingSquareIsSymbol) bordersSymbol = true;
//     }

//     // Determine which index to start from when checking the rows above and below
//     const startingIndex = foundIndex - 1 < 0 ? 0 : foundIndex - 1;
//     const endingIndex = foundIndex + value.length + 1;

//     // Test whether any of the above squares include a symbol
//     const previousRow = input[idx - 1];
//     if (previousRow) {
//       const topBorderString = previousRow.slice(startingIndex, endingIndex);
//       const topBorderIncludesSymbol = isSymbolRegex.test(topBorderString);
//       if (topBorderIncludesSymbol) bordersSymbol = true;
//     }

//     // Test whether any of the below squares include a symbol
//     const nextRow = input[idx + 1];
//     if (nextRow) {
//       const bottomBorderString = nextRow.slice(startingIndex, endingIndex);
//       const bottomBorderIncludesSymbol = isSymbolRegex.test(bottomBorderString);
//       if (bottomBorderIncludesSymbol) bordersSymbol = true;
//     }

//     // If any bordering squares are a symbol, increment the running total
//     if (bordersSymbol) rowTotal += parseInt(value);
//   }
//   return accum + rowTotal;
// }, 0);

// Bonus
const solutionOne = (i) => i.reduce((a, b, c) => {
  let d = 0;
  for (const e of b.matchAll(/\d+/g)) {
    const f = e.index;
    const g = /[*+%@=#&/$-]/g;
    const h = f - 1 < 0 ? 0 : f - 1;
    const j = e[0].length;
    const k = f + j + 1;
    if (
      (b[f - 1] && g.test(b[f - 1])) ||
      (b[f + j] && g.test(b[f + j])) ||
      (i[c - 1] && g.test(i[c - 1].slice(h, k))) ||
      (i[c + 1] && g.test(i[c + 1].slice(h, k)))
    ) d += parseInt(e[0]);
  }
  return a + d;
}, 0);



/**
 * Solution Two
 *
 * @param {string[]} input
 * @returns {number}
 */
const solutionTwo = (input) => input.reduce((prev, current) => {
}, 0);

// Bonus



export {
  solutionOne,
  solutionTwo,
};
