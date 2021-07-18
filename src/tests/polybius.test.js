let polybius = require("../src/polybius.js");
let expect = require("chai").expect;

describe("polybius", () => {
  it("should translate letters i and j to 42", () => {
    const actual = polybius.polybiu("ij");
    const expected = "4242";
    expect(actual).to.equal(expected);
  });
  it("should return false if numbers of coded input are odd", () => {
    const actual = polybius.polybius("4223517", false);
    expect(actual).to.be.false;
  });
  it("should leave spaces when encoding", () => {
    const actual = polybius.polybius("e s");
    const expected = "51 34";
    expect(actual).to.equal(expected);
  });
  it("should leave spaces when decoding", () => {
    const actual = polybius.polybius("51 34");
    const expected = "e s";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters when encoding", () => {
    const actual = polybius.polybius("ESS");
    const expected = "513434";
    expect(actual).to.equal(expected);
  });
  it("should return coded input as number pairs", () => {
    const actual = polybius.polybius("message");
    const expected = "23513434112251";
    expect(actual).to.equal(expected);
  });
  it("should return decoded input as letters", () => {
    const actual = polybius.polybius("23513434112251");
    const expected = "message";
    expect(actual).to.equal(expected);
  });
});
