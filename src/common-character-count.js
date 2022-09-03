const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const a = [...s1];
  const b = [...s2];
  for (let i = 0; i < a.length; i += 1) {
    if (b.includes(a[i])) {
      const index = b.indexOf(a[i]);
      count += 1;
      a.slice(i + 1);
      b.splice(index, 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
