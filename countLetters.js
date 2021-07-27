const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const countLetters = (str) => {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (result[str[i]]) {
        result[str[i]] += 1
      } else {
        result[str[i]] = 1
      }
    }
  }
  return result;
}
console.log(countLetters('light house labs'));

//assertEqual(countLetters('LightHouseLabs'), );
//assertEqual(countLetters('LHL', 'H'), 1);