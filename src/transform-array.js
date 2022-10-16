const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array))
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  const inputControls = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == inputControls[0]) {
      i++;
      continue;
    }
    if (arr[i] == inputControls[1]) {
      resArr = [...resArr.slice(0, i - 1)];
      continue;
    }
    if (arr[i] == inputControls[2]) {
      arr[i + 1] ? resArr.push(arr[i + 1]) : null;
      continue;
    }
    if (arr[i] == inputControls[3]) {
      if (arr[i - 2] == inputControls[0]) continue;
      resArr[resArr.length - 1] ? resArr.push(resArr[resArr.length - 1]) : null;
      continue;
    }
    resArr.push(arr[i]);
  }
  return resArr;
}

module.exports = {
  transform,
};
