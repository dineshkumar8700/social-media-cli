export const createMemoryDB = () => ({});

export const initMemoryDB = (db) => {
  db.users = [];
  db.posts = [];
  db.comments = [];
  db.reactions = [];

  db.counters = {
    userId: 1,
    postId: 1,
    commentId: 1,
    reactionId: 1,
  };
};
