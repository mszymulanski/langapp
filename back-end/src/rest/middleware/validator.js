/**
  * This middleware checks if express-validator returned any errors.
  * When errors are present, then return HTTP response with errors.
  * Else, proceed to pass validated inputs to the next middleware.
  */

const expressValidator = require('express-validator')

module.exports = (req, res, next) => {
  const errors = expressValidator.validationResult(req)
  if (errors.isEmpty()) {
    req.valid = expressValidator.matchedData(req)
    next()
  } else {
    return res.status(400).json({ errors: errors.array() })
  }
}
