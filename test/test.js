const chai = require("chai");
const expect = chai.expect;

require("../dist/index");

describe("to-color-string", function () {
    describe("Function `String.prototype.toColorString()`", function () {

        it("case: empty string", function () {
            let testString = '';
            let expectString = '#d41d8c';
            expect(testString.toColorString()).to.equal(expectString);
        });

        it("case: single character", function () {
            let testString = 'h';
            let expectString = '#2510c3';
            expect(testString.toColorString()).to.equal(expectString);
        });

        it("case: word", function () {
            let testString = 'hello';
            let expectString = '#5d4140';
            expect(testString.toColorString()).to.equal(expectString);
        });

        it("case: sentence", function () {
            let testString = `Hello, is it me you're looking for?`;
            let expectString = '#b1f23d';
            expect(testString.toColorString()).to.equal(expectString);
        });

        it("case: non english sentence", function () {
            let testString = `สวัสดีครับ ท่านสมาชิกชมรมคนชอบหมี`;
            let expectString = '#af85ed';
            expect(testString.toColorString()).to.equal(expectString);
        });
    });
});