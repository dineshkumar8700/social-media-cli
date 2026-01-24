import { input } from "@inquirer/prompts";

const validatePostInfo = (text, name, length) => {
  if (!text.trim()) return `${name} cannot be empty`;

  if (text.trim().length < length) {
    return `${name} must be at least ${length} characters`;
  }
};

export const handleCreatePost = async () => {
  const title = (await input({
    message: "Enter post title",
    validate(title) {
      return validatePostInfo(title, "title", 3) || true;
    },
  })).trim();

  const description = (await input({
    message: "Enter post description",
    validate(description) {
      return validatePostInfo(description, "description", 10) || true;
    },
  })).trim();

  const rawTags = (await input({
    message: "Enter tags (space separated, optional)",
  })).trim();

  const tags = rawTags ? [...new Set(rawTags.split(/\s+/))] : [];

  return { title, description, tags };
};
