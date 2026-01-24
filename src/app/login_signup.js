import { addUserToDB, validateUser } from "../db/db.js";
import { handleLogin, handleSignup } from "../ui/login_signup.js";

export const signup = async () => {
  console.log("Create new account\n");
  const user = await handleSignup();

  addUserToDB(user);
  return login();
};

export const login = async () => {
  console.log("Login into your account\n");

  const user = await handleLogin();

  if (validateUser(user)) {
    return user;
  } else {
    console.log("Wrong username or password. Try again\n");
    return login();
  }
};
