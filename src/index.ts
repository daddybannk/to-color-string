const MD5 = require("md5-js-tools");

interface String {
  toColorString(): string;
}

String.prototype.toColorString = function (): string {
  return "#" + MD5.generate(this.toString()).substring(0, 6);
}