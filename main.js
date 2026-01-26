import { showDashboard } from "./src/app/dashboard.js";
import { loginAndSignup } from "./src/ui/promts/login_signup.js";
import { memoryDB } from "./db/in_memory.js";

const main = async () => {
  console.clear();
  console.log("Welcome to CLI Social Media App\n");
  // const user = await loginAndSignup();
  // showDashboard(memoryDB, user);
  showDashboard(memoryDB, { id: 1, username: "a", password: "a" });
};

main();
