const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let self = this;
    return (
      1 +
      (Array.isArray(arr)
        ? arr.reduce(function (max, item) {
            return Math.max(max, self.calculateDepth(item));
          }, 0)
        : -1)
    );
  }
  //   throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
