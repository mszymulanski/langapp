const express = require('express')

module.exports = (middleware) => {
	const router = express.Router()

	router.get('/sys', (req, res, next) => {
		try {
			res.send('Hello World!')
		} catch (err) {
			next(err)		
		}
	})

	return router
}	
