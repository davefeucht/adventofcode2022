const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf8');

const priorities = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52
}

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
const itemPriorities = matchingItems.map(item => priorities[item]);

// Sum up the priorities
console.log(itemPriorities.reduce((prev, curr) => prev + curr, 0));
