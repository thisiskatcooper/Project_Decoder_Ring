let substitution = require("../src/polybius.js");
let expect = require("chai").expect;

describe("substitution", () => {
  it("should return false if provided alphabet is not 26 characters", () => {
    const actual = substitution.substitution("hello", "qwertyuiop");
    expect(actual).to.be.false;
  });
  it("should return false if there are duplicate characters in provided alphabet", () => {
    const actual = substitution.substitution(
      "hello",
      "aabcdefghijklmnopqrstuvwxy"
    );
    expect(actual).to.be.false;
  });
  it("should return false if no alphabet is provided", () => {
    const actual = substitution.substitution("hello");
    expect(actual).to.be.false;
  });
  it("should correctly translate a given phrase based on the provided alphabet", () => {
    const actual = substitution.substitution(
      "message",
      "plmoknijbuhvygctfxrdzeswaq"
    );
    const expected = "ykrrpik";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters when encoding", () => {
    const actual = substitution.substitution(
      "MESSAGE",
      "plmoknijbuhvygctfxrdzeswaq"
    );
    const expected = "ykrrpik";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces in the message", () => {
    const actual = substitution.substitution(
      "m e s s a g e",
      "plmoknijbuhvygctfxrdzeswaq"
    );
    const expected = "y k r r p i k";
    expect(actual).to.equal(expected);
  });
  it("should decode using the provided alphabet", () => {
    const actual = substitution.substitution(
      "ykrrpik",
      "plmoknijbuhvygctfxrdzeswaq",
      false
    );
    const expected = "message";
    expect(actual).to.equal(expected);
  });
});
