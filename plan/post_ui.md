# 📰 Posts Module — CLI UI Specification

---

# 📋 Screen P0 — All Posts (Paginated List)

Purpose: Display list of all available posts.

## Post Row Format

```
[1] <post-title-truncated>
Author: <username> | 👍 <likeCount> | 👎 <dislikeCount>

→ View Post
→ React To Post
```

## Footer Navigation

```
----------------
→ Next Page
→ Previous Page
→ Back (Dashboard)
```

## Navigation

- View Post → Screen P1 (selected post)
- React To Post → Screen P2 (selected post)
- Back → Dashboard
- Next/Previous → reload P0 with new offset

## Display Rules

- Show **maximum 5 posts per page**
- Order: newest first
- Title is truncated to **80 characters**
- If title exceeds limit → append `...`
- Each post is selectable

---

# 📄 Screen P1 — View Single Post

Purpose: Show full post content + metadata.

## Display Format

```
<post-title>

<full-description>

Author: <username>
👍 <likeCount> | 👎 <dislikeCount>
Posted: <createdAt>
```

## Optional Fields (Conditional Render)

Show only if present:

```
Tags: <tag1, tag2, ...>
```

## Navigation

```
-----------
→ React To Post
→ Back (Posts List)
```

Rules:

- Missing metadata fields must NOT render empty labels
- Preserve selected post context

---

# ❤️ Screen P2 — React To Post

Purpose: Allow user reactions on the selected post.

## Menu

```
React To Post
-------------
→ Toggle Like
→ Toggle Dislike
→ Add Comment
→ View Comments
-------------
→ Back (View Post)
```

## Reaction Rules

- User can have **only one active reaction**
  - Like OR Dislike OR None
- Toggling Like removes Dislike
- Toggling Dislike removes Like
- Clicking active reaction again removes it

## Comment Flow

Selecting “Add Comment” opens:

```
Enter comment:
> ________
```

After submit:

- Save comment
- Return to React screen

---

# 🔁 State Rules (Important)

- Each navigation opens a **new screen render**
- Selected post ID must be passed forward
- No global mutable “current post” — pass context
- Reaction updates must refresh counts

---

# ⚠️ Edge Cases

- No posts → show empty state screen
- Page overflow → disable next/prev option
- Deleted post → show “post not found” and return
- Author deleted → show “Unknown user”

---
