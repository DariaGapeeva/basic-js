const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    const length = this.arr.length;
    this.arr = [];
    return length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here

    if (value === undefined) {
      this.arr.push(`~()~`);
    } else {
      this.arr.push(`~( ${String(value)} )~`);
    }

    return this;
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here

    if (position - Math.floor(position) !== 0) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.arr.reverse();
    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.arr[0] = this.arr[0].slice(1);
    this.arr[this.arr.length - 1] = this.arr[this.arr.length - 1].slice(0, -1);
    const arrNew = this.arr.join("");
    this.arr = [];
    return arrNew;
  },
};

module.exports = chainMaker;
