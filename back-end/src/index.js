const Api = require('./api')
const model = require('./model')
const Core = require('./core')
const Rest = require('./rest')

module.exports = (db, http, config) => {
	const api = Api(http, config)
        // Replace model.sequelize with instantiated Sequelize which includes
        // the sequelize models.
	const core = Core(api, config, { mysql: model.mysql, sequelize: db.sequelize, })
	const middleware = Rest.Middleware(core, db)
	const routes = Rest.Routes(middleware)

	return { routes, core }
}
