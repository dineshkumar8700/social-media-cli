import { select } from "@inquirer/prompts";
import { handleCreatePost } from "../promts/create_post.js";
import { menuFooter } from "../../utils/menu_footer.js";

const menu = [
  { name: "Create", value: handleCreatePost },
  ...menuFooter(),
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
