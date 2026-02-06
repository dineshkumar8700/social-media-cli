import { addUserToDB } from "../db/memory/manage_users.js";
import { isPasswordCorrect } from "../db/memory/validation.js";
import { handleLogin, handleSignup } from "../ui/promts/authentication.js";

export const signup = async () => {
  console.clear();
  console.log("You are just one step away from using our app 😃\n");

  const user = await handleSignup();

  addUserToDB(user);
  return user;
};

export const login = async () => {
  console.clear();
  console.log("Glad to see you back 👋 Login and start using app 😃\n");

  const user = await handleLogin();
  return user;
};
