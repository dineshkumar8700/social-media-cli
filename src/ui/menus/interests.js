//deno-lint-ignore-file
import { input, select } from "@inquirer/prompts";
import { menuFooter } from "../../utils/menu_footer.js";

const getUserInterests = (db, userId) => {
  const index = db.users.findIndex((user) => user.id === userId);

  const interests = db.users[index].interests;

  return interests;
};

const _editInterest = async (db, userId, interest) => {
  const name = await input({
    message: "Enter new name:",
    required: true,
  });
};

const accessInterest = async (db, userId, interest) => {
  const option = await select({
    message: "What do you want to do",
    choices: [
      { name: "Edit", value: "editInterest" },
      { name: "Delete", value: "deleteInterest" },
      ...menuFooter(),
    ],
  });
};

const selectInterest = async (interests) => {
  const interest = await select({
    message: "Select interest you want to access:\n",
    choices: [
      ...interests.map((name) => ({ name, value: name })),
      ...menuFooter(),
    ],
  });

  return interest;
};

export const showInterests = async (db, userId) => {
  const userInterests = getUserInterests(db, userId);
  const choice = await selectInterest(userInterests);

  if (choice === "back") return;

  await accessInterest(db, userId, choice);
};
