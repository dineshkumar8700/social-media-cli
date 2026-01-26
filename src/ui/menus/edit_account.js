import { select, Separator } from "@inquirer/prompts";
import { handleAddBio, handleEditName } from "../promts/setting.js";

const personDetails = [
  { name: "Name", value: handleEditName },
  { name: "Add Bio", value: handleAddBio },
  { name: "DOB", value: "dob" },
  { name: "Gender", value: "gender" },
  { name: "Interests", value: "interest" },
  new Separator(),
  { name: "Back ↩", value: "back" },
];

export const editPersonalDetails = async (db, user) => {
  const choice = await select({
    message: "Choose information to edit\n",
    choices: personDetails,
    pageSize: 10,
  });

  return choice(db, user.id);
};

export const editUsernameAndPassword = async (db, user) => {
  const choice = await select({
    message: "Choose information to edit\n",
    choices: [
      { name: "Change Username", value: "changeUsername" },
      { name: "Change Password", value: "changePassword" },
      new Separator(),
      { name: "Back ↩", value: "back" },
    ],
  });

  return choice(db, user);
};

export const editAccountCategory = async (db, user) => {
  const choice = await select({
    message: "What you want to edit\n",
    choices: [
      { name: "Personal Details", value: editPersonalDetails },
      { name: "Password & Security", value: editUsernameAndPassword },
      new Separator(),
      { name: "Back ↩", value: "back" },
    ],
  });

  return choice(db, user);
};
