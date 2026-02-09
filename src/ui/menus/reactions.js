import { input, select, Separator } from "@inquirer/prompts";
import { addComment, addReaction } from "../../db/memory/reactions.js";

export const getCommentFromUser = async () => {
  const text = await input({
    message: "Write your thoughts on this post:",
    required: true,
  });

  return text;
};

export const getReactionFromUser = async () => {
  const type = await select({
    message: "Write your thoughts on this post:",
    choices: [
      { name: "Like ❤️", value: "like" },
      { name: "Dislike 👎", value: "dislike" },
      new Separator(),
      { name: "Back", value: "back" },
    ],
    required: true,
  });

  return type;
};

const getUserChoice = async (type) => {
  const choice = await select({
    message: "Choose one option:",
    choices: [
      { name: `Add ${type}`, value: "add" },
      new Separator(),
      { name: "Back", value: "back" },
    ],
  });

  return choice;
};

export const handleAddComment = async (db, userId, postId) => {
  const text = await getCommentFromUser();
  const comment = { userId, postId, text };
  await addComment(db, comment);
};

export const handleAddReaction = async (db, userId, postId) => {
  const type = await getReactionFromUser();
  const reaction = { userId, postId, type };
  await addReaction(db, reaction);
};

export const reactionHandler = async (db, userId, postId, type) => {
  console.clear();

  while (true) {
    const choice = await getUserChoice(type);

    if (choice === "back") return;

    type === "reaction"
      ? await handleAddReaction(db, userId, postId)
      : await handleAddComment(db, userId, postId);
  }
};
