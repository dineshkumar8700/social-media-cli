# 📱 Social Media CLI App — UI Specification

## ▶️ Start Command

```bash
deno -A main.js
```

---

# 🔐 Screen 1 — Authentication

## Menu

```
Authentication
--------------
→ Login
→ Signup
→ Exit
```

Navigation:

- `Login` → Screen 1.1
- `Signup` → Screen 1.2

---

## 🔑 Screen 1.1 — Login

```
Glad to see you back 😃

Enter username: ________
Enter password: ********
```

Result:

- ✅ Success → Screen 2 (Dashboard)
- ❌ Failure → Show error + retry

---

## 🆕 Screen 1.2 — Signup

```
You are just one step away from using our app 😃

Choose username: ________
Choose password: ********
Confirm password: ********
```

Result:

- ✅ Account created → Screen 2 (Dashboard)
- ❌ Validation error → retry

---

# 🏠 Screen 2 — Dashboard

```
👋 Welcome back <username>
What's on your mind today... 👀

→ View Posts
→ Create Post
→ My Account
→ Find Friend
→ Settings
--------------------
→ Logout
```

Navigation:

- View Posts → Screen 3
- Create Post → Screen 4
- My Account → Screen 5

---

# 📰 Screen 3 — View Posts

## Screen 3.1 — All Posts (Paginated)

Rules:

- Show **5 posts per page**
- Include page indicator

Post Card Format:

```
Title: <post-title>
Description: <post-description>
Tags: <tags>
Author: <author>

→ React To Post
→ Next Page
→ Previous Page
→ Back
```

Navigation:

- React To Post → Screen 3.2

---

## ❤️ Screen 3.2 — React To Post

```
React To This Post
------------------
→ Like
→ Comment
→ View Comments
----------
→ Back
```

Behavior:

- Like → toggle like
- Comment → prompt input → save to DB

---

# ✍️ Screen 4 — Create Post

## Screen 4.1 — Create Menu

```
Create Post
-----------
→ Add Post
→ Back
```

---

## Screen 4.2 — Add Post Form

```
Enter post title: ________
Enter description: ________
Enter tags (comma separated): ________
```

Result:

- Save to database
- Redirect → Dashboard

---

# 👤 Screen 5 — My Account

## Screen 5.1 — Account Menu

```
My Account
----------
→ My Posts
→ Create New Post
→ Edit Account
→ My Friends
--------------
→ Back
```

---

## 🗂 Screen 5.2 — My Posts

Features:

- List only user’s posts
- Per post actions available

```
<Post Title>
→ Edit
→ Delete
→ View
----------
→ Back
```

---

## ➕ Screen 5.3 — Create New Post

Redirects to:

- Screen 4 (Create Post Flow)

---

## ⚙️ Screen 5.4 — Edit Account

```
Edit Account
------------
→ General Details
→ Password & Security
---------------------
→ Back
```

### General Details

- Change username
- Change bio (optional)
- Change display name

### Password & Security

- Change password
- Logout from all sessions (future feature)

---

## 👥 Screen 5.5 — My Friends

```
My Friends
----------
→ Friend 1
→ Friend 2
→ Friend 3
----------------
→ Back
```

Selecting a friend:

- Opens Friend Profile Screen (Future Screen)

Actions:

- Remove Friend
- View Profile

---

# 🔍 Future Screens (Planned)

- Find Friend
- Friend Profile View
- Settings
- Notifications
- Search Posts

---

# 🧠 Data Rules (Important for Implementation)

- Users table → username must be unique
- Posts table → linked with user_id
- Comments table → linked with post_id + user_id
- Likes table → unique(user_id, post_id)
- Pagination → limit + offset query

---
