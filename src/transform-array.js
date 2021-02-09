const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //   throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) throw new Error();
  const newArray = arr.concat();

  let i = 0;

  while (i < newArray.length + 1) {
    if (newArray[i] === "--double-next") {
      if (i === arr.length - 1) {
        newArray.splice(i, 1);
      } else {
        newArray.splice(i + 1, 0, newArray[i + 1]);
      }
    }

    if (newArray[i] === "--double-prev") {
      if (i === 0) {
        newArray.splice(i, 1);
        i = 1 - 1;
      } else {
        newArray.splice(i, 0, newArray[i - 1]);
        i = i + 1;
      }
    }

    if (newArray[i] === "--discard-next") {
      if (i === arr.length - 1) {
        newArray.splice(i, 1);
      } else {
        newArray.splice(i + 1, 1);
      }
    }
    if (newArray[i] === "--discard-prev") {
      if (i === 0) {
        newArray.splice(i, 1);
        i = 1 - 1;
      } else {
        newArray.splice(i - 1, 1);
      }
    }
    i = i + 1;
  }
  return newArray.filter(
    (item) =>
      item !== "--double-next" &&
      item !== "--double-prev" &&
      item !== "--discard-next" &&
      item !== "--discard-prev" &&
      item !== undefined
  );
};
