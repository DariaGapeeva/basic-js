const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(/* sampleActivity */) {
  //   throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (typeof sampleActivity !== "string") return false;
  if (Number.isNaN(Number(sampleActivity))) return false;

  return Math.ceil(
    (HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / Number(sampleActivity))) /
      Math.LN2
  );
};
