const separator = () => {
  const { columns } = Deno.consoleSize();
  console.log("-".repeat(columns));
  console.log();
};

const displayPost = (post, author) => {
  console.log(post.title);
  console.log(post.description);
  console.log("\nAuthor:", author, "| Tags:", post.tags.join(", "));
  separator();
};

export const viewPosts = (db) => {
  const posts = db.posts.map(({ title, description, tags, createdBy }) => {
    return { title, description, tags, createdBy };
  });

  posts.forEach((post) => {
    const author = db.users.find((user) => user.id === post.createdBy).username;
    displayPost(post, author);
  });
};

export const createPost = (db, post) => {
  const id = db.counters.postId++;

  db.posts.push({ id, ...post });

  console.log(`✅ ${post.title} posted successfully`);
};
