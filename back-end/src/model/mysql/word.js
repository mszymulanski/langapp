module.exports = (sequelize, DataTypes) => {
  const word = sequelize.define('word', {
    word: DataTypes.STRING,
    language_id: {
      type: DataType.INTEGER,
      references: {
	model: sequelize.models.Language,
        key: 'id',
      },
    },
  }, {
    freezeTableName: true,
  })

  word.associate = function(models) {
  
  }

  return word
}
