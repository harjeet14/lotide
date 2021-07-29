const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const findKey = function (object, callback) {
  for (let element in object) {
    if (callback(object[element]) === true) {
      return element;
    }
  }
};
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), 'noma');

