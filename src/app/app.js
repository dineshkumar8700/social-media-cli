import { loginAndSignup } from "../ui/login_signup.js";

export const showDashboard = ({ username }) => {
  console.clear();
  console.log(`Welcome back ${username}`);
};

export const startApp = async () => {
  const user = await loginAndSignup();
  showDashboard(user);
};
