# Battlerite Tools

This is a work in progress to give Battlerite players a place to create, edit, and share builds outside of the game.

## Installation

Create database and npm install:
```
createdb battlerite-tools
npm install
```

## Parameters
Required parameters:
```
export BATTLERITE_DATABASE_NAME=<YOUR DATABASE NAME>
export BATTLERITE_DATABASE_USER_NAME=<YOUR DATABASE USER NAME>
export BATTLERITE_DATABASE_USER_PASSWORD=<YOUR DATABASE USER PASSWORD>
```

Optional parameters:
```
export BATTLERITE_DATABASE_HOST=<SOME URL>
export BATTLERITE_DATABASE_PORT=<SOME PORT>
```

## Run

To seed database and start server:
```
npm run seed
npm start
```

## Credits

Jake Hackett

James Grippo

Lumbini Parnas

All Battlerite content is property of Stunlock Studios
