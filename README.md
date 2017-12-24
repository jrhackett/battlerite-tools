# Battlerite Tools

This is a work in progress to give Battlerite players a place to create, edit, and share builds outside of the game.

## Installation

Create database and npm install:
```
createdb battlerite-tools
npm install
```

## Environment Variables
This app requires several environment variables. You should specify all environment variables in a file called `.env` at the root of the project.
```
BATTLERITE_DATABASE_NAME=<YOUR DATABASE NAME>
BATTLERITE_DATABASE_USER_NAME=<YOUR DATABASE USER NAME>
BATTLERITE_DATABASE_USER_PASSWORD=<YOUR DATABASE USER PASSWORD>
SERVER_PORT=<THE PORT TO RUN THE SERVER ON>
SERVER_TEST_PORT=<THE PORT TO RUN THE SERVER ON FOR TESTING>
```

Optional parameters:
```
BATTLERITE_DATABASE_HOST=<SOME URL>
BATTLERITE_DATABASE_PORT=<SOME PORT>
```

## Run

To seed database and start the application:
```
npm run seed
npm start
```

## Credits

Jake Hackett

James Grippo

Lumbini Parnas

All Battlerite content is property of Stunlock Studios
