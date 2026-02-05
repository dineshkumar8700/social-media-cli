import { select, Separator } from "@inquirer/prompts";
import { viewPosts } from "../../db/memory/posts.js";
import { handleCreatePost } from "../promts/create_post.js";
import { editAccountCategory } from "./edit_account.js";

const options = [
  { name: "View Posts", value: viewPosts },
  { name: "Create Post", value: handleCreatePost },
  { name: "Edit Account", value: editAccountCategory },
  { name: "Search Friend", value: "searchFriend", disabled: true },
  { name: "Settigs", value: "settigs", disabled: true },
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
