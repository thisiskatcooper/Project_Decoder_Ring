/* Tests */

let caesar = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false if no shift value is provided", () => {
    const actual = caesar.caesar("input");
    expect.actual.to.be.false;
  });
  it("should return false if the shift value = 0", () => {
    const actual = caesar.caesar("input", 0);
    expect.actual.to.be.false;
  });
  it("should return false if the shift value is greater than 25", () => {
    const actual = caesar.caesar("input", 26);
    expect.actual.to.be.false;
  });
  it("should return false if the shift is less than -25", () => {
    const actual = caesar.caesar("input", -26);
    expect.actual.to.be.false;
  });
  it("should leave spaces as is", () => {
    const actual = caesar.caesar("some input", 2);
    const expected = " ";
    expect(actual.charAt(4).to.equal(expected));
  });
  it("should leave special characters as is", () => {
    const actual = caesar.caesar("some input!", 2);
    const expected = "!";
    expect(actual.charAt(10).to.equal(expected));
  });
  it("should ignore capital letters", () => {
    const actual = caesar.caesar("RSTUV", 1);
    const expected = "stuvw";
    expect(actual.to.equal(expected));
  });
  it("should wrap to beginning of alphabet when going over 'z'", () => {
    const actual = caesar.caesar("yzab", 3);
    const expected = "bcdef";
    expect(actual).to.equal(expected);
  });
  it("should account for a negative shift by moving left", () => {
    const actual = caesar.caesar("cde", -1);
    const expected = "bcd";
    expect(actual).to.equal(expected);
  });
  it("should decode message if input has been encoded (encoded = false)", () => {
    const actual = caesar.caesar("khoor", 3, false);
    const expected = "hello";
    expect(actual).to.equal(expected);
  });
});
