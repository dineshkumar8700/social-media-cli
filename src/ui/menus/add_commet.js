import { select, Separator } from "@inquirer/prompts";
import { handleAddComment } from "../promts/add_comment.js";

const menu = [
  { name: "Add Comment", value: handleAddComment },
  new Separator(),
  { name: "Back", value: "back" },
];

export const addComment = async (db, user, postId) => {
  console.clear();

  while (true) {
    const choice = await select({
      message: "Choose one option",
      choices: menu,
    });

    if (choice === "back") return;

    await choice(db, user, postId);
  }
};
