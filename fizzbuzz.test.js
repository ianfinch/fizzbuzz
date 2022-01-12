const fizzbuzz = require("./fizzbuzz.js");

describe("range function", () => {

    it("returns a range from zero", () => {
        expect(fizzbuzz.range(0, 9)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8 , 9]);
    });

    it("returns a range from one", () => {
        expect(fizzbuzz.range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]);
    });

    it("returns a range from a positive number", () => {
        expect(fizzbuzz.range(5, 15)).toEqual([5, 6, 7, 8 , 9, 10, 11, 12, 13, 14, 15]);
    });

    it("returns a range with one value", () => {
        expect(fizzbuzz.range(5, 5)).toEqual([5]);
    });

    it("returns a fully negative range", () => {
        expect(fizzbuzz.range(-10, -1)).toEqual([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]);
    });

    it("returns a negative range up to zero", () => {
        expect(fizzbuzz.range(-9, 0)).toEqual([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0]);
    });

    it("returns a range from negative to positive", () => {
        expect(fizzbuzz.range(-5, 5)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
    });

    it("throws an error if start is bigger than finish", () => {
        expect(() => fizzbuzz.range(10, 0)).toThrow(RangeError);
        expect(() => fizzbuzz.range(10, 0)).toThrow("Start of range must be smaller than end of range");
    });
});

describe("makeSubs function", () => {

    it("substitutes Fizz correctly", () => {
        expect(fizzbuzz.makeSubs(3)).toBe("Fizz");
        expect(fizzbuzz.makeSubs(6)).toBe("Fizz");
    });

    it("substitutes Buzz correctly", () => {
        expect(fizzbuzz.makeSubs(5)).toBe("Buzz");
        expect(fizzbuzz.makeSubs(10)).toBe("Buzz");
    });

    it("substitutes FizzBuzz correctly", () => {
        expect(fizzbuzz.makeSubs(15)).toBe("FizzBuzz");
        expect(fizzbuzz.makeSubs(30)).toBe("FizzBuzz");
    });

    it("correctly leaves other numbers unchanged", () => {
        expect(fizzbuzz.makeSubs(1)).toBe(1);
        expect(fizzbuzz.makeSubs(2)).toBe(2);
        expect(fizzbuzz.makeSubs(4)).toBe(4);
        expect(fizzbuzz.makeSubs(17)).toBe(17);
        expect(fizzbuzz.makeSubs(91)).toBe(91);
    });
});
