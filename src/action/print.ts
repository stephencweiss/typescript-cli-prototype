import { prompt } from "inquirer";
export async function print() {
  const text = await interaction();
  console.log(text);
}

export async function interaction() {
  const questions = [
    {
      type: "input",
      name: "title",
      message: "What would you like to print?",
    },
  ];
  return await prompt(questions).then((answers) => answers.title);
}
