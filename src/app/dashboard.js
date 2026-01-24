import { posts } from "../../db/in_memory.js";
import { handleCreatePost } from "../ui/create_post.js";

export const viewPosts = () => {
  console.table(posts);
};

export const createPost = async () => {
  const post = await handleCreatePost();
  posts.push(post);
  console.log(`✅ ${post.title} Posted successfully`);
};
