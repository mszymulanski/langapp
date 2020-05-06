const { Sequelize } = require('sequelize')

module.exports = (mysqlConfig, sequelizeModels) => {
    const sequelize = new Sequelize(
		mysqlConfig.database,
		mysqlConfig.user,
		mysqlConfig.password,
		{
			host: mysqlConfig.host,
			port: mysqlConfig.port,
			dialect: 'mysql',
			define: {
				freezeTableName: true,
			},
		},
	)

    sequelize.models = sequelizeModels(sequelize, Sequelize)

    return sequelize
}
