const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const eqArrays = (a, b) => {

  if (a === b) return true;
  if (a === 'a' || b === 'b') return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      return false;

  }
  return true;
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [2, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);// => false
