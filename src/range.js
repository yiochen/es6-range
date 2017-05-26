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

    this.step = step;
  }

  *[Symbol.iterator]() {
    let current = this.start;
    while (current < this.end) {
      yield current;
      current += this.step;
    }
  }
}

function range(value1, value2, step) {
  return new IntRange(value1, value2, step);
}

module.exports = range;