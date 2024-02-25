const fs = require('fs');
const { text } = require('stream/consumers');
const textin = fs.readFileSync('starter/txt/input.txt', 'utf-8');
console.log(textin);

const textOut = `This is what we know about the avocado: ${textin}.\nCreated on ${Date.now()}`;
fs.writeFileSync('starter/txt/output.txt', textOut);

console.log('File written!');