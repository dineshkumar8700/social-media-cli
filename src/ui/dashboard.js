import { select, Separator } from "@inquirer/prompts";
import { createPost, viewPosts } from "../app/dashboard.js";

const options = [
  { name: "View Posts", value: viewPosts },
  { name: "Create Post", value: createPost },
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
