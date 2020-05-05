const express = require('express')

const sysRouter = require('./sys.js')
const dictionaryRouter = require('./dictionary.js')

module.exports = (middleware) => {
	const router = express.Router()

	router.use(sysRouter(middleware))
	router.use(dictionaryRouter(middleware))

	return router
}
