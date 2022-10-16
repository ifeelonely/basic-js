const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    !parseFloat(sampleActivity) ||
    !sampleActivity ||
    typeof sampleActivity != "string"
  )
    return false;
  const key = 0.693 / HALF_LIFE_PERIOD;
  const years = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / key);
  if (years < 0 || !years) return false;
  return years;
}
module.exports = {
  dateSample,
};
