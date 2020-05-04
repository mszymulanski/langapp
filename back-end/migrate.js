const Umzug = require('umzug');
const path = require('path');
const { Sequelize } = require('sequelize')

const config = require('./config')
const lib = require('./src/lib')
const model = require('./src/model')

const sequelize = lib.databaseConnection.sequelize(config.DATABASE.MYSQL)

const umzug = new Umzug({
  migrations: {
    path: path.join(__dirname, './migrations'),
    // inject parameters passed to the migrations
    params: [
      sequelize.getQueryInterface(),
      Sequelize,
      model,
    ]
  },
  storage: 'sequelize',
  storageOptions: {
    sequelize: sequelize
  }
})

;(async () => {
  // checks migrations and run them if they are not already applied
  await umzug.up()
  console.info('All migrations performed successfully')
  process.exit()
})()
