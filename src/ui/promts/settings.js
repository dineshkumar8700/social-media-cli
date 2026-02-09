import { checkbox, input, select } from "@inquirer/prompts";
import * as editor from "../../db/memory/edit_account.js";

const takeUserInput = async (message) => {
  const value = await input({ message, required: true });

  return value;
};

export const handleEditName = async (db, userId) => {
  const newName = await takeUserInput("Enter your name:");
  return editor.editName(db, userId, newName);
};

export const handleAddBio = async (db, userId) => {
  const bio = await takeUserInput("Write about yourself:");
  return editor.addBio(db, userId, bio);
};

export const handleEditDOB = async (db, userId) => {
  const dob = await takeUserInput("Enter your DOB in dd-mm-yyyy format:");
  return editor.editDOB(db, userId, dob);
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

const availableInterests = [
  { name: "Sports", value: "sports" },
  { name: "Technology", value: "technology" },
  { name: "Science", value: "science" },
  { name: "CS", value: "CS" },
  { name: "Business", value: "business" },
  { name: "Money", value: "money" },
  { name: "Entrepreneurship", value: "entrepreneurship" },
];

export const handleEditInterests = async (db, userId) => {
  const interests = await checkbox({
    message: "Choose your interests:",
    choices: availableInterests,
  });

  return editor.editInterests(db, userId, interests);
};
