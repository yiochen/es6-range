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
  it("range works in for.. of", function() {
    var arr = [];
    for (var item of range(3)) {
      arr.push(item);
    }
    expect(arrayEqual(arr, [0, 1, 2])).toBe(true);
  });
});

describe("range work with spread", function() {
  it("single value", function() {
    expect(arrayEqual([0, 1, 2], [...range(3)])).toBe(true);
  });
});

describe("work with one, two and three arguments", function() {
  it("single positive number n iterates from 0..n-1", function() {
    expect(arrayEqual([...range(5)], [0, 1, 2, 3, 4])).toBe(true);
  });

  it("two positive number n, m iterates from n..m-1", function() {
    expect(arrayEqual([...range(2, 5)], [2, 3, 4])).toBe(true);
  });

  it("three arguments n, m, step iterates between [n, m), with step", function() {
    expect(arrayEqual([...range(2, 5, 2)], [2, 4])).toBe(true);
  });

  it("single negative number returns nothing", function() {
    expect(arrayEqual([...range(-2)], [])).toBe(true);
  });
});
