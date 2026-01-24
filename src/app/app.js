import { dashboardOptions } from "../ui/dashboard.js";
import { memoryDB } from "../../db/in_memory.js";

export const showDashboard = async (user) => {
  console.clear();
  console.log(`Welcome back ${user.username}\n`);

  while (true) {
    const choice = await dashboardOptions();
    if (choice === "logout") return;

    console.clear();
    const result = await choice(memoryDB, user);

    if (result) {
      console.table(result);
    }
  }
};
