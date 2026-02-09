import { Separator } from "@inquirer/prompts";

export const menuFooter = (text = "Back ↩") => {
  return [new Separator(), { name: text, value: "back" }];
};
