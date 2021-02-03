// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. 


const ask = require("async-ask");

async function main() {
    let n = Number(await ask('Enter number: '));
    if (isNaN(n)) {
        console.log('Invalid number');
        return;
    }

    let request = await ask('Choose action:\n 1 - sum numbers\n 2 - multiply numbers\n');

    let result;

    if (request === '1') {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }

        result = sum;
    } else if (request === '2') {
        let product = 1;
        for (let i = 1; i <= n; i++) {
            product *= i;
        }
        result = product;
    } else {
        console.log('Invalid action');
        return;
    }

    console.log('Result is: ' + result);
}

main().catch((e) => console.error(e));
