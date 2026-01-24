# CLI based Social Media App

## User flow

## ✅ Directory Structure

- [x] main
- [x] src
  - [x] app - app logic
  - [x] db - database logic
  - [x] ui - for user input
- [x] test
- [x] db

## ✅ Tasks

- [x] dev
- [x] test
- [x] test:watch
- [x] coverage
- [x] coverage:detail
- [ ] clear-db

## ✅ dependency and set up

- [x] git init
- [x] deno init
- [x] assert
- [x] testing/bdd
- [x] .gitignore
- [x] inquirer

## ✅ Version 1

1. Program starts
2. User see login or sign up message
3. New user can sign up
4. Existing user can login throw username & password
5. User will be directed to their dashboard after login/signup
6. Their user can see some dummy posts in the database

## Database

- In memory JSON version of database will be used in the beginning
- After implementing **Version 1**, will shift to sqlite

## Version 2

### After login to the app, user can do following thing

- [x] view posts - All posts in the in memory db will be shown
- [x] create post - New post will be saved to in memory db
- [ ] edit account - user can change their username and password
- [ ] view my posts - User can view their posts, they can edit or delete
- [ ] logout
