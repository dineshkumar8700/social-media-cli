import { input, select } from "@inquirer/prompts";

const users = [];

const addUserToDB = (username, password) => {
  users.push({ username, password });
};

const validateUser = (username, password) =>
  users.some((user) =>
    user.username === username && user.password === password
  );

const showDashboard = (username) => {
  console.clear();
  console.log(`Welcome back ${username}`);
};

const signup = async () => {
  console.log("Create new account");

  const username = await input({
    message: "choose your username:",
    required: true,
  });
  const password = await input({
    message: "set a password:",
    required: true,
  });

  addUserToDB(username, password);
  return login();
};

const login = async () => {
  console.log("Login into your account\n");

  const username = await input({
    message: "enter your user name:",
    required: true,
  });
  const password = await input({
    message: "enter your password:",
    required: true,
  });

  if (validateUser(username, password)) {
    return showDashboard(username);
  } else {
    console.log("Invalid username or password. Try again");
    return login();
  }
};

export const startApp = async () => {
  const choice = await select({
    message: "Start using app by:",
    choices: [
      {
        name: "Login",
        value: "login",
        description: "for existing user",
      },
      {
        name: "Signup",
        value: "signup",
        description: "for new user",
      },
    ],
  });

  return choice === "login" ? login() : signup();
};
