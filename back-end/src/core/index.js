module.exports = (api, config, model) => ({
  dictionary: require('./dictionary.js')(api, config, model),
})
