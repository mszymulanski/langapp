module.exports = (sequelize, DataTypes) => {
  const language = sequelize.define('language', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {
    freezeTableName: true,
    timestamps: false,
  })

  language.associate = function(models) {
    // associations can be defined here
  }
 
  return language 
}
