'use strict';

const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    console.log(min + Math.floor(Math.random() * max - min + 1)); // math.floor округляє до найбільшого int
}

random(15, 30);
random(100);
random(3);
