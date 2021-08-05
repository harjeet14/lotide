const assertArraysEqual = (actual, expected) => {

  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const eqArrays = (a, b) => {

  if (a === b) return true;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      return false;

  }
  return true;
};


const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const result = [];
  for (let item of array) {
    console.log(result.push(callback(item)));
  }
  return result;

};
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);