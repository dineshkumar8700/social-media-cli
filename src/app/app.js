import { dashboardOptions } from "../ui/dashboard.js";

export const showDashboard = async ({ username }) => {
  console.clear();
  console.log(`Welcome back ${username}\n`);

  while (true) {
    const choice = await dashboardOptions();
    if (choice === "logout") return;
    console.clear();
    await choice();
  }
};
