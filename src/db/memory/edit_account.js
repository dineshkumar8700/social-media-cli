export const editName = (db, userId, newName) => {
  const index = db.users.findIndex((user) => user.id = userId);

  db.users[index].name = newName;
  console.log("✅ Name changed successfully");
  console.log(db.users);
};

export const addBio = (db, userId, bio) => {
  const index = db.users.findIndex((user) => user.id = userId);

  db.users[index].bio = bio;
  console.log("✅ Bio Added changed successfully");
  console.log(db.users);
};
