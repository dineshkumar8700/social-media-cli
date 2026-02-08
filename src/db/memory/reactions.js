export const addComment = (db, comment) => {
  const id = db.counters.commentId++;
  const createdAt = Date.now();

  db.comments.push({ id, ...comment, createdAt });

  console.log(`✅ Comment added successfully`);
};
