import { select, Separator } from "@inquirer/prompts";
import * as handler from "../promts/settings.js";
import { showInterests } from "./interests.js";

const personDetails = [
  { name: "Name", value: handler.handleEditName },
  { name: "Add Bio", value: handler.handleAddBio },
  { name: "DOB", value: handler.handleEditDOB },
  { name: "Gender", value: handler.handleEditGender },
  { name: "Interests", value: handler.handleEditInterests },
  new Separator(),
  { name: "Back ↩", value: "back" },
];

export const editGeneralInfo = async (db, user) => {
  console.clear();

  while (true) {
    const choice = await select({
      message: "Choose information to edit\n",
      choices: personDetails,
      pageSize: 10,
    });

    if (choice === "back") return;

    const result = await choice(db, user.id);
    console.log(result);
  }
};
