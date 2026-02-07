import { select, Separator } from "@inquirer/prompts";
import { handleCreatePost } from "../promts/create_post.js";

const menu = [
  { name: "Create", value: handleCreatePost },
  new Separator(),
  { name: "Back", value: "back" },
];

export const createPost = async (db, user) => {
  console.clear();

  while (true) {
    const choice = await select({
      message: "Choose one option:",
      choices: menu,
    });

    if (choice === "back") return;

    await choice(db, user);
  }
};
