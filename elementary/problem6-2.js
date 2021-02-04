const ask = require("async-ask");

async function main() {
    let n = Number(await ask('Enter number: '));
    if (isNaN(n)) {
        console.log('Invalid number');
        return;
    }

    let request = await ask('Choose action:\n 1 - sum numbers\n 2 - multiply numbers\n');

    let result;

    function getSum() {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        result = sum;
        return result;
    }

    function getProduct() {
        let product = 1;
        for (let i = 1; i <= n; i++) {
            product *= i;
        }
        result = product;
        return result;
    }

    switch (request) {
        case '1':
           getSum();
            break;

        case '2':
            getProduct();
            break;

        default:
            console.log('Invalid action');
            return;
    }
    console.log('Result is: ' + result);

}

main().catch((e) => console.error(e));
