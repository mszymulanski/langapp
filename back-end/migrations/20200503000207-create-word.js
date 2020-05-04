module.exports = {
  up: async (queryInterface, Sequelize, model) => {
    await queryInterface.createTable('word', {
      id: {
	type: Sequelize.INTEGER,
        autoIncrement: true,
	allowNull: false,
	primaryKey: true,
      },
      word: {
	type:Sequelize.STRING,
        allowNull: false,
      },
      language_id: {
	type: Sequelize.INTEGER,
	allownNull: false,
	references: {
	  model: 'language', 
          key: 'id',
	},
      },
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('word')
  }
}
