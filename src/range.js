class IntRange {
  constructor(value1 = NaN, value2 = NaN, step = 1) {
    let _value1 = Number(value1);
    let _value2 = Number(value2);

    if (isNaN(_value1)) {
      console.error("The first number is NaN");
      return;
    }

    if (isNaN(_value2)) {
      this.end = _value1;
      this.start = 0;
    } else {
      this.start = _value1;
      this.end = _value2;
    }
  }
  *gen() {
    let current = this.start;
    console.log("iterating, current is " + current + " end is " + this.end);
    while (current < this.end) {
      yield current;
      current += this.step;
    }
  }
  [Symbol.iterator]() {
    return this.gen();
  }
}

function range(value1, value2, step) {
  return new IntRange(value1, value2, step);
}

module.exports = range;
