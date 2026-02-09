import { input } from "@inquirer/prompts";
import { createPost } from "../../db/memory/posts.js";

const validatePostDetail = (text, name, minChar) => {
  if (!text.trim()) return `${name} cannot be empty`;

  if (text.trim().length < minChar) {
    return `${name} must be at least ${minChar} characters`;
  }
};

const getPostDetail = async (name, minChar) => {
  const detail = (await input({
    message: `Enter post ${name}:`,
    validate: (value) => validatePostDetail(value, name, minChar) || true,
  })).trim();

  return detail;
};

const getTags = async () => {
  const rawTags = (await input({
    message: "Enter tags (space separated, optional):",
  })).trim();

  const tags = rawTags ? [...new Set(rawTags.split(/\s+/))] : [];

  return tags;
};

export const handleCreatePost = async (db, user) => {
  const title = await getPostDetail("title", 3);
  const description = await getPostDetail("description", 10);
  const tags = await getTags();

  const post = { createdBy: user.id, title, description, tags };

  return createPost(db, post);
};
