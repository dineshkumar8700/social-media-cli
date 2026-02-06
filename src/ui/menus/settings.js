import { select, Separator } from "@inquirer/prompts";
import { editGeneralInfo } from "./edit_general_info.js";
import { editUsernameOrPassword } from "./edit_password_username.js";

const options = [
  { name: "Edit General Info", value: editGeneralInfo },
  { name: "Edit Password/Username", value: editUsernameOrPassword },
  new Separator(),
  { name: "Back ↩", value: "back" },
];

export const settings = async (db, user) => {
  console.clear();

  while (true) {
    const choice = await select({
      message: "What you want to change today...🤔\n",
      choices: options,
      pageSize: 10,
    });

    if (choice === "back") return;

    await choice(db, user);
  }
};
