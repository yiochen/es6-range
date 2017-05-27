class IntRange {
  constructor(value1 = NaN, value2 = NaN, step = 1) {
    let _value1 = Number(value1);
    let _value2 = Number(value2);

    if (isNaN(_value1)) {
      throw new TypeError("expect first argument as a number, got " + value1);
    }

    if (step === 0) {
      throw new RangeError("range() step argument must not be zero");
    }

    if (isNaN(_value2)) {
      this.end = _value1;
      this.start = 0;
    } else {
      this.start = _value1;
      this.end = _value2;
    }

    this.step = step;
  }

  *[Symbol.iterator]() {
    let current = this.start;
    let hasNext = () => (this.end - current) * this.step > 0;
    while (hasNext()) {
      yield current;
      current += this.step;
    }
  }
}

function range(value1, value2, step) {
  return new IntRange(value1, value2, step);
}

module.exports = range;
