module.exports = (sequelize, DataType) => ({
  language: require('./language.js')(sequelize, DataType),
  word: require('./word.js')(sequelize, DataType),
})
