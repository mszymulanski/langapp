const express = require('express')()

const config = require('./config')
const lib = require('./src/lib')
const sequelize = lib.databaseConnection.sequelize(config.DATABASE.MYSQL)

// Http stub - an http library will be set up in ./src/lib/http
const Http = {}

const { routes, core } = require('./src')(sequelize, Http, config)

express.use('/',  routes)

express.listen(config.APP.port, () => {
	console.log(`${config.APP.name} Express listening on port ${config.APP.port}`)
})
