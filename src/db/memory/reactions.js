export const addComment = (db, comment) => {
  const id = db.counters.commentId++;
  const createdAt = Date.now();

  db.comments.push({ id, ...comment, createdAt });

  console.log(`✅ Comment added successfully`);
};

export const addReaction = (db, reaction) => {
  const { userId, postId, type } = reaction;
  const id = db.counters.reactionId++;
  const createdAt = Date.now();

  const index = db.reactions.findIndex((react) =>
    react.postId === postId && react.userId === userId
  );

  index === -1
    ? db.reactions.push({ id, postId, userId, type, createdAt })
    : db.reactions[index]["type"] = type;

  console.log(`✅ Reaction added successfully`);
};
