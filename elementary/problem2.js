// Write a program that asks the user for their name and greets them with their name.

const ask = require("async-ask");

async function main() {
    let name = await ask('Hi! What is your name?');
    console.log('Nice to meet you,' + name);
}

main().catch((e) => console.error(e));

