import { Command } from "commander";
import { print } from "./action";

function main() {
  const program = new Command();
  program.command("print").alias("p").action(print);
  program.parse(process.argv);
}

export default main;
