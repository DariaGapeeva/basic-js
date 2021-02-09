const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const addition =
    options.addition !== undefined ? String(options.addition) : "";
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const separator = options.separator || "+";
  const additionSeparator = options.additionSeparator || "|";

  let strInner = new Array(additionRepeatTimes)
    .fill(`${String(addition)}${additionSeparator}`)
    .join("")
    .slice(0, -additionSeparator.length);

  let strResult = new Array(repeatTimes)
    .fill(`${String(str)}${strInner}${separator}`)
    .join("")
    .slice(0, -separator.length);

  return strResult;
  //   throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
