const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';

  const defaultOptions = {
    repeatTimes: 1,
    separator: '+',
    additionSeparator: '|',
    addition: '',
    additionRepeatTimes: 1,
  };

  for (let key in options) {
    defaultOptions[key] = options[key];
  }

  for (let i = 0; i < defaultOptions.repeatTimes; i += 1) {
    result += str;
    if (defaultOptions.additionRepeatTimes === 1) {
      for (let j = 0; j < defaultOptions.additionRepeatTimes; j += 1) {
        result += defaultOptions.addition;
      }
    } else {
      for (let j = 0; j < defaultOptions.additionRepeatTimes; j += 1) {
        result += defaultOptions.addition + defaultOptions.additionSeparator;
      }
      result = result.slice(0, -defaultOptions.additionSeparator.length);
    }
    result += defaultOptions.separator;
  }
  return result.slice(0, -defaultOptions.separator.length);
}

module.exports = {
  repeater,
};
