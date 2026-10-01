'use strict';

const array = [true, 'Hi', 6, 7, -200, false, 1e3, 'John', "Big Green", NaN, undefined, '1'];
const hash = { number: 0, string: 0, boolean: 0, undefined: 0 };

for (const variable of array) {
    hash[typeof variable]++;
}

console.dir(hash);

