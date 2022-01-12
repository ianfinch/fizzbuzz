for (let n = 1; n <= 100; n = n + 1) {

    if (n % 15 === 0) {
        process.stdout.write("FizzBuzz");
    } else if (n % 3 === 0) {
        process.stdout.write("Fizz");
    } else if (n % 5 === 0) {
        process.stdout.write("Buzz");
    } else {
        process.stdout.write("" + n);
    }

    if (n < 100) {
        process.stdout.write(", ");
    } else {
        process.stdout.write("\n");
    }
}
