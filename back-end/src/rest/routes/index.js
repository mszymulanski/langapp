const express = require('express')

const sysRouter = require('./sys.js')

module.exports = (middleware) => {
	const router = express.Router()

	router.use(sysRouter(middleware))

	return router
}
