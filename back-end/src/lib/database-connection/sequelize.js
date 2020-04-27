const { Sequelize } = require('sequelize')

module.exports = (mysqlConfig) =>
	new Sequelize(
		mysqlConfig.database,
		mysqlConfig.user,
		mysqlConfig.password,
		{
			host: mysqlConfig.host,
			port: mysqlConfig.port,
			dialect: 'mysql',
		},
	)
