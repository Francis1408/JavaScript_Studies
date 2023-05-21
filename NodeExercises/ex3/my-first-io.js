const fs = require('fs');

const data = fs.readFileSync(process.argv[2]);
const str = data.toString();
const array = str.split('\n');

console.log(array.length-1);