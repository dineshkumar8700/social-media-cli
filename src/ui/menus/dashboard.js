import { select, Separator } from "@inquirer/prompts";
import { viewPosts } from "./view_posts.js";
import { profile } from "./profile.js";
import { createPost } from "./create_post.js";

const options = [
  { name: "View Posts", value: viewPosts },
  { name: "Create Post", value: createPost },
  { name: "My Profile", value: profile },
  { name: "Find Friend", value: "findFriend", disabled: true },
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
