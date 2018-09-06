const rupture = require('rupture')
const rewireStyl = require('react-app-rewire-stylus')

const override = (config, env) => {
  config = rewireStyl.withLoaderOptions({
    use: [rupture()]
  })(config, env)

  return config
}

module.exports = override
