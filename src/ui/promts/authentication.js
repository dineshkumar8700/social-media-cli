import { input, select, Separator } from "@inquirer/prompts";
import * as validation from "../../db/memory/validation.js";
import { addUserToDB, getUserId } from "../../db/memory/manage_users.js";

const getUsername = async (message, validator) => {
  const username = await input({
    message,
    required: true,
    validate: (username) => validator(username),
  });

  return username;
};

const getPassword = async (message, validator) => {
  const password = await input({
    message,
    required: true,
    validate: (password) => validator(password),
  });

  return password;
};

export const handleSignup = async () => {
  console.clear();
  console.log("You are just one step away from using our app 😃\n");

  const username = await getUsername(
    "Choose username:",
    validation.isUsernameUnique,
  );
  const password = await getPassword(
    "Choose password",
    validation.validatePassword,
  );

  const id = addUserToDB({ username, password });
  return { id, username, password };
};

export const handleLogin = async () => {
  console.clear();
  console.log("Glad to see you back 👋 Login and start using app 😃\n");

  const username = await getUsername(
    "Enter username:",
    validation.isUsernameExists,
  );

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
