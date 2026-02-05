import { memoryDB as DB } from "../../../db/in_memory.js";

export const validateExistingUser = ({ username, password }) => {
  const index = DB.users.findIndex((user) => user.username === username);

  if (index === -1) {
    return { hasError: true, message: "no such username found" };
  }

  if (DB.users[index].password !== password) {
    return { hasError: true, message: "wrong password. Try again" };
  }

  return { hasError: false, message: "success", user: DB.users[index] };
};

export const validateNewUser = ({ username, password }) => {
  const index = DB.users.findIndex((user) => user.username === username);

  if (index !== -1) {
    return { hasError: true, message: "Username already taken." };
  }

  if (password.length < 8) {
    return { hasError: true, message: "Password must be 8 digits" };
  }

  return { hasError: false, message: "success" };
};
