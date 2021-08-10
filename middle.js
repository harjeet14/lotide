const assertArraysEqual = require("./assertArraysEqual");

const middle = (array) => {

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

module.exports = middle;