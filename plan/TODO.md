# 📦 CLI Social Media App — Project Todo

---

# ✅ Directory Structure

```
main.js
src/
  app/        → application flow & screen router
  db/         → database layer (queries + schema)
  ui/         → prompts & CLI rendering
test/
db/           → sqlite files (later versions)
```

Rules:

- No DB calls directly from UI
- No prompt logic inside DB layer
- `app/` coordinates everything

---

# ⚙️ Development Tasks

- [x] git init
- [x] deno init
- [x] add assertions library
- [x] add testing/bdd
- [x] setup .gitignore
- [x] install inquirer prompts
- [ ] add seed script for dummy data

---

# 🧪 Script Tasks

- [x] dev → run app
- [x] test → run tests
- [x] test:watch → watch tests
- [x] coverage → coverage summary
- [x] coverage:detail → coverage report
- [ ] clear-db → reset database
- [ ] seed-db → load dummy posts/users

---

# 🚀 ✅ Version 1 — Authentication + Basic Flow

## Goal

User can enter app and reach dashboard.

## ✅ Features

- [x] Program boot entry (main.js)
- [x] Authentication menu (login/signup)
- [x] Signup with username + password
- [x] Login with credential validation
- [x] Redirect to dashboard after auth
- [x] Session state stored in memory
- [x] Show dummy posts after login

## ✅ Validation Rules

- [x] username must be unique
- [x] password min length rule
- [x] reject empty input
- [x] handle wrong password

---

# 🗄 Version 1 — Database (In-Memory)

```js
export const memoryDB = {
  users: [],
  posts: [],
  currentUserId: 1,
  currentPostId: 1,
};
```

Tasks:

- [x] create user insert function
- [x] create user lookup function
- [x] create post insert function
- [x] add update info function

---

# 📝 Version 2 — Posts + Account

## Goal

User can create and manage content.

## Features

- [x] view all posts
- [x] create post
- [x] edit account (username/password)
- [x] logout

## Missing (Must Complete)

- [ ] view my posts only
- [ ] edit my post
- [ ] delete my post
- [ ] pagination (5 posts/page)
- [ ] post ownership check
- [ ] createdAt timestamp

---

# ❤️ Version 3 — Reactions

## Features

- [ ] like post
- [ ] unlike toggle
- [ ] comment on post
- [ ] list comments

## DB Changes

- [ ] likes table/array
- [ ] comments table/array
- [ ] unique like per (user, post)

---

# 👥 Version 4 — Social Layer

- [ ] find friend by username
- [ ] send friend request
- [ ] accept/reject request
- [ ] list friends
- [ ] remove friend

---

# 💾 Version 5 — SQLite Migration

## Goal

Replace memory DB with sqlite.

Tasks:

- [ ] design schema
- [ ] users table
- [ ] posts table
- [ ] comments table
- [ ] likes table
- [ ] migration script
- [ ] db adapter layer

Rule: App layer should not change — only DB layer swaps.

---

# 🧹 Reliability Tasks (You Forgot These)

- [ ] error messages for every failed action
- [ ] empty state screens
- [ ] input trimming
- [ ] duplicate username handling
- [ ] safe exit handling
- [ ] test invalid flows

---

# 🧠 Test Coverage Targets

- [ ] auth functions tested
- [ ] db insert/update/delete tested
- [ ] post ownership tested
- [ ] validation tested
- [ ] edge cases tested

Target: **≥ 80% coverage**

---
