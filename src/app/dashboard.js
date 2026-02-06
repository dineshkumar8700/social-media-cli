import { dashboardOptions } from "../ui/menus/dashboard.js";

const showWelcomeMsg = (username) => {
  console.clear();
  console.log(`👋 Welcome back ${username}`);
};

export const dashboard = async (DB, user) => {
  showWelcomeMsg(user.username);

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
