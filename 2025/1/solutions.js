/**
 * Solution One
 *
 * @param {string[]} input
 * @returns {number}
 */
export const solutionOne = (input) => {
  // Define a circular map from 0-99
  const dict = [];
  for (let i = 0; i < 100; i += 1) {
    dict.push(i);
  }

  // Create a variable to track the zero counts
  let zeroCount = 0;

  // The dial starts pointing at 50
  let dialCurrentPosition = 50;

  // For each line
  for (const row of input) {
    // Extract the direction and movement count from the raw string
    const direction = row.substring(0, 1);
    const moveCount = row.substring(1);
    const moveNumber = Number(moveCount);

    // Conditionally move the dial either left or right
    if (direction === 'L') {
      dialCurrentPosition -= (moveNumber % 100);
      if (dialCurrentPosition < 0) dialCurrentPosition += 100;
    } else {
      dialCurrentPosition += (moveNumber % 100);
      if (dialCurrentPosition >= 100) dialCurrentPosition -= 100;
    }

    // If the dial is at 0, add one to our answer
    if (dialCurrentPosition === 0) zeroCount += 1;
  }

  return zeroCount;
};
