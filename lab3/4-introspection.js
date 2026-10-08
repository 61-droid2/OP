'use strict';

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

const fun = (iface) => {
    const funArray = [];
    for (const entry in iface) {
        const fn = iface[entry];
        if (typeof fn === 'function') {
            funArray.push([entry, fn.length]);
        }
    }
    return funArray;
};

console.log(fun(iface));
