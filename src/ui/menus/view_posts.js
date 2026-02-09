import { select, Separator } from "@inquirer/prompts";
import { reactionHandler } from "./reactions.js";

const drawBottomLine = () => {
  const { columns } = Deno.consoleSize();
  console.log("-".repeat(columns));
  console.log();
};

const displayPost = (post, author) => {
  const { title, description, tags } = post;

  console.log(`\x1b[1;32m${title}\n\x1b[0m`); // green color title
  console.log(`${description}\n`);
  console.log(`Autor: ${author} | Tags: ${tags.join(", ")} | ❤️ 37 | 💬 23`);

  drawBottomLine();
};

export const showSinglePost = (db, postId) => {
  const post = db.posts.find(({ id }) => id === postId);

  const author = db.users.find(({ id }) => id === post.createdBy).username;

  displayPost(post, author);
};

const postReactions = [
  { name: "React To Post", value: "reaction" },
  { name: "Comment On Post", value: "comment" },
  new Separator(),
  { name: "Back", value: "back" },
];

export const handleSinglePost = async (db, userId, postId) => {
  while (true) {
    console.clear();
    showSinglePost(db, postId);
    const type = await select({
      message: "What next...👀",
      choices: postReactions,
    });

    if (type === "back") return;

    await reactionHandler(db, userId, postId, type);
  }
};

const formatPost = (title, author, likes) => {
  return `${title}\n  -Posted By: ${author} | ❤️: ${likes}\n`;
};

const getPosts = (db) => {
  const posts = db.posts.map((post) => {
    const author = db.users.find(({ id }) => id === post.createdBy).username;
    const header = formatPost(post.title, author, 10);

    return { name: header, value: post.id };
  });

  return posts;
};

const postOptions = (db) => {
  const posts = getPosts(db);
  const choices = [
    ...posts,
    new Separator(),
    { name: "Back", value: "back" },
  ];

  return choices;
};

export const viewPosts = async (db, user) => {
  while (true) {
    const postId = await select({
      message: "Select a post you want to view:\n",
      choices: postOptions(db),
      pageSize: 25,
    });

    if (postId === "back") return;

    await handleSinglePost(db, user.id, postId);
  }
};
