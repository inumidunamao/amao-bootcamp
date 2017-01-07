var fizzBuzz = require('../main/main.js').fizzBuzz;

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toBe('Fizz');
  });

  it("should return `Fizz` for -71", function() {
    expect(fizzBuzz(-71)).toBe(-71);
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toBe(101);
  });

});

describe("Fizz Buzz test for input ", function() {
  it("should return `Input must be integer` when given a String as input", function() {
    expect(fizzBuzz("a string")).toBe('Input must be integer');
  });

  it("should return `Input must be integer` when given an Array as input", function() {
    expect(fizzBuzz([3,2,1])).toBe('Input must be integer');
  });  

  it("should return `Input must be integer` when given an Object as input", function() {
    expect(fizzBuzz({"a":20})).toBe('Input must be integer');
  });
});