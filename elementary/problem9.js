// Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.

const ask = require("async-ask");
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

async function main() {
    let range = Number(await ask('Hi! Welcome to the guessing name.\nPlease enter the highest number in a range: '));

    const min = 0;

    let rightNumber = getRandom(min, range);
    console.log(rightNumber)
    
     let attempt = Number(await ask('Thanks!\nNow try to guess the secret number in a range ' + min + '- ' + range + ':\n'));

    while (attempt !== rightNumber) {
        if (attempt < rightNumber) {
            attempt = Number(await ask('Your number is too small. Try again.\n')); 
        }
        else if (attempt > rightNumber) {
            attempt = Number(await ask('Your number is too big. Try again.\n'));
        }
    }

    console.log('Congratulations! You win :)');
}
























main().catch((e) => console.error(e));