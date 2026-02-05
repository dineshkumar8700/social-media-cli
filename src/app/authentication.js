import { addUserToDB } from "../db/memory/manage_users.js";
import * as validator from "../db/memory/validation.js";
import { handleLogin, handleSignup } from "../ui/promts/authentication.js";

export const signup = async () => {
  console.clear();
  console.log("You are just one step away from using our app 😃\n");

  while (true) {
    const user = await handleSignup();
    const status = validator.validateNewUser(user);

    if (!status.hasError) {
      addUserToDB(user);
      return user;
    }

    console.log(`${status.message}\n`);
  }
};

export const login = async () => {
  console.clear();
  console.log("Glad to see you back 👋 Login and start using app 😃\n");

  while (true) {
    const user = await handleLogin();
    const loginStatus = validator.validateExistingUser(user);

    if (!loginStatus.hasError) {
      return loginStatus.user;
    }

    console.log(`${loginStatus.message}\n`);
  }
};
