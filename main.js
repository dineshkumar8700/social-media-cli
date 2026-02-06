import { dashboard } from "./src/app/dashboard.js";
import { authentication } from "./src/ui/promts/authentication.js";
import { memoryDB } from "./db/in_memory.js";

const main = async () => {
  console.clear();
  console.log("Welcome to CLI Social Media App\n");

  // const authenticationChoice = await authentication();
  // if (authenticationChoice === "exit") return;

  // const user = await authenticationChoice();
  // dashboard(memoryDB, user);

  dashboard(memoryDB, { id: 1, username: "a", password: "a" });
};

main();
