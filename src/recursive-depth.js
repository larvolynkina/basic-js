const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(array) {
    let deep = 1;
    if (array.every((value) => !Array.isArray(value))) {
      return deep;
    }
    return (deep += this.calculateDepth(array.flat(1)));
  }
}

module.exports = {
  DepthCalculator,
};
