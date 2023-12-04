/**
 * Solution One
 *
 * @param {string[]} input
 * @returns {number}
 */
const solutionOne = (input) => input.reduce((accum, current, idx) => {
  // Use regex to find all number strings in the raw row
  const matches = current.matchAll(/\d+/g);

  // For each match found via regex...
  let rowTotal = 0;
  for (const match of matches) {
    const { 0: value, index: foundIndex } = match;
    const isSymbolRegex = /[*+%@=#&/$-]/g;
    let bordersSymbol = false;

    // Test whether the previous square is a symbol
    const previousSquare = current[foundIndex - 1];
    if (previousSquare) {
      const previousSquareIsSymbol = isSymbolRegex.test(previousSquare);
      if (previousSquareIsSymbol) bordersSymbol = true;
    }

    // Test whether the following square is a symbol
    const followingSquare = current[foundIndex + value.length];
    if (followingSquare) {
      const followingSquareIsSymbol = isSymbolRegex.test(followingSquare);
      if (followingSquareIsSymbol) bordersSymbol = true;
    }

    // Determine which index to start from when checking the rows above and below
    const startingIndex = foundIndex - 1 < 0 ? 0 : foundIndex - 1;
    const endingIndex = foundIndex + value.length + 1;

    // Test whether any of the above squares include a symbol
    const previousRow = input[idx - 1];
    if (previousRow) {
      const topBorderString = previousRow.slice(startingIndex, endingIndex);
      const topBorderIncludesSymbol = isSymbolRegex.test(topBorderString);
      if (topBorderIncludesSymbol) bordersSymbol = true;
    }

    // Test whether any of the below squares include a symbol
    const nextRow = input[idx + 1];
    if (nextRow) {
      const bottomBorderString = nextRow.slice(startingIndex, endingIndex);
      const bottomBorderIncludesSymbol = isSymbolRegex.test(bottomBorderString);
      if (bottomBorderIncludesSymbol) bordersSymbol = true;
    }

    // If any bordering squares are a symbol, increment the running total
    if (bordersSymbol) rowTotal += parseInt(value);
  }
  return accum + rowTotal;
}, 0);

// Bonus
// const solutionOne = (i) => i.reduce((a, b, c) => {
//   let d = 0;
//   for (const e of b.matchAll(/\d+/g)) {
//     const f = e.index;
//     const g = /[*+%@=#&/$-]/g;
//     const h = f - 1 < 0 ? 0 : f - 1;
//     const j = e[0].length;
//     const k = f + j + 1;
//     if (
//       (b[f - 1] && g.test(b[f - 1])) ||
//       (b[f + j] && g.test(b[f + j])) ||
//       (i[c - 1] && g.test(i[c - 1].slice(h, k))) ||
//       (i[c + 1] && g.test(i[c + 1].slice(h, k)))
//     ) d += parseInt(e[0]);
//   }
//   return a + d;
// }, 0);



/**
 * Solution Two
 *
 * @param {string[]} input
 * @returns {number}
 */
const solutionTwo = (input) => {
  const grid = input.map((line) => line.split(''));
  const gearNumbers = {};

  for (let y = 0; y < grid.length; y++) {
    let numString = '';
    let checkNumber = false;
    let gearLocation = null;

    for (let x = 0; x < grid[y].length; x++) {
      const currentSpot = grid[y][x];

      // if current spot is a number and we aren't checking them yet, start checking
      if (!isNaN(currentSpot) && !checkNumber) {
        checkNumber = true;
        numString = '';
        gearLocation = null;
      }

      // if we find a non-number or at end of the row, stop checking and add to sum if needed
      if ((x === grid[y].length - 1 || isNaN(currentSpot)) && checkNumber) {
        if (gearLocation) gearNumbers[gearLocation].push(parseInt(numString + (!isNaN(currentSpot) ? currentSpot : '')));
        checkNumber = false;
      }

      // if we are checking for numbers, add current spot to number and check for '*' around it
      if (checkNumber) {
        numString += currentSpot;

        // check for star
        for (let j = -1; j <= 1; j++) {
          for (let i = -1; i <= 1; i++) {
            if (i === 0 && j === 0) continue;
            if (y + j < 0 || y + j >= grid.length || x + i < 0 || x + i >= grid[y].length) continue;

            const char = grid[y + j][x + i];
            if (char === '*') {
              gearLocation = `${x + i},${y + j}`;
              if (!gearNumbers[gearLocation]) gearNumbers[gearLocation] = [];
            }
          }
        }
      }
    }
  }

  const results = Object.values(gearNumbers).reduce((accum, current) => {
    const amountToIncrement = current.length === 2 ? (current[0] * current[1]) : 0;
    return accum + amountToIncrement;
  }, 0);
  return results;
};

// Bonus
// const solutionTwo = (a) => {
//   const b = a.map((l) => l.split(''));
//   const c = {};
//   for (let d = 0; d < b.length; d++) {
//     let e = '';
//     let f = false;
//     let g = null;
//     for (let h = 0; h < b[d].length; h++) {
//       const i = b[d][h];
//       const j = isNaN(i);
//       if (!j && !f) {
//         f = true;
//         e = '';
//         g = null;
//       }
//       if ((h === b[d].length - 1 || j) && f) {
//         if (g) c[g].push(parseInt(e + (!j ? i : '')));
//         f = false;
//       }
//       if (f) {
//         e += i;
//         for (let k = -1; k <= 1; k++) {
//           for (let l = -1; l <= 1; l++) {
//             if ((!l && !k) || (d + k < 0 || d + k >= b.length || h + l < 0 || h + l >= b[d].length)) continue;
//             if (b[d + k][h + l] === '*') {
//               g = `${h + l},${d + k}`;
//               if (!c[g]) c[g] = [];
//             }
//           }
//         }
//       }
//     }
//   }
//   return Object.values(c).reduce((m, n) => m + (n.length === 2 ? (n[0] * n[1]) : 0), 0);
// };



export {
  solutionOne,
  solutionTwo,
};
