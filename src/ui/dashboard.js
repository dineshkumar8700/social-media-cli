import { select } from "@inquirer/prompts";
import { createPost, viewPosts } from "../app/dashboard.js";

const choices = [
  { name: "view posts", value: viewPosts },
  { name: "create post", value: createPost },
  { name: "edit account", value: "editAccount" },
  { name: "search friend", value: "searchFriend" },
  { name: "settigs", value: "settigs" },
  { name: "logout", value: "logout" },
  { name: "exit", value: "exit" },
];

export const dashboardOptions = async () => {
  const choice = await select({
    message: "What's in your mind",
    choices,
  });

  return choice;
};
