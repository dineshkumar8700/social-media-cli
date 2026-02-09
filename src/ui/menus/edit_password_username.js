import { select } from "@inquirer/prompts";
import { menuFooter } from "../../utils/menu_footer.js";

const options = [
  { name: "Change Username", value: "changeUsername" },
  { name: "Change Password", value: "changePassword" },
  ...menuFooter(),
];

export const editUsernameOrPassword = async (db, user) => {
  const choice = await select({
    message: "Choose information to edit\n",
    choices: options,
  });
  if (choice === "back") return;

  return choice(db, user);
};
