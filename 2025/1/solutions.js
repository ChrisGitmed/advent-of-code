/**
 * Solution One
 *
 * @param {string[]} input
 * @returns {number}
 */
export const solutionOne = (input) => {
  let password = 0;
  let currentDialPosition = 50;

  for (const row of input) {
    const moveNumber = Number(row.substring(1));
    if (row.substring(0, 1) === 'L') {
      currentDialPosition -= (moveNumber % 100);
      if (currentDialPosition < 0) currentDialPosition += 100;
    } else {
      currentDialPosition = (currentDialPosition + moveNumber) % 100;
    }
    if (currentDialPosition === 0) password += 1;
  }

  return password;
};
