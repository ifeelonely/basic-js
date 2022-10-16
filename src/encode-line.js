const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let counter = 0;
    let curChar;
    let finalStr = '';
      for(let i = 0, j = 0; i < str.length; i++) {
        curChar = str[i];
          while(curChar == str[j]) {
            counter++;
            j++;
          }
          i = j - 1 ;
          counter > 1 ?  finalStr += `${counter}${str[i]}` : finalStr += str[i];
          counter = 0;
      }
    return finalStr;
}

module.exports = {
  encodeLine
};
