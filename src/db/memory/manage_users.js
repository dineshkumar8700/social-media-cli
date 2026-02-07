import { memoryDB as db } from "../../../db/in_memory.js";

export const addUserToDB = (user) => {
  const id = db.counters.userId++;
  db.users.push({ id, ...user });

  return id;
};

export const getUserId = (username) => {
  const user = db.users.find((user) => user.username = username);

  return user.id;
};
