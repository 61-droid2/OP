'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
  const length = end - start;
  if (length < 0) return [];

  const arr = new Array(length);

  for (let i = 0; i <= length; i++) {
    arr[i] = i + start;
  }
  return arr;
};

range(15, 30);

module.exports = { range };
