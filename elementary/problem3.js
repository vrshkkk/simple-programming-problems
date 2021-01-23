// Modify the previous program such that only the users Alice and Bob are greeted with their names.

const ask = require("async-ask");

async function main() {
  let name = await ask("Hi! What is your name?");
  if (name === "Alice" || name === "Bob") {
    console.log("Nice to meet you," + name);
  }
}

main().catch((e) => console.error(e));
