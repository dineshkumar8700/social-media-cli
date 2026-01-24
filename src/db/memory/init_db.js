export const createMemoryDB = () => ({});

export const initMemoryDB = (db) => {
  db.users = [];
  db.posts = [];
  db.currentUserId = 1;
  db.currentPostId = 1;
};
