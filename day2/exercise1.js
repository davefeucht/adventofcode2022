const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');

// Set consts for values of round outcome
const statusValues = {
    win: 6,
    draw: 3,
    lose: 0
};

// Set consts for values of choosing each shape
const shapeValues = {
    X: 1,
    Y: 2,
    Z: 3
};

// Evaluate the score of a round based on the two shapes in the round
const scoreRound = round => {
    if (
        (round[0] === 'A' && round[1] === 'Y') ||
        (round[0] === 'B' && round[1] === 'Z') ||
        (round[0] === 'C' && round[1] === 'X')
    ) {
        return (statusValues.win + shapeValues[round[1]]);
    }

    if (
        (round[0] === 'A' && round[1] === 'X') ||
        (round[0] === 'B' && round[1] === 'Y') ||
        (round[0] === 'C' && round[1] === 'Z')
    ) {
        return (statusValues.draw + shapeValues[round[1]]);
    }

    if (
        (round[0] === 'A' && round[1] === 'Z') ||
        (round[0] === 'B' && round[1] === 'X') ||
        (round[0] === 'C' && round[1] === 'Y')
    ) {
        return (statusValues.lose + shapeValues[round[1]]);
    }
};

// Split data into rows
const rounds = data.split('\n')
    // Convert each row into a sub-array representing a 'round'
    .map(row => row.split(' '));

// Score each round and total up the score
const score = rounds.reduce((prev, curr) => {
    return prev += scoreRound(curr);
}, 0);

console.log(score);
