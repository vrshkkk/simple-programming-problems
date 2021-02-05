// Write a program that prints a multiplication table for numbers up to 12.

const ask = require("async-ask");

async function main() {
    let number = await ask('Enter number: ');

    for (let i = 1; i <= 12; i++) {
        let result = number * i;
        console.log(number, '*', i, '=', result);


    }
}

main().catch((e) => console.error(e));
