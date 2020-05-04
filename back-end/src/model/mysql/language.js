module.exports = (sequelize, DataTypes) => {
  const language = sequelize.define('language', {
    code: DataTypes.STRING,
    name: DataType.STRING,
  }, {
    freezeTableName: true,
  })

  language.associate = function(models) {
    // associations can be defined here
  }

  return language
}
