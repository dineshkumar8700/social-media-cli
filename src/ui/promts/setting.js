import { input } from "@inquirer/prompts";
import { addBio, editName } from "../../db/memory/edit_account.js";

export const handleEditName = async (db, userId) => {
  const newName = await input({ message: "Enter your name:" });
  return editName(db, userId, newName);
};

export const handleAddBio = async (db, userId) => {
  const bio = await input({ message: "Write about yourself:" });
  return addBio(db, userId, bio);
};
