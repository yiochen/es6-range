var range = require("./range");
function arrayEqual(ar1, ar2) {
  if (!Array.isArray(ar1) || !Array.isArray(ar2)) {
    return false;
  }

  if (ar1.length !== ar2.length) {
    return false;
  }

  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
  return true;
}
describe("range function return an iterator", function() {
  it("iterator has [Symbol.iterator] set", function() {
    expect(typeof range(10)[Symbol.iterator]).toBe("function");
  });
});
describe("range work with spread", function() {
  it("single value", function() {
    expect(arrayEqual([0, 1, 2], [...range(3)])).toBe(true);
  });
});
