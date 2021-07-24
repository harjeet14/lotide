const without = (sourceArray, itemsToRemove) => {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    let itemFound = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArray[i] === itemsToRemove[j]) {
        itemFound = true;
        break;
      }
    }
    if (itemFound === false) {
      result.push(sourceArray[i]);
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
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);// => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']); // => ["1", "2"]
