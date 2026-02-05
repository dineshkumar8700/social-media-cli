import { memoryDB as DB } from "../../../db/in_memory.js";

export const addUserToDB = (user) => {
  const id = DB.currentUserId++;
  DB.users.push({ id, ...user });
};
