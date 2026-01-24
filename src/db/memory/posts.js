export const viewPosts = (db) => {
  const posts = db.posts.map(({ title, description, tags, createdBy }) => {
    return { title, description, tags, createdBy };
  });

  return posts;
};

export const createPost = (db, createdBy, title, description, tags) => {
  const id = db.currentPostId++;
  const post = { id, createdBy, title, description, tags };

  db.posts.push(post);
  console.log(`✅ ${post.title} Posted successfully`);
};
