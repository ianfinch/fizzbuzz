// A list of the substitutions we make
//
// - Externalised from the code for futureproofing
// - Use an array of objects to avoid a sparse array if we were to key off values
//
const substitutions = [
    { n: 3, text: "Fizz" },
    { n: 5, text: "Buzz" }
];

/**
 * Generate a range of numbers from min to max (inclusive)
 */
const range = (min, max) => {

    // Number of items (add one for inclusive range)
    const count = max - min + 1;

    // Need the number of items to be a positive number
    if (count < 1) {

        throw new RangeError("Start of range must be smaller than end of range");
    }

    // Generate the array, adjusting for the initial value
    return [...Array(count).keys()].map(n => n + min);
};

/**
 * Look for substitutions
 */
const makeSubs = n => {

    const result = substitutions
                    .map(x => n % x.n === 0 ? x.text : null)
                    .filter(x => x)
                    .join("");

    if (result) {
        return result;
    }

    return n;
};

/**
 * Generate values up to the supplied parameter
 */
const values = max => {

    return range(1, max)
            .map(makeSubs);
};

module.exports = {
    makeSubs,
    range,
    values
};
