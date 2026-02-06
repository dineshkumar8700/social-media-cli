const options = [
  { name: "View My Posts", value: viewPosts },
  { name: "Create New Post", value: handleCreatePost },
  { name: "Find Friend", value: "findFriend", disabled: true },
  { name: "Settings", value: "settings" },
  new Separator(),
  { name: "Back ↩", value: "back" },
];

export const profile = async () => {
  while (true) {
    const choice = await select({
      message: "Manage your profile as you want 😃\n",
      choices: options,
      pageSize: 10,
    });

    if (choice === "back") return;

    choice();
  }
};
