const Bluebird = require('bluebird')

module.exports = (api, config, model) => ({

  createLanguage: (sequelize, code, name) => {
    console.log('creating a langauge!')
    return Bluebird.resolve('boo hoo')
  },

})
