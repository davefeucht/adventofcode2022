const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');

const stackRows = data.split('\n')
    .slice(0, 8)
    .map(row => row.match(/.{1,4}/g));

const stackMap = stackRows[0].map((_, column) => stackRows.map(row => row[column]));

console.log(stackMap);
