export const editName = (db, userId, newName) => {
  const index = db.users.findIndex((user) => user.id = userId);

  db.users[index].name = newName;
  console.log(db.users);

  return "✅ Name changed successfully";
};

export const addBio = (db, userId, bio) => {
  const index = db.users.findIndex((user) => user.id = userId);

  db.users[index].bio = bio;
  console.log(db.users);

  return "✅ Bio changed successfully";
};

export const editGender = (db, userId, gender) => {
  const index = db.users.findIndex((user) => user.id = userId);

  db.users[index].gender = gender;
  console.log(db.users);

  return "✅ Gender changed successfully";
};

export const editDOB = (db, userId, dob) => {
  const index = db.users.findIndex((user) => user.id = userId);

  db.users[index].dob = dob;
  console.log(db.users);

  return "✅ DOB changed successfully";
};
