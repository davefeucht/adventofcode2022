const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');

// Function to move elements between stacks
const moveElements = (number, from, to, stackMap) => {
    for (let i = 0; i < number; ++i) {
        stackMap[(to - 1)].push(stackMap[(from - 1)].pop());
    }
};

// Split the top of the data file into rows representing the data map
const stackRows = data.split('\n')
    .slice(0, 8)
    .map(row => row.match(/.{1,4}/g))
    .map(row => {
        return row.map(element => element.match(/[A-Z]/g)?.[0]);
    });

// Transform the instructions into arrays of numbers representing each parameter
const instructionRows = data.split('\n')
    .slice(10)
    .map(row => row.match(/[0-9]{1,2}/g))
    .map(row => {
        return row.map(element => parseInt(element));
    });

// Take the rows and transform them into columns
const stacks = stackRows[0].map((_, column) => stackRows.map(row => row[column]).reverse().filter(element => element !== undefined));

// Move elements according to the instructions
instructionRows.forEach(instruction => {
    [number, from, to] = instruction;
    moveElements(number, from, to, stacks);
});

// Grab the last element in each stack
console.log(stacks.map(stack => stack.pop()).join(''));
