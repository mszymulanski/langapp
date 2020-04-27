const nconf = require('nconf')
const path = require('path')

nconf.argv()
     	.env()
	.file({
		file: path.join(__dirname, path.sep, 'default.json'),
		format: require('nconf-json'),
	})

module.exports = nconf.get()
