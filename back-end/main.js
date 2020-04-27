const config = require('./config')
const lib = require('./src/lib')
const sequelize = lib.databaseConnection.sequelize(config.DATABASE.MYSQL)
