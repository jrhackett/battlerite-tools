const debug = require('debug')('sql')
const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../package.json')

const databaseName = process.env.BATTLERITE_DATABASE_NAME || pkg.name;
// const url = process.env.BATTLERITE_DATABASE_URL || `postgres://postgres:database@localhost:5432/battlerite-tools`;
const userName = process.env.BATTLERITE_DATABASE_USER_NAME;
const userPassword = process.env.BATTLERITE_DATABASE_USER_PASSWORD;
const host = process.env.BATTLERITE_DATABASE_HOST || 'localhost';
const port = process.env.BATTLERITE_DATABASE_PORT || 5432;


console.log(chalk.yellow(`Opening database connection to ${host}${databaseName}`));

// create the database instance
const db = module.exports = new Sequelize(databaseName, userName, userPassword, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  host: host,
  port: port,
  dialect: 'postgres',
  define: {
    underscored: true,       // use snake_case rather than camelCase column names
    freezeTableName: true,   // don't change table names from the one specified
    timestamps: true,        // automatically include timestamp columns
  }
})

// pull in our models
require('../server/models')

// sync the db, creating it if necessary
function sync(retries=0, maxRetries=5) {
  return db.sync({force:false})
    .then(ok => console.log(`Synced models to db ${host}:${databaseName}`))
    .catch(fail => {
      console.log(fail)
    })
}

db.didSync = sync()
