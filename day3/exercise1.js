const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');

const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

// Split the data into an array of rucksacks, that contains sub-arrays of compartments for each rucksack
const rucksacks = data.split('\n')
    .map(rucksack => {
        const compartments = [];
        compartments[0] = rucksack.slice(0, (rucksack.length / 2));
        compartments[1] = rucksack.slice(rucksack.length / 2);
        return compartments;
    });

// Create a new array of matching items from each rucksack
const matchingItems = rucksacks.map(rucksack => {
    return (rucksack[0].split('').filter(item => rucksack[1].split('').includes(item)))[0];
})

// Create a new array of the priorities of those matching items
const itemPriorities = matchingItems.map(item => priorities.indexOf(item) + 1);

// Sum up the priorities
console.log(itemPriorities.reduce((prev, curr) => prev + curr, 0));
