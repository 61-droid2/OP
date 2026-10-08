'use strcit';

const generateKey = (length, characters) => {
    let key = '';
    const lengthChar = characters.length;
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * lengthChar);
        key += characters[random];
    }
    return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);