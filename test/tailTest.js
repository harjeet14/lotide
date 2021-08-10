const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');
const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

describe("#tail", () => {

  it("returns  Labs for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual((result), ["Lighthouse", "Labs"]);
  })

});