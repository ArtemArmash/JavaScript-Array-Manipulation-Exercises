const array = [25,30,10,60];
array[1] = 45;

console.log(array);
console.log('\n');
const numbers = [5,3,7,9,1];
let totalNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    totalNumbers += numbers[i];
}

console.log(totalNumbers);
console.log('\n');

const array_2 = [1,2,3,4,5,6,7,8,9,10];
for(const number of array_2){
    console.log(number);
}
console.log('\n');
const array_3 = [2,6,3,7,9,19,2,6,10,65,23,56,81,7,3];
let max = Math.max(...array_3);
console.log(`Максимальне число: ${max}`);

console.log('\n');
const words = ["School", "United of Kingdom", "University", "Apple"];
const new_words = words.filter((words) => words.length > 7);
console.log(new_words);