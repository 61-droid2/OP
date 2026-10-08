'use strict';

const ipConvertion = (ip) => {
    const shift = (acc, octet) => (acc << 8) + parseInt(octet, 10);
    return ip.split('.').reduce(shift, 0);
};

console.log(ipConvertion('127.0.0.1')); 