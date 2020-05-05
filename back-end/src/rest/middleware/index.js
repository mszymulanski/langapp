const composeMiddleware = require('compose-middleware')

const validatorMiddlewareHandler = require('./validator.js')

function _compose({validators, handler}) {
  return composeMiddleware.compose([
    validators,
    validatorMiddlewareHandler,
    handler,
  ])
}

module.exports = (core, db) => ({
  compose: _compose,
  dictionary: require('./dictionary.js')(core, db),
})
