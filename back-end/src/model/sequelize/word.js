module.exports = (sequelize, DataTypes) => {
  const word = sequelize.define('word', {
    word: DataTypes.STRING,
    language_id: {
      type: DataTypes.INTEGER,
      references: {
	model: sequelize.models.Language,
        key: 'id',
      },
    },
  }, {
    freezeTableName: true,
  })

  word.associate = function(models) {
    models.word.belongsTo(models.language, { foreignKey: 'language_id' })      
  }

  return word
}
