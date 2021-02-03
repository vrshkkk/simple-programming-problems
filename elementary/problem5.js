// Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17


const ask = require("async-ask");

async function main() {
    let number = await ask('Enter number: ');
    let sum = 0;
    let i = 1;
    for (; i <= number; i++) {
        let sorted = i % 3 === 0 || i % 5 === 0;
        if (sorted) {
            sum += i;
        }
    }
    console.log('The sum of multiples of three or five 1 to', number, 'is', sum);

}
main().catch((e) => console.error(e));


// number == 5 => sum == 8