const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  chain: '',
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (
      value ||
      value === null ||
      value === 0 ||
      Number.isNaN(value) ||
      value === false
    ) {
      this.arr.push(String(value));
    } else {
      this.arr.push(' ');
    }
    return this;
  },
  removeLink(position) {
    if (position && Number.isInteger(position) && this.arr[position - 1]) {
      this.arr.splice(position - 1, 1);
    } else {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    this.chain = this.arr.map((item) => `( ${item} )`).join('~~');
    this.arr = [];
    return this.chain;
  },
};

module.exports = {
  chainMaker,
};
