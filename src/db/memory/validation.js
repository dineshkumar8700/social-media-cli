import { memoryDB as DB } from "../../../db/in_memory.js";

export const addUserToDB = (user) => {
  const id = DB.currentUserId++;
  DB.users.push({ id, ...user });
};

export const validateUser = ({ username, password }) => {
  const index = DB.users.findIndex((user) => user.username === username);

  if (index === -1) {
    return { hasError: true, message: "no such username found" };
  }

  if (DB.users[index].password !== password) {
    return { hasError: true, message: "wrong password. Try again" };
  }

  return { hasError: false, message: "success", user: DB.users[index] };
};
