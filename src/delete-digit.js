const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const res = [];
  const a = [...n.toString()];

  for (let i = 0; i < a.length; i += 1) {
    const b = a.slice();
    b.splice(i, 1);
    res.push(+b.join(''));
  }
  const index = res.indexOf(Math.max.apply(null, res));

  a.splice(index, 1);

  return Number(a.join(''));
}

module.exports = {
  deleteDigit,
};
