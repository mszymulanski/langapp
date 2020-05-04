'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('language', {
      id: {
	type: Sequelize.INTEGER,
        autoIncrement: true,
	allowNull: false,
	primaryKey: true
      },
      code: {
	type:Sequelize.STRING,
        allowNull: false
      },
      name: {
	type: Sequelize.STRING,
   	allowNull: false
      }
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('language');
  }
};
