'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (start, end) => {
  const length = Math.ceil((end - start) / 2);
  if (length < 0) return [];

  const arr = new Array(length);

  let i = 0;
  for (let number = start; number <= end; number++) {
    if (number % 2 !== 0) arr[i++] = number;
  }
  return arr;
};

rangeOdd(0, 1);

module.exports = { rangeOdd };
