const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = (array) => {
  let result = array.slice(1);
  return result;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");