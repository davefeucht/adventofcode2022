const data = require('./data1.json');

const newData = [];
let newDataIndex = 0;
const topThree = [];

// Transform the data into an array of arrays, where each sub-array represents one elf
data.forEach((element, index) => {
    if ((index === 0) || (element === null)) {
        if (index !== 0) {
            ++newDataIndex;
        }
        newData[newDataIndex] = [];
    }

    if (element !== null) {
        newData[newDataIndex].push(element);
    }
});

// First sum up the calories for each elf
const calorieGroups = newData.map(calorieGroup => {
    return calorieGroup.reduce((prev, curr) => prev + curr, 0)
});

for (let i = 0; i < 3; i++) {
    // Then find the largest number
    const highestCalories = calorieGroups.reduce((prev, curr) => Math.max(prev, curr), -Infinity);

    // Record as a top value
    topThree.push(highestCalories);

    // Find the value in the array and remove it
    const highIndex = calorieGroups.findIndex(element => element === highestCalories);
    calorieGroups.splice(highIndex, 1);
}

console.log(topThree.reduce((prev, curr) => prev + curr, 0));
