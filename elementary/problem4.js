// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

// 1. Запросить ввести цифру
// 2. сохранить цифру в переменную number
// 3. создать переменную sum 
// 4. взять цифры от 1 до number
// 5. вывести сумму чисел от 1 до number

const ask = require("async-ask");

async function main() {
    let number = await ask('Enter number: ');
    let sum = 0;
    let i = 1;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    
    console.log('The sum of numbers 1 to ', number, 'is', sum);
}

main().catch((e) => console.error(e));
