# 🎯 Interests Feature — UI Specification

---

# 👤 Screen I1 — Manage Interests

Location: My Profile → Settings → General Info → Interests

## Goal

- Store user interests for future recommendations
- Display interests on user profile
- Used later for friend/content matching

## Menu

```
Your Interests
--------------

• <interest 1>
• <interest 2>
• <interest 3>
• <interest 4>
• <interest 5>

--------------
→ Add Interests
→ Delete Interests
--------------
→ Back
```

## Navigation

- Add Interests → Screen I2
- Delete Interests → Screen I3
- Back → General Info Screen

## Rules

- User can have **maximum 5 interests**
- Interests must come from predefined list only
- No free-text interests allowed
- Interests list must be shown sorted alphabetically
- If user has zero interests → show empty state message
- Interest list must reflect latest saved state

---

# ➕ Screen I2 — Add Interests

## Menu

```
Add Interests
-------------

[ ] Healthcare
[ ] Science
[ ] Technology
[ ] Sports
[ ] Business
[ ] Finance
[ ] Education
[ ] Arts
[ ] Travel
[ ] Food

(select using checkbox)

--------------
→ Save Selection
→ Back
```

## Navigation

- Save Selection → Screen I1
- Back → Screen I1 (no change)

## Rules

- Use checkbox selection
- Show all predefined interests
- Already-selected interests must appear pre-checked
- Total selected (existing + new) ≤ 5
- If selection exceeds 5 → block save + show error
- Duplicate interests not allowed
- Save must overwrite previous interest set

---

# ➖ Screen I3 — Delete Interests

## Menu

```
Remove Interests
----------------

[x] <interest 1>
[x] <interest 2>
[x] <interest 3>

(select to remove)

--------------
→ Remove Selected
→ Back
```

## Navigation

- Remove Selected → Screen I1
- Back → Screen I1 (no change)

## Rules

- Show only user’s current interests
- Checkbox selection = interests to remove
- Removing all interests is allowed
- Remove action must persist immediately
- After delete → refresh interest list

---

# 📌 Global Rules — Interests Module

- Interest values must come from constant predefined array
- Store interests as normalized values (lowercase keys)
- Display interests as formatted labels
- No DB calls directly from UI layer
- All updates must go through profile service layer

---
