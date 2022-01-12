# FizzBuzz Coding Challenge

## The Problem

Write a short program that prints each number from 1 to 100, but gor each
multiple of 3, print "Fizz" instead of the number, for each multiple of 5,
print "Buzz" instead of the number, and for numbers which are multiples of both
3 and 5, print "FizzBuzz" instead of the number.

## Approach

I originally created a minimal solution, using a `for` loop and an `if`
statement to generate the output.  This is available in `index-original.js`.

I then created a fuller version (available in `index.js`), which takes a more
functional approach, and separates out the rules for matching into a
configuration object.  This gives flexibility, allowing simple configuration
changes to be made to alter the numbers to match and/or the strings to display,
or even to add in further substitutions.

## Running this Project

### Running the test suite

```
npm test
```

### Running the code

```
npm start
```

Or:

```
node index.js
```

### Running my initial version

```
node index-original.js
```
