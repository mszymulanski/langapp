const expressValidator = require('express-validator')

module.exports = (core, db) => ({

  createLanguage: {
    validators: [
      expressValidator.check('code').isString(),
      expressValidator.check('name').isString(),
    ],
    handler: (req, res, next) => {
      return core.dictionary.createLanguage(
        db.sequelize,
        req.valid.code,
        req.valid.name,
      )
        .then((data) => res.json(data))
        .catch(next)
    },
  },

})
