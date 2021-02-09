// Write a program that prints a multiplication table for numbers up to 12.

const ask = require("async-ask");

// bnl = 3
// cnl = 1

// dnos = 1

// 1   127 36
// 126 4   222
// 44 67 3


/*

    1  2  3  4  5
    2  4  6  8  10
    3  6  9  12 15
    4  8  12 16 20

       1  2  3  4  5
    1  1  2  3  4  5
    2  2  4  6  8  10
    3  3  6  9  12 15
    4  4  8  12 16 20

*/

async function main() {
    const upToNumber = 12;
    const defaultNumberOfSpaces = 1;
    const biggestNumberLength = String(upToNumber * upToNumber).length;

    for (let i = 1; i <= upToNumber; i++) {
        for (let j = 1; j <= upToNumber; j++) {
            let currentNumber = i * j;
            process.stdout.write(String(currentNumber));

            let currentNumberLength = String(currentNumber).length;
            let lengthDifference = biggestNumberLength - currentNumberLength;
            for (let k = 0; k < lengthDifference + defaultNumberOfSpaces; k++) {
                process.stdout.write(' ');
            }
        }
        process.stdout.write('\n');
    }
}

main().catch((e) => console.error(e));

