
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

const middle = (array) => {
  // if array length smaller or equal than 2 , then return empty
  // else .
  //  if lengh odd . return array with center value
  //  if even . return array with center prev and center value
  //  22, 33, 44, 55
  let res = [];

  if (array.length > 2) {
    // odd case, center value
    let midIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      res.push(array[midIndex - 1]);
    }
    res.push(array[midIndex]);
  }

  return res;

};
// middle([1]); []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
