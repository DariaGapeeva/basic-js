const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(props) {
    this.alph = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    this.newText = [];
    this.value = props;
  }

  _newTextCreator(str, key) {
    let count = Math.floor(str.length / key.length);
    let addition = str.length % key.length;
    let keyText = "";

    for (let i = 0; i < count; i++) {
      keyText = `${keyText}${key}`;
    }
    keyText = keyText + key.slice(0, addition);
    let result = keyText.toUpperCase().split("");

    return result;
  }

  _crypt(str, key, crypt) {
    if (str === undefined || key === undefined) throw new Error();
    let newStr = str.toUpperCase();
    const keyText = this._newTextCreator(str, key);
    let i = 0;

    while (i < newStr.length) {
      let number;
      if (this.alph.indexOf(newStr[i]) !== -1) {
        if (crypt === "en") {
          number =
            (this.alph.indexOf(newStr[i]) + this.alph.indexOf(keyText[i])) %
            this.alph.length;
          this.newText.push(this.alph[number]);
        }
        if (crypt === "de") {
          number =
            (this.alph.indexOf(newStr[i]) +
              this.alph.length -
              this.alph.indexOf(keyText[i])) %
            this.alph.length;
          this.newText.push(this.alph[number]);
        }
      } else {
        this.newText.push(newStr[i]);
        keyText.splice(i, 0, newStr[i]);
      }
      i = i + 1;
    }
    let result = this.newText;
    this.newText = [];

    return this.value || this.value === undefined
      ? result.join("")
      : result.reverse().join("");
  }

  encrypt(str, key) {
    return this._crypt(str, key, "en");
  }
  decrypt(str, key) {
    return this._crypt(str, key, "de");
  }
}
module.exports = VigenereCipheringMachine;
