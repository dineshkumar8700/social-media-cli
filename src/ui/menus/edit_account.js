import { select, Separator } from "@inquirer/prompts";
import * as handler from "../promts/settings.js";

// const personDetails = [
//   { name: "Name", value: handler.handleEditName },
//   { name: "Add Bio", value: handler.handleAddBio },
//   { name: "DOB", value: "dob", disabled: true },
//   { name: "Gender", value: handler.handleEditGender },
//   { name: "Interests", value: "interest", disabled: true },
//   new Separator(),
//   { name: "Back ↩", value: "back" },
// ];

// export const editPersonalDetails = async (db, user) => {
//   while (true) {
//     const choice = await select({
//       message: "Choose information to edit\n",
//       choices: personDetails,
//       pageSize: 10,
//     });

//     if (choice === "back") return editAccountCategory();

//     const result = await choice(db, user.id);
//     console.log(result);
//   }
// };

// export const editUsernameAndPassword = async (db, user) => {
//   const choice = await select({
//     message: "Choose information to edit\n",
//     choices: [
//       { name: "Change Username", value: "changeUsername" },
//       { name: "Change Password", value: "changePassword" },
//       new Separator(),
//       { name: "Back ↩", value: "back" },
//     ],
//   });

//   return choice(db, user);
// };

// export const editAccountCategory = async (db, user) => {
//   const choice = await select({
//     message: "What you want to edit\n",
//     choices: [
//       { name: "Personal Details", value: editPersonalDetails },
//       {
//         name: "Password & Security",
//         value: editUsernameAndPassword,
//         disabled: true,
//       },
//       new Separator(),
//       { name: "Back ↩", value: "back" },
//     ],
//   });

//   if (choice === "back") return;
//   return choice(db, user);
// };
