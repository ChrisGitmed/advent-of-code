/**
 * Solution One
 *
 * @param {string[]} input
 * @returns {number}
 */
const solutionOne = (input) => input.reduce((prev, current) => {
  const formattedRow = current.replace(/\D/g, '');
  const [firstDigit] = formattedRow;
  const lastDigit = formattedRow.at(-1);
  const stringNum = `${firstDigit}${lastDigit}`;
  const trueValue = parseInt(stringNum);
  return prev + trueValue;
}, 0);

// Bonus one-liner
// const solutionOne = (a) => a.reduce((b, c) => b + parseInt(`${c.replace(/\D/g, '')[0]}${c.replace(/\D/g, '').at(-1)}`), 0);



/**
 * Solution Two
 *
 * @param {string[]} input
 * @returns {number}
 */
const solutionTwo = (input) => input.reduce((prev, current) => {
  const { 0: firstValue, length, [length - 1]: lastValue } = Array
    .from(current.matchAll(/(?=((\d)|one|two|three|four|five|six|seven|eight|nine))/gm))
    .map((match) => match[1]);
  const valueHash = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  return prev + parseInt(`${valueHash[firstValue] || firstValue}${valueHash[lastValue] || lastValue}`);
}, 0);



export {
  solutionOne,
  solutionTwo,
};
