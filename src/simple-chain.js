const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainArray: [],

  getLength() {
    return this.charinArray.length;
  },
  addLink(value) {
    if (value === undefined) this.chainArray.push(`( )`);
    else this.chainArray.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!(position - 1 in this.chainArray)) {
      this.chainArray = [];
      throw new Error("You can't remove incorrect link!");
    } else
      this.chainArray = this.chainArray
        .slice(0, position - 1)
        .concat(this.chainArray.slice(position));
    return this;
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    const finalArr = [].concat(this.chainArray).join("~~");
    this.chainArray = [];
    return finalArr;
  },
};

module.exports = {
  chainMaker,
};
