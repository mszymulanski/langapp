const Api = require('./api')
const model = require('./model')
const Core = require('./core')
const Rest = require('./rest')

module.exports = (db, http, config) => {
	const api = Api(http, config)
	const core = Core(api, config, model)
	const middleware = Rest.Middleware(core, db)
	const routes = Rest.Routes(middleware)

	return { routes, core }
}
