const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');

const rucksacks = data.split('\n')
    .map(rucksack => {
        const compartments = [];
        compartments[0] = rucksack.slice(0, (rucksack.length / 2));
        compartments[1] = rucksack.slice(rucksack.length / 2);
        return compartments;
    });

console.log(rucksacks);
