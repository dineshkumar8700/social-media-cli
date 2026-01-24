import { showDashboard } from "./src/app/app.js";
import { loginAndSignup } from "./src/ui/login_signup.js";

const main = async () => {
  console.clear();
  console.log("Welcome to CLI Social Media App\n");
  const user = await loginAndSignup();
  showDashboard(user);
  // showDashboard({ username: "dinesh" });
};

main();
