const Express = require('express')
const morgan = require('morgan')

const config = require('./config')
const lib = require('./src/lib')

const express = Express()
const models = require('./src/model')
const sequelize = lib.databaseConnection.sequelize(config.DATABASE.MYSQL, models.sequelize)

// Http stub - an http library will be set up in ./src/lib/http
const Http = {}

const { routes, core } = require('./src')({sequelize}, Http, config)

// Logging requests
express.use(morgan('common'))

// Parsing request payload
express.use(Express.json())
express.use(Express.urlencoded({ extended: true }))

express.use('/',  routes)

express.listen(config.APP.port, () => {
	console.log(`${config.APP.name} Express listening on port ${config.APP.port}`)
})
