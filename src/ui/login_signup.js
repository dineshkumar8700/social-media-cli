import { input, select } from "@inquirer/prompts";
import { login, signup } from "../app/login_signup.js";

export const handleSignup = async () => {
  const username = await input({
    message: "username:",
    required: true,
  });
  const password = await input({
    message: "password:",
    required: true,
  });

  return { username, password };
};

export const handleLogin = async () => {
  const username = await input({
    message: "username:",
    required: true,
  });
  const password = await input({
    message: "password:",
    required: true,
  });

  return { username, password };
};

export const loginAndSignup = async () => {
  const choice = await select({
    message: "Start using app by:",
    choices: [
      {
        name: "Login",
        value: login,
        description: "for existing user",
      },
      {
        name: "Signup",
        value: signup,
        description: "for new user",
      },
    ],
  });

  return choice();
};
