const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');

const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

const badgeTypes = [];

// Split the data into an array of rucksacks
const rucksacks = data.split('\n');

// Split the rucksacks in groups of 3 and find the item that exists in all three
const groupSize = 3;
for (let i = 0; i < rucksacks.length; i += groupSize) {
    const group = rucksacks.slice(i, i + groupSize);

    const badge = group[0].split('').filter(item => group[1].split('').includes(item) && group[2].split('').includes(item));
    // Add the matching value to the list of badgeTypes
    badgeTypes.push(badge[0]);
}

// Create a new array of the priorities of those matching items
const itemPriorities = badgeTypes.map(item => priorities.indexOf(item) + 1);

// Sum up the priorities
console.log(itemPriorities.reduce((prev, curr) => prev + curr, 0));
