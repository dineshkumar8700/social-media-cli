import { select, Separator } from "@inquirer/prompts";
import { settings } from "./settings.js";
import { createPost } from "./create_post.js";
import { viewPosts } from "./view_posts.js";

const options = [
  { name: "View My Posts", value: viewPosts },
  { name: "Create New Post", value: createPost },
  { name: "Find Friend", value: "findFriend", disabled: true },
  { name: "Settings", value: settings },
  new Separator(),
  { name: "Back ↩", value: "back" },
];

export const profile = async (db, user) => {
  while (true) {
    const choice = await select({
      message: "Manage your profile as you want 😃\n",
      choices: options,
      pageSize: 10,
    });

    if (choice === "back") return;

    await choice(db, user);
  }
};
