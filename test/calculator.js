var expect = require("chai").expect;
var calc = require('../app/calculator.js');

describe("Calculator", () => {
    describe("Correct Results", () => {
        it ("Addition", () => {
            var pass = calc.add(5, 2);
            expect(pass).to.equal(7);
        })

        it ("Subtraction", () => {
            var pass = calc.sub(5, 2);
            expect(pass).to.equal(3);
        })

        it ("Multiplication", () => {
            var pass = calc.mul(5, 2);
            expect(pass).to.equal(10);
        })

        it ("Division", () => {
            var pass = calc.div(10, 2);
            expect(pass).to.equal(5);
        })
    })

    describe("Failed Results", () => {
        it ("Addition", () => {
            var fail = calc.add(5, 2);
            expect(fail).to.equal(8);
        })

        it ("Subtraction", () => {
            var fail = calc.sub(5, 2);
            expect(fail).to.equal(5);
        })

        it ("Multiplication", () => {
            var pass = calc.mul(5, 2);
            expect(pass).to.equal(12);
        })

        it ("Division", () => {
            var pass = calc.div(10, 2);
            expect(pass).to.equal(2);
        })
    })
})