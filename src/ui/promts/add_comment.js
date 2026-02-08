import { input } from "@inquirer/prompts";
import { addComment } from "../../db/memory/reactions.js";

export const handleAddComment = async (db, user, postId) => {
  const text = await input({
    message: "Write your thoughts on this post:",
    required: true,
  });

  const comment = { text, userId: user.id, postId };

  return addComment(db, comment);
};
