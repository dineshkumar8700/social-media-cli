import { users } from "../../db/in_memory.js";

export const addUserToDB = (user) => {
  users.push(user);
};

export const validateUser = ({ username, password }) =>
  users.some((user) =>
    user.username === username && user.password === password
  );
