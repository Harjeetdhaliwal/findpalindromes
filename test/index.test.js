const palindromes = require("../index");
const { expect } = require("chai");

describe("Palindromes", function () {
  it("should return true if 'bcb' is a palindrome substring of string 'abcba'", function () {
    const result = palindromes("abcba");
    expect(result.map((e) => e.substr)).to.include("bcb");
  });

  it("should return true if 'abcb' is NOT a palindrome substring of string 'abcba'", function () {
    const result = palindromes("abcba");
    expect(result.map((e) => e.substr)).to.not.include("abcb");
  });

  it("should return true if '565' is a palindrome string at index 4 and has length 3", function () {
    const result = palindromes("12345654321");
    expect(result).to.deep.include({
      substr: "565",
      index: 4,
      length: 3,
    });
  });

  it("should return true if '565' is a palindrome string NOT at index 5 and NOT has length 10", function () {
    const result = palindromes("12345654321");
    expect(result).to.not.deep.include({
      substr: "565",
      index: 5,
      length: 10,
    });
  });
});
