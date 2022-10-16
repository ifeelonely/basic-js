const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect1 = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    let encryptedMessage = "";
    let finalMsg = "";
    let messageArr = message.split("");
    const upperMessage = message.toUpperCase().replace(/[^a-zA-Z]+/g, "");
    let newKey = key
      .replace(/ /g, "")
      .toUpperCase()
      .padEnd(upperMessage.length, key.toUpperCase());

    for (let i = 0; i < upperMessage.length; i++) {
      encryptedMessage += String.fromCharCode(
        ((upperMessage[i].charCodeAt() - 65 + (newKey[i].charCodeAt() - 65)) %
          26) +
          65
      );
    }

    for (let i = 0, j = 0; i < messageArr.length; i++) {
      if (
        messageArr[i].toUpperCase().charCodeAt() < 65 ||
        messageArr[i].toUpperCase().charCodeAt() > 90
      )
        continue;
      else {
        messageArr[i] = encryptedMessage[j];
        j++;
      }
    }
    finalMsg = messageArr.join("");
    if (this.isDirect1 === false) return finalMsg.split("").reverse().join("");
    return finalMsg;
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    let encryptedMessage = "";
    let finalMsg = "";
    let messageArr = message.split("");
    const upperMessage = message.toUpperCase().replace(/[^a-zA-Z]+/g, "");
    let newKey = key
      .replace(/ /g, "")
      .toUpperCase()
      .padEnd(upperMessage.length, key.toUpperCase());

    for (let i = 0; i < upperMessage.length; i++) {
      let temp =
        upperMessage[i].charCodeAt() - 65 - (newKey[i].charCodeAt() - 65);
      encryptedMessage += String.fromCharCode(
        (temp < 0 ? temp + 26 : temp) + 65
      );
    }

    for (let i = 0, j = 0; i < messageArr.length; i++) {
      if (
        messageArr[i].toUpperCase().charCodeAt() < 65 ||
        messageArr[i].toUpperCase().charCodeAt() > 90
      )
        continue;
      else {
        messageArr[i] = encryptedMessage[j];
        j++;
      }
    }
    finalMsg = messageArr.join("");
    if (this.isDirect1 === false) return finalMsg.split("").reverse().join("");
    return finalMsg;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
