const express = require('express')

module.exports = (middleware) => {
	const router = express.Router()

	router.post('/dictionary/language', middleware.compose(
		middleware.dictionary.createLanguage
	))

	return router
}	
