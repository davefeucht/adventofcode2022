const data = require('./data1.json');

const newData = [];
let newDataIndex = 0;

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
const highestCalories = newData.map(calorieGroup => {
    return calorieGroup.reduce((prev, curr) => prev + curr, 0)
})
// Then find the largest number
.reduce((prev, curr) => Math.max(prev, curr), -Infinity);

console.log(highestCalories);
