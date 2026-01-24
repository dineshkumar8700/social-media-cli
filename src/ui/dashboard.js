import { select, Separator } from "@inquirer/prompts";
import { viewPosts } from "../db/memory/posts.js";
import { handleCreatePost } from "./create_post.js";

const options = [
  { name: "View Posts", value: viewPosts },
  { name: "Create Post", value: handleCreatePost },
  { name: "Edit Account", value: "editAccount" },
  { name: "Search Friend", value: "searchFriend" },
  { name: "Settigs", value: "settigs" },
  new Separator(),
  { name: "Logout", value: "logout" },
];

export const dashboardOptions = async () => {
  const choice = await select({
    message: "What's in your mind\n",
    choices: options,
    pageSize: 10,
  });

  return choice;
};
