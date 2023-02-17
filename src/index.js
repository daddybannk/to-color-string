const MD5 = require("md5-js-tools");
String.prototype.toColorString = function() {
    return "#" + MD5.generate(this).substring(0, 6);
}