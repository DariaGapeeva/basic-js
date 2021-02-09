const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //   throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let count = 0;
  for (let item of matrix) {
    for (let elem of item) {
      if (elem === "^^") {
        count = count + 1;
      }
    }
  }
  return count;
};
