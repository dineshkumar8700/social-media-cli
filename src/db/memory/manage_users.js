import { memoryDB as DB } from "../../../db/in_memory.js";

export const addUserToDB = (user) => {
  const id = DB.currentUserId++;
  DB.users.push({ id, ...user });

  return id;
};

export const getUserId = (username) => {
  const user = DB.users.find((user) => user.username = username);

  return user.id;
};
