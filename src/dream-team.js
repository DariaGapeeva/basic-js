const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //   throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;
  let result = members.map((item) =>
    typeof item === "string" ? item.trim()[0].toUpperCase() : ""
  );

  if (result.join("") === "") return false;
  return result.sort().join("");
};
