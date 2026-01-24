import { users } from "../../db/in_memory.js";

export const addUserToDB = (user) => {
  users.push(user);
};

export const validateUser = ({ username, password }) => {
  const index = users.findIndex((user) => user.username === username);

  if (index === -1) {
    return { hasError: true, message: "No such username found" };
  }

  if (users[index].password !== password) {
    return { hasError: true, message: "Wrong password. Try again" };
  }

  return { hasError: false, message: "Login Successfully" };
};
