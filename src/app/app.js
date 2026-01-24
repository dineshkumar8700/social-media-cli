import { dashboardOptions } from "../ui/dashboard.js";
import { loginAndSignup } from "../ui/login_signup.js";

export const showDashboard = async ({ username }) => {
  console.clear();
  console.log(`Welcome back ${username}\n`);

  while (true) {
    const choice = await dashboardOptions();
    if (choice === "exit") return;
    console.clear();
    await choice();
  }
};

export const startApp = async () => {
  const user = await loginAndSignup();
  showDashboard(user);
  // showDashboard({ username: "dinesh" });
};
