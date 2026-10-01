'use strict';
// function declaration is hoisted
console.dir(sumFun(2, 3));

function sumFun(a, b) {
    return a + b;
}
// no hoisting with arrow function/function expression
const sumConst = (a, b) => (a + b);

console.dir(sumConst(4, 5));
// var declaration is hoisted
console.dir(sumVar); // no error but undefined due of var declaration

var sumVar = 1 + 6;