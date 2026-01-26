import { dashboardOptions } from "../ui/menus/dashboard.js";

export const showDashboard = async (DB, user) => {
  console.clear();
  console.log(`Welcome back ${user.username}\n`);

  while (true) {
    const choice = await dashboardOptions();
    if (choice === "logout") return;

    console.clear();
    const result = await choice(DB, user);

    if (result) {
      console.table(result);
    }
  }
};
