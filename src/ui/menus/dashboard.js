import { select, Separator } from "@inquirer/prompts";
import { viewPosts } from "../../db/memory/posts.js";
import { handleCreatePost } from "../promts/create_post.js";

const options = [
  { name: "View Posts", value: viewPosts },
  { name: "Create Post", value: handleCreatePost },
  { name: "My Account", value: "settigs", disabled: true },
  { name: "Find Friend", value: "settigs", disabled: true },
  { name: "Settigs", value: "settigs", disabled: true },
  new Separator(),
  { name: "Logout", value: "logout" },
];

export const dashboardOptions = async () => {
  const choice = await select({
    message: "What's on your mind today... 👀\n",
    choices: options,
    pageSize: 10,
  });

  return choice;
};
