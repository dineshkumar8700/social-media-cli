import { input } from "@inquirer/prompts";
import { createPost } from "../../db/memory/posts.js";

const validatePostInfo = (text, name, length) => {
  if (!text.trim()) return `${name} cannot be empty`;

  if (text.trim().length < length) {
    return `${name} must be at least ${length} characters`;
  }
};

const getPostTitle = async () => {
  const title = (await input({
    message: "Enter post title:",
    validate: (title) => validatePostInfo(title, "title", 3) || true,
  })).trim();

  return title;
};

const getPostDescription = async () => {
  const description = (await input({
    message: "Enter post title:",
    validate: (desc) => validatePostInfo(desc, "description", 10) || true,
  })).trim();

  return description;
};

const getTags = async () => {
  const rawTags = (await input({
    message: "Enter tags (space separated, optional):",
  })).trim();

  const tags = rawTags ? [...new Set(rawTags.split(/\s+/))] : [];

  return tags;
};

export const handleCreatePost = async (db, user) => {
  const title = await getPostTitle();
  const description = await getPostDescription();
  const tags = await getTags();

  const post = { createdBy: user.id, title, description, tags };

  return createPost(db, post);
};
