/*
  Fix the bugs in the following functions!

  Read the comments to understand what each function should do.
  Run the tests to see what's failing.
  Fix the code to make all tests pass.
*/

// ============================================
// Question 1: fixVariables
// ============================================
// This function should print and return a message based on temperature

const fixVariables = (temp) => {
  let msg;
  if (temp < 30) {
    msg = 'Pretty chilly.';
  } else if (temp < 70) {
    msg = 'Not bad.';
  } else if (temp < 100) {
    msg = 'On the hot side.';
  } else {
    msg = 'I will die of heat.';
  }
  console.log(msg);
  console.log("And that's how I feel about the temp!");
  return msg
};

// ============================================
// Question 2: doubleAllItemsPurely
// ============================================
// This function should return a NEW array with all values doubled
// It should NOT mutate the original array

const doubleAllItemsPurely = (arr) => {
  const newArr = []
  for (let num of arr) {
    newArr.push(num * 2)
  }
  return newArr
};

// ============================================
// Question 3: sumArray
// ============================================
// This function should take in an array of numbers and return the sum of all the numbers

const sumArray = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

// ============================================
// Exports
// ============================================

module.exports = {
  fixVariables,
  doubleAllItemsPurely,
  sumArray,
};
