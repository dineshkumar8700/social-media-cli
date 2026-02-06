import { memoryDB as DB } from "../../../db/in_memory.js";

export const isUsernameExists = (username) => {
  const index = DB.users.findIndex((user) => user.username === username);

  return index !== -1 ? true : "no such username found";
};

export const isPasswordCorrect = (username, pass) => {
  const index = DB.users.findIndex((user) => user.username === username);

  return DB.users[index].password === pass ? true : "wrong password.";
};

export const isUsernameUnique = (username) => {
  const index = DB.users.findIndex((user) => user.username === username);

  return index === -1 ? true : "Username already taken.";
};

export const validatePassword = (password) => {
  const length = password.length;

  return length >= 8 ? true : "Password length must be 8 digits";
};
