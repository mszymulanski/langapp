const Bluebird = require('bluebird')

module.exports = (api, config, model) => ({

  createLanguage: (code, name) => {
    return model.sequelize.models.language.create({
      name: name,
      code: code,
    })
  },

})
