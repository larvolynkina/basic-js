const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {
  constructor(value) {
    this.value = value;
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    const string = str.toUpperCase();
    let keyword = key.toUpperCase();
    if (string.length > keyword.length) {
      keyword = keyword
        .repeat(Math.ceil(string.length / keyword.length))
        .slice(0, string.length);
    }
    let result = '';
    let count = 0;
    for (let i = 0; i < string.length; i += 1) {
      if (alphabet.includes(string[i])) {
        result +=
          alphabet[
            (alphabet.indexOf(string[i]) +
              alphabet.indexOf(keyword[i - count])) %
              alphabet.length
          ];
      } else {
        result += string[i];
        count += 1;
      }
    }
    if (this.value === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    const string = str.toUpperCase();
    let keyword = key.toUpperCase();
    if (string.length > keyword.length) {
      keyword = keyword
        .repeat(Math.ceil(string.length / keyword.length))
        .slice(0, string.length);
    }
    let result = '';
    let count = 0;
    for (let i = 0; i < string.length; i += 1) {
      if (alphabet.includes(string[i])) {
        result +=
          alphabet[
            (alphabet.indexOf(string[i]) -
              alphabet.indexOf(keyword[i - count]) +
              alphabet.length) %
              alphabet.length
          ];
      } else {
        result += string[i];
        count += 1;
      }
    }
    if (this.value === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
