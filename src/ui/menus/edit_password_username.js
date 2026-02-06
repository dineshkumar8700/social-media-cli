import { select, Separator } from "@inquirer/prompts";

const options = [
  { name: "Change Username", value: "changeUsername" },
  { name: "Change Password", value: "changePassword" },
  new Separator(),
  { name: "Back ↩", value: "back" },
];

export const editUsernameOrPassword = async (db, user) => {
  const choice = await select({
    message: "Choose information to edit\n",
    choices: options,
  });
  if (choice === "back") return;

  return choice(db, user);
};
