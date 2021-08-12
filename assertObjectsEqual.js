
const eqObjects = function (object1, object2) {
  let length1 = (Object.keys(object1)).length;
  let length2 = (Object.keys(object2)).length;
  if (length1 === length2) {
    for (let k of Object.keys(object1)) {
      if (Array.isArray(object1[k])) {
        if (object1[k].length !== object2[k].length) {
          return false;
        }
        for (let j = 0; j < object1[k].length; j++) {
          if (object1[k][j] !== object2[k][j]) {
            return false;
          }
        }
      } else {
        if (object1[k] !== object2[k]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {

    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  return assertObjectsEqual;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
