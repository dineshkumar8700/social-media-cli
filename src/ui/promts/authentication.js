import { input, select, Separator } from "@inquirer/prompts";
import { login, signup } from "../../app/authentication.js";

export const handleSignup = async () => {
  const username = await input({
    message: "Choose username:",
    required: true,
  });

  const password = await input({
    message: "Choose password:",
    required: true,
  });

  return { username, password };
};

export const handleLogin = async () => {
  const username = await input({
    message: "Enter username:",
    required: true,
  });

  const password = await input({
    message: "Enter password:",
    required: true,
  });

  return { username, password };
};

const authenticationChoices = [
  { name: "Login", value: login, description: "For existing user" },
  { name: "Signup", value: signup, description: "For new user" },
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
