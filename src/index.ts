import { print } from "./action";

function main() {
  print();
}

// * Handle local development with `npm start` or `yarn start`
if (process.argv[3] === "start") main();

export default main;
