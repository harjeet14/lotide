const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
const eqArrays = (a, b) => {

  if (a === b) return true;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      return false;

  }
  return true;
};
const eqObjects = function (object1, object2) {

  let object1KeyValue = Object.keys(object1);
  let object2KeyValue = Object.keys(object2);
  if (object1KeyValue.length !== object2KeyValue.length) {
    return false;
  } else {
    for (let key of object1KeyValue) {
      if (Array.isArray(object1[key])) {
        if (!Array.isArray(object2[key]) ||
          !eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
      else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);