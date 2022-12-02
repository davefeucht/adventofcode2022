const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');

const shapeValues = {
    X: 1,
    Y: 2,
    Z: 3
};

const scoreRound = round => {
    if (
        (round[0] === 'A' && round[1] === 'Y') ||
        (round[0] === 'B' && round[1] === 'Z') ||
        (round[0] === 'C' && round[1] === 'X')
    ) {
        return (6 + shapeValues[round[1]]);
    }

    if (
        (round[0] === 'A' && round[1] === 'X') ||
        (round[0] === 'B' && round[1] === 'Y') ||
        (round[0] === 'C' && round[1] === 'Z')
    ) {
        return (3 + shapeValues[round[1]]);
    }

    if (
        (round[0] === 'A' && round[1] === 'Z') ||
        (round[0] === 'B' && round[1] === 'X') ||
        (round[0] === 'C' && round[1] === 'Y')
    ) {
        return shapeValues[round[1]];
    }
};

const rows = data.split('\n');
const rounds = rows.map(row => row.split(' '));

const score = rounds.reduce((prev, curr) => {
    return prev += scoreRound(curr);
}, 0);

console.log(score);
