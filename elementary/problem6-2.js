const ask = require("async-ask");

function getSum(thresholdNumber) {
    let sum = 0;
    for (let i = 1; i <= thresholdNumber; i++) {
        sum += i;
    }
    return sum;
}


function getProduct(thresholdNumber) {
    let product = 1;
    for (let i = 1; i <= thresholdNumber; i++) {
        product *= i;
    }
    return product;
}

async function main() {
    let n = Number(await ask('Enter number: '));
    if (isNaN(n)) {
        console.log('Invalid number');
        return;
    }

    let request = await ask('Choose action:\n 1 - sum numbers\n 2 - multiply numbers\n');

    let result;
    switch (request) {
        case '1':
            result = getSum(n);
            break;

        case '2':
            result = getProduct(n);
            break;

        default:
            console.log('Invalid action');
            return;
    }
    console.log('Result is: ' + result);

}

main().catch((e) => console.error(e));
