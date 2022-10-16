const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let mainStr = "";
  let additionalStr = "";
  !options.separator ? (options.separator = "+") : 0;
  !options.additionSeparator ? (options.additionSeparator = "|") : 0;

  if (options.additionRepeatTimes) {
    for (let i = 0; i < options?.additionRepeatTimes; i++) {
      additionalStr += options?.addition;
      if (i < options.additionRepeatTimes - 1)
        additionalStr += options?.additionSeparator;
    }
  }

  if (options.repeatTimes) {
    if (!options.additionRepeatTimes && options.addition)
      additionalStr = options.addition;
    for (let i = 0; i < options?.repeatTimes; i++) {
      mainStr += str + additionalStr;
      if (i < options.repeatTimes - 1) mainStr += options?.separator;
    }
  }

  if (!options.repeatTimes && !options.additionRepeatTimes)
    return str + options.addition;

  return mainStr;
}

module.exports = {
  repeater,
};
