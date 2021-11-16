"use strict";
const check = require("../stack-queue-brackets");

describe("Validate Brackets", () => {
  it("return true when there is no violation", () => {
    const s1 = "(){}[]";
    const s2 = "(nashat){s[]s}";
    const s3 = "({[YUP IT WORKS]})";
    expect(check(s1)).toBeTruthy();
    expect(check(s2)).toBeTruthy();
    expect(check(s3)).toBeTruthy();
  });

  it("return false when there is violation", () => {
    const s1 = "({)[}]";
    const s2 = "(nashat)}s[]s}";
    const s3 = "({[ IT DOES NOT WORK]}";
    expect(check(s1)).toBeFalsy();
    expect(check(s2)).toBeFalsy();
    expect(check(s3)).toBeFalsy();
  });
});
