const rewireStyledComponents = require('react-app-rewire-styled-components')
const rewireTypescript = require('react-app-rewire-typescript')

const override = (config, env) => {
  config = rewireStyledComponents(config, env)
  return rewireTypescript(config, env)
}

module.exports = override
