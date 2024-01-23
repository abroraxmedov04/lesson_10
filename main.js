//  task 1
function getArrayLength(str) {
  let res = 0;
  for (let item of str) {
    res += item.length;
  }
  return res;
}
// let res = ["apple", "kiwi", "orange"];
// console.log(getArrayLength(res));

//  task-2

function getMatches() {
  let str = String(prompt("Enter a value"));
  if (str.match(/hi|hello/i)) {
    return "Assalom aleykum";
  } else {
    return "Not the right data";
  }
}
// console.log(getMatches());

// 3 task

let array = ["kiwi", "oloma", "sardor"];
function getTheMaxLength(array) {
  let res = "";
  for (let str of array) {
    if (str.length > res.length) {
      res = array.length;
    }
  }
  return res;
}
// console.log(getTheMaxLength(array));

// task - 4

let numbers = [2, 4, 6, 8, 9];
function getSum(arr) {
  let endValue = arr[arr.length - 1];
  let start = arr[0];
  let res = endValue + start;
  return res;
}
// console.log(getSum(numbers));

// task-5

let str = "AbRoR";
function getUpperWordLength(str) {
  let upperCaseWord = str.match(/[A-Z]+/);
  if (upperCaseWord) {
    return upperCaseWord.length;
  } else {
    return 0;
  }
}
// console.log(getUpperWordLength(str));

//task-5 secons version

function findLastCharUsageCount(word) {
  if (word.length === 0) {
    return 0;
  }
  let lastChar = word[word.length - 1];
  let count = 1;
  for (const char of word.slice(0, -1)) {
    if (char === lastChar) {
      count++;
    }
  }
  return count;
}
// const result = findLastCharUsageCount("abrorbeksardor");
// console.log(result);

// task 6

function findWeightedAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  let count = 0;
  for (const num of arr) {
    sum += num;
    count++;
  }
  const average = sum / count;
  return average;
}
// const result1 = findWeightedAverage([1, 2, 5, 3]);
// console.log(result1);

// task 7

function capitalizeFirstAndLast(array) {
  if (array.length === 0) {
    return "";
  }
  let firstElement = array[0];
  let modifiedString =
    firstElement.charAt(0).toUpperCase() +
    firstElement.slice(1, -1) +
    firstElement.slice(-1).toUpperCase();
  return modifiedString;
}
// const result = capitalizeFirstAndLast(["olma"]);
// console.log(result);
