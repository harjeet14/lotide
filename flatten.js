
const flatten = (nestedArrays) => {
  let result = [];

  for (let i = 0; i < nestedArrays.length; i++) {
    if (Array.isArray(nestedArrays[i])) {
      result = result.concat(nestedArrays[i]);
    } else {
      result.push(nestedArrays[i]);
    }
  }

  return result;
};
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
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 4], [3, 3], 5, [6]]), [1, 2, 3, 4, 5, 6]);