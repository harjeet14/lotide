const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {

  it("returns  Labs for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual((result), ["Lighthouse", "Labs"]);
  })

});