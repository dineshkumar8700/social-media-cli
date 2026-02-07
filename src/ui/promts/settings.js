import { input, select } from "@inquirer/prompts";
import * as editor from "../../db/memory/edit_account.js";

export const handleEditName = async (db, userId) => {
  const newName = await input({ message: "Enter your name:" });
  return editor.editName(db, userId, newName);
};

export const handleAddBio = async (db, userId) => {
  const bio = await input({ message: "Write about yourself:" });
  return editor.addBio(db, userId, bio);
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
  return editor.editGender(db, userId, gender);
};

export const handleEditDOB = async (db, userId) => {
  const dob = await input({
    message: "Enter your date of birtht in dd-mm-yyyy format:",
    required: true,
  });

  return editor.editDOB(db, userId, dob);
};

export const handleEditInterests = async (db, userId) => {
  const dob = await input({
    message: "Enter your interest(hobby) upto 5:",
    required: true,
  });

  return editor.editDOB(db, userId, dob);
};
