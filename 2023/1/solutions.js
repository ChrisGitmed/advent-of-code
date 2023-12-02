/**
 *
 * @param {string[]} input
 * @returns {number}
*/
const getCalibrationValue = (input) => input.reduce((prev, current) => {
  const formattedRow = current.replace(/\D/g, '');
  const [firstDigit] = formattedRow;
  const lastDigit = formattedRow.at(-1);
  const stringNum = `${firstDigit}${lastDigit}`;
  const trueValue = parseInt(stringNum);
  return prev + trueValue;
}, 0);



// Bonus one-liner
// const getCalibrationValue = (a) => a.reduce((b, c) => b + parseInt(`${c.replace(/\D/g, '')[0]}${c.replace(/\D/g, '').at(-1)}`), 0);



export { getCalibrationValue };
