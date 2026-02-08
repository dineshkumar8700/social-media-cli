import { input, select, Separator } from "@inquirer/prompts";
import { addComment, addReaction } from "../../db/memory/reactions.js";

export const getCommentFromUser = async (db, user, postId) => {
  const text = await input({
    message: "Write your thoughts on this post:",
    required: true,
  });

  const comment = { text, userId: user.id, postId };

  return addComment(db, comment);
};

export const handleAddComment = async (db, user, postId) => {
  console.clear();

  while (true) {
    const choice = await select({
      message: "Choose one option",
      choices: [
        { name: "Add Comment", value: getCommentFromUser },
        new Separator(),
        { name: "Back", value: "back" },
      ],
    });

    if (choice === "back") return;

    await choice(db, user, postId);
  }
};

export const handleAddReaction = async (db, user, postId) => {
  console.clear();

  while (true) {
    const type = await select({
      message: "Choose one option",
      choices: [
        { name: "Like ❤️", value: "like" },
        { name: "Dislike 👎", value: "dislike" },
        new Separator(),
        { name: "Back", value: "back" },
      ],
    });

    if (type === "back") return;

    await addReaction(db, { userId: user.id, postId, type });
  }
};
