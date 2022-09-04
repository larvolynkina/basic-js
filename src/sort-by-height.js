const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];
  arr.forEach((item, index) => {
    if (item === -1) {
      indexes.push(index);
    }
  });
  const sortArr = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  for (let i = 0; i < indexes.length; i += 1) {
    sortArr.splice(indexes[i], 0, -1);
  }
  return sortArr;
}

module.exports = {
  sortByHeight,
};
