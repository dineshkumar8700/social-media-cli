import { memoryDB as DB } from "../../../db/in_memory.js";

export const addUserToDB = (user) => {
  users.push(user);
};

export const validateUser = ({ username, password }) => {
  const index = DB.users.findIndex((user) => user.username === username);

  if (index === -1) {
    return { hasError: true, message: "No such username found" };
  }

  if (DB.users[index].password !== password) {
    return { hasError: true, message: "Wrong password. Try again" };
  }

  return { hasError: false, message: "Login Successfully" };
};
