let sum = 0;
const numbers = [65, 44, 12, 4];

function addNumberToSum(item) {
  sum += item;
}

numbers.forEach(addNumberToSum);

console.log("Sum of numbers:", sum);

const fruits = ["apple", "orange", "cherry"];

function logFruit(fruit) {
  console.log(fruit);
}

fruits.forEach(logFruit);

const array1 = ['a', 'b', 'c'];

array1.forEach(function (element) {
  console.log(element);
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num, index, arr) {
  arr[index] = num + 10;
});

console.log(numbers);

const strings = ["program", "world", "javascript"];

strings.forEach(function (str, index, arr) {
  arr[index] = str.split('').reverse().join('');
});

console.log(strings);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = [];

numbers.forEach(function (num) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
});

console.log(evenNumbers);

const celsiusTemperatures = [0, 10, 20, 30, 40];

celsiusTemperatures.forEach(function (celsius, index, arr) {
  arr[index] = (celsius * 9/5) + 32;
});

console.log(celsiusTemperatures);

const words = ["apple", "banana", "cherry"];

words.forEach(function (word, index, arr) {
  arr[index] = word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(words);