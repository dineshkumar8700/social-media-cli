import { input, select, Separator } from "@inquirer/prompts";
import * as validation from "../../db/memory/validation.js";
import { addUserToDB, getUserId } from "../../db/memory/manage_users.js";

export const handleSignup = async () => {
  console.clear();
  console.log("You are just one step away from using our app 😃\n");

  const username = await input({
    message: "Choose username:",
    required: true,
    validate: (username) => validation.isUsernameUnique(username),
  });

  const password = await input({
    message: "Choose password:",
    required: true,
    validate: (password) => validation.validatePassword(password),
  });

  const id = addUserToDB({ username, password });
  return { id, username, password };
};

export const handleLogin = async () => {
  console.clear();
  console.log("Glad to see you back 👋 Login and start using app 😃\n");

  const username = await input({
    message: "Enter username:",
    required: true,
    validate: (username) => validation.isUsernameExists(username),
  });

  const password = await input({
    message: "Enter password:",
    required: true,
    validate: (password) => validation.isPasswordCorrect(username, password),
  });

  const id = getUserId(username);
  return { id, username, password };
};

const authenticationChoices = [
  { name: "Login", value: handleLogin, description: "For existing user" },
  { name: "Signup", value: handleSignup, description: "For new user" },
  new Separator(),
  { name: "Exit", value: "exit", description: "Leave the app" },
];

export const authentication = async () => {
  const choice = await select({
    message: "Start using app by:",
    choices: authenticationChoices.map((choice) => choice),
  });

  return choice;
};
