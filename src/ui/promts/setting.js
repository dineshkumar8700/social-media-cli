import { input, select } from "@inquirer/prompts";
import { addBio, editGender, editName } from "../../db/memory/edit_account.js";

export const handleEditName = async (db, userId) => {
  const newName = await input({ message: "Enter your name:" });
  return editName(db, userId, newName);
};

export const handleAddBio = async (db, userId) => {
  const bio = await input({ message: "Write about yourself:" });
  return addBio(db, userId, bio);
};

export const handleEditGender = async (db, userId) => {
  const gender = await select({
    message: "Choose your gender:",
    choices: [
      { name: "Male", value: "male" },
      { name: "Female", value: "female" },
      { name: "Other", value: "other" },
    ],
  });
  return editGender(db, userId, gender);
};
