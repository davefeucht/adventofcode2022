const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');

const convertRangeToArray = (begin, end) => {
    const returnArray = [];
    for (let i = parseInt(begin); i <= parseInt(end); ++i) {
        returnArray.push(i);
    }

    return returnArray;
}

let containedRanges = 0;

// Split data into rows
const pairs = data.split('\n')
    // Convert each row into a sub-array representing a 'round'
    .map(row => {
        return row.split(',').map(pair => convertRangeToArray(...pair.split('-')));
    });

pairs.forEach(pair => {
    if (
        pair[0].every(element => pair[1].includes(element)) ||
        pair[1].every(element => pair[0].includes(element))
    ) {
        ++containedRanges;
    }
});

console.log(containedRanges);
