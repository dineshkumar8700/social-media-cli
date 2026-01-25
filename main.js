import { showDashboard } from "./src/app/dashboard.js";
import { loginAndSignup } from "./src/ui/login_signup.js";
import { memoryDB } from "./db/in_memory.js";

const main = async () => {
  console.clear();
  console.log("Welcome to CLI Social Media App\n");
  const user = await loginAndSignup();
  showDashboard(memoryDB, user);
  // showDashboard({ id: 100, username: "dinesh", password: "1234" });
};

main();
