import { select, Separator } from "@inquirer/prompts";

const separator = () => {
  const { columns } = Deno.consoleSize();
  console.log("-".repeat(columns));
  console.log();
};

const formatSinglePost = (post, author) => {
  const { title, description, tags } = post;

  console.log(`\x1b[1;32m${title}\n\x1b[0m`); // green color title
  console.log(`${description}\n`);
  console.log(
    `\x1b[1;37mAutor: ${author} | Tags: ${
      tags.join(", ")
    } | ❤️ 37 | 💬 23\x1b[0m`,
  );

  separator();
};

export const showSinglePost = (db, postId) => {
  const post = db.posts.find(({ id }) => id === postId);

  const author = db.users.find(({ id }) => id === post.createdBy).username;

  formatSinglePost(post, author);
};

export const handleSinglePost = async (db, postId) => {
  while (true) {
    console.clear();
    showSinglePost(db, postId);
    const choice = await select({
      message: "What next",
      choices: [
        { name: "React To Post", value: "react" },
        { name: "Comment On Post", value: "comment" },
        new Separator(),
        { name: "Back", value: "back" },
      ],
    });

    if (choice === "back") return;
  }
};

const getPosts = (db) => {
  const posts = [];

  db.posts.forEach((post) => {
    const author = db.users.find(({ id }) => id === post.createdBy).username;
    posts.push({
      name: `${post.title}\n  -Posted By: ${author} | ❤️: 10\n`,
      value: post.id,
    });
  });

  return posts;
};

const postMenu = (db) => {
  const posts = getPosts(db);
  const choices = [
    ...posts,
    new Separator(),
    { name: "Back", value: "back" },
  ];

  return choices;
};

export const viewPosts = async (db) => {
  while (true) {
    const postId = await select({
      message: "Select a post you want to view:",
      choices: postMenu(db),
      pageSize: 25,
      
    });

    if (postId === "back") return;

    await handleSinglePost(db, postId);
  }
};
